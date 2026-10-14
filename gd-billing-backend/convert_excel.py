import json
import re
import pandas as pd

# 1. Update with your exact Excel file name
EXCEL_FILE = "converted_invoice_dataset.xlsx"  # or your actual filename (e.g. filename.xlsx)

print(f"Reading {EXCEL_FILE}...")
# Reads the first sheet of your workbook
df = pd.read_excel(EXCEL_FILE)

# Clean and strip any accidental whitespace around column names
df.columns = df.columns.str.strip()

INPUT_COL = "Input"
OUTPUT_COL = "Final_Output"

# Drop rows missing either the input text or target output
df = df.dropna(subset=[INPUT_COL, OUTPUT_COL])

output_filename = "dataset.jsonl"
success_count = 0

with open(output_filename, "w", encoding="utf-8") as f:
    for idx, row in df.iterrows():
        raw_input = str(row[INPUT_COL]).strip()
        raw_output = str(row[OUTPUT_COL]).strip()

        # Ensure raw_output is valid JSON formatting
        try:
            # Parse the JSON string from Excel to validate it
            parsed_json = json.loads(raw_output)
            clean_output = json.dumps(parsed_json)
        except json.JSONDecodeError:
            # If quotes or formatting are slightly loose in Excel, keep it as clean string
            clean_output = raw_output

        training_sample = {
            "instruction": "Extract structured JSON from the invoice text.",
            "input": raw_input,
            "output": clean_output,
        }

        f.write(json.dumps(training_sample, ensure_ascii=False) + "\n")
        success_count += 1

print(f"Converted {success_count} rows successfully!")
print(f"Output saved to: {output_filename}")