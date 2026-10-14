from unsloth import FastLanguageModel

import torch
from datasets import load_dataset
from transformers import TrainingArguments
from trl import SFTTrainer
from unsloth import FastLanguageModel

# 1. Configuration tuned strictly for 6 GB RTX 3060
MAX_SEQ_LENGTH = 2048
BASE_MODEL = "unsloth/Qwen2.5-1.5B-Instruct"

print("Loading base model in 4-bit...")
model, tokenizer = FastLanguageModel.from_pretrained(
    model_name=BASE_MODEL,
    max_seq_length=MAX_SEQ_LENGTH,
    dtype=None,             # Automatically selects fp16 or bf160
    load_in_4bit=True,      # Keeps base weights under 1.5 GB VRAM
)

# 2. Add LoRA Adapters (trainable weight layers)
model = FastLanguageModel.get_peft_model(
    model,
    r=16,
    target_modules=[
        "q_proj", "k_proj", "v_proj", "o_proj",
        "gate_proj", "up_proj", "down_proj"
    ],
    lora_alpha=16,
    lora_dropout=0,
    bias="none",
    use_gradient_checkpointing="unsloth",  # Cuts activation memory drastically
)

# 3. Format dataset to Qwen Chat Template
prompt_template = """<|im_start|>system
You are a specialized enterprise invoice parser. Extract details into valid JSON.<|im_end|>
<|im_start|>user
{instruction}

Invoice Text:
{input}<|im_end|>
<|im_start|>assistant
{output}<|im_end|>"""

def format_prompts(batch):
    texts = []
    for inst, inp, out in zip(batch["instruction"], batch["input"], batch["output"]):
        texts.append(prompt_template.format(instruction=inst, input=inp, output=out))
    return {"text": texts}

print("Loading and mapping dataset.jsonl...")
dataset = load_dataset("json", data_files="dataset.jsonl", split="train")
dataset = dataset.map(format_prompts, batched=True)

# 4. Trainer Setup
trainer = SFTTrainer(
    model=model,
    tokenizer=tokenizer,
    train_dataset=dataset,
    dataset_text_field="text",
    max_seq_length=MAX_SEQ_LENGTH,
    dataset_num_proc=2,
    packing=False,
    args=TrainingArguments(
        per_device_train_batch_size=2,
        gradient_accumulation_steps=4,  # Effective batch size = 8
        warmup_steps=10,
        max_steps=120,                  # ~120 steps is enough for convergence on this dataset
        learning_rate=2e-4,
        fp16=not torch.cuda.is_bf16_supported(),
        bf16=torch.cuda.is_bf16_supported(),
        logging_steps=10,
        optim="adamw_8bit",             # Saves ~1.5 GB VRAM
        weight_decay=0.01,
        lr_scheduler_type="linear",
        seed=3407,
        output_dir="invoice_checkpoints",
    ),
)

# 5. Start Fine-Tuning
print("Starting training run on your RTX 3060...")
trainer.train()

# 6. Export directly to GGUF format for Ollama
print("\nExporting merged model to 4-bit GGUF for Ollama deployment...")
model.save_pretrained_gguf(
    "laxvira_invoice_model",
    tokenizer,
    quantization_method="q4_k_m"
)
print("\nTraining and quantization complete! Model saved to laxvira_invoice_model-unsloth.Q4_K_M.gguf")