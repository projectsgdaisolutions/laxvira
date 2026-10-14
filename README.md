# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# LAXVIRA — Smart Billing & Enterprise POS Platform

LAXVIRA is an enterprise-grade billing, point-of-sale, and inventory management platform designed for multi-tier retail and service operations. It features an automated invoice-scanning pipeline powered by local Computer Vision (PaddleOCR) and a fine-tuned Small Language Model (Qwen2.5-1.5B via Ollama) to extract and autofill financial documents into structured JSON without sending sensitive company data to third-party cloud APIs.

---

## Architecture Overview

- **Frontend:** React.js, Tailwind CSS / Custom UI Component Library
- **Backend:** FastAPI (Python), SQLAlchemy ORM, Pydantic v2
- **Document Intelligence Pipeline:**
  - **Text Extraction:** PaddleOCR (angle classification & layout detection)
  - **Inference Engine:** Fine-tuned `Qwen2.5-1.5B-Instruct` (quantized to Q4_K_M GGUF, served via Ollama)
- **Payment Processing:** Razorpay API & Webhook Verification
- **Authentication:** OAuth2 with JWT (Role-Based Access: Superadmin, Store Admin, Cashier)

---

## Local Development Setup

### 1. Backend Service

````bash
cd gd-billing-backend
python -m venv venv
venv\Scripts\activate   # Windows PowerShell: .\venv\Scripts\Activate.ps1
pip install -r requirements.txt


2. SLM Runtime (Ollama)Ensure Ollama is installed and active on the host machine:Bash# From the backend root containing the Modelfile and .gguf weight:
ollama create laxvira-invoice -f Modelfile
ollama list
3. Run Development ServerBashuvicorn main:app --reload --port 8000
Access interactive API documentation at: http://localhost:8000/docsPre-Deployment ChecklistComplete these operational tasks before moving this build to production:1. Database Migration (SQLite to PostgreSQL)SQLite uses single-file locking and cannot handle concurrent transactions in a live multi-user store environment.Provision a managed PostgreSQL instance (e.g., Supabase, Neon, AWS RDS, or self-hosted Docker).Install PostgreSQL drivers: pip install psycopg2-binary (or asyncpg).Update your database engine URL in .env:Code snippetDATABASE_URL=postgresql://<DB_USER>:<DB_PASSWORD>@<DB_HOST>:5432/<DB_NAME>
Run migrations using Alembic:Bashalembic upgrade head


2. Environment Variables & Secret RotationMove .env out of source control.Set production variables in your cloud hosting provider:Generate a secure 64-character JWT SECRET_KEY: openssl rand -hex 32Set ENVIRONMENT=production to disable verbose stack traces.3. Payment Gateway Configuration (Razorpay)Replace all rzp_test_... credentials with active production keys (rzp_live_...).Configure a secure webhook URL pointing to /api/payments/razorpay-webhook.Verify payload signatures using the RAZORPAY_WEBHOOK_SECRET to prevent payment spoofing.4. Superadmin BootstrapDeploy with an initial seeding script or run the promote endpoint in Swagger UI (POST /api/auth/make-superadmin).Set the target enterprise owner's email address as the primary Superadmin.Immediately restrict or disable public access to the bootstrap endpoint once initial roles are provisioned.5. AI Inference Architecture & ScalabilityWorker Isolation: PaddleOCR and Ollama GGUF inference are CPU/GPU-intensive. Offload document parsing to an asynchronous task queue (e.g., Celery or ARQ with Redis) to prevent blocking main FastAPI event loop threads during large receipt uploads.Model Storage: Host the .gguf model binary in private cloud object storage (AWS S3, Google Cloud Storage, or private Hugging Face repo) with a startup download script rather than bundling the binary into deployment images.Process Manager: Serve the FastAPI backend behind Gunicorn with Uvicorn workers:

Bash:
gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app


API Reference (Key Endpoints)Method/Endpoint/Description

POST/api/auth/tokenAuthenticate user and issue JWT

POST/api/ai/extract-receiptProcess receipt image via OCR + SLM parser

POST/api/invoices/createPersist finalized invoice to database

POST/api/payments/orderInitialize Razorpay payment session

POST/api/payments/verifyValidate transaction signature
---

### Step 3: Git Commands to Push Cleanly

Run these commands inside your backend folder to initialize and push without dragging untracked clutter along:

```bash
git init
git branch -M main
git status


Check the untracked files list: make sure venv, .env, *.db, and *.gguf are not listed. Then finalize:Bashgit add .
git commit -m "Initial commit: Core billing backend, enterprise auth, and local SLM scanner"
git remote add origin <REMOTE_REPO_URL>
git push -u origin main


##########################################################
All STUFF NEEDS TO DO NEXT


Markdown
# LAXVIRA — Enterprise Billing, POS & AI Receipt Extraction Platform

LAXVIRA is a full-stack B2B/B2C billing, inventory, and point-of-sale (POS) platform. It includes a fully local, privacy-preserving Document Intelligence pipeline that extracts structured invoice data from uploaded receipt images using **PaddleOCR** and a custom fine-tuned **Qwen2.5-1.5B-Instruct** Small Language Model (SLM) served via **Ollama**.

---

## 1. What Has Been Built (Current State)

* **Core Backend (`FastAPI` + `SQLAlchemy`):** Complete multi-tenant architecture supporting stores, customers, inventory, expenses, subscriptions, and legal/pharmacy/rental/restaurant asset modules.
* **Authentication & RBAC:** JWT-based authentication supporting standard users, Store Admins, and Superadmin privileges.
* **Payment Gateway Integration:** Razorpay order creation and payment verification flows integrated (currently configured for test mode).
* **Local AI Receipt Scanner (`POST /api/ai/extract-receipt`):**
  * Accepts receipt images via multipart form upload from the React frontend.
  * Decodes images in-memory via `OpenCV` + `NumPy` and extracts raw layout text using `PaddleOCR` (with angle classification enabled for tilted photos).
  * Routes raw OCR text to a locally hosted `laxvira-invoice` Ollama model (fine-tuned via Unsloth QLoRA and quantized to 4-bit `Q4_K_M.gguf`) to return strict, schema-compliant JSON.
* **SLM Training Pipeline:** Includes `convert_excel.py`, `dataset.jsonl`, and `train.py` for future fine-tuning iterations on Google Colab.

---

## 2. Local Setup Guide (For Incoming Developer)

### Step 1: Clone & Set Up Python Environment
> **Note for Windows Developers:** Use Python 3.11 or 3.12 if possible. If using Python 3.13, `torchvision`, `torchaudio`, and `triton` must remain uninstalled to avoid C++ operator binding crashes.

```bash
cd gd-billing-backend
python -m venv venv

# Activate venv (Windows PowerShell)
.\venv\Scripts\Activate.ps1
# Activate venv (Linux/macOS)
source venv/bin/activate

pip install -r requirements.txt
Step 2: Configure Environment Variables
Copy .env.example to .env and fill in your local development credentials:

Bash
cp .env.example .env
Step 3: Set Up the Local AI Model (Ollama)
Because the compiled .gguf weight file (~1 GB) exceeds GitHub's 100 MB file limit, it is not tracked in Git.

Install Ollama on your machine and ensure the background service is running (localhost:11434).

Download the fine-tuned model file (qwen2.5-1.5b-instruct.Q4_K_M.gguf) from: [INSERT GOOGLE DRIVE / HUGGINGFACE LINK HERE] (Alternatively, re-run train.py on Google Colab using dataset.jsonl to generate a fresh .gguf file).

Place qwen2.5-1.5b-instruct.Q4_K_M.gguf directly inside the gd-billing-backend/ root directory (next to Modelfile).

Build and register the custom model in Ollama:

Bash
ollama create laxvira-invoice -f Modelfile
Verify the model is registered:

Bash
ollama list
# Should display "laxvira-invoice"
Step 4: Start the Backend Server
Bash
uvicorn main:app --reload --port 8000
API Docs (Swagger UI): http://localhost:8000/docs

3. Production Handover Checklist (Tasks for Next Developer)
The application currently runs on a local SQLite database (gdbilling.db) and test credentials. Complete the following tasks before deploying to production:

Task 1: Migrate Database from SQLite to PostgreSQL
SQLite uses file-level locking and will drop concurrent writes in production.

Provision a production PostgreSQL database (AWS RDS, Supabase, Render, or Docker).

Install the PostgreSQL driver in the environment:

Bash
pip install psycopg2-binary
Open database.py:

Replace the local SQLite connection URL (sqlite:///./gdbilling.db) with os.getenv("DATABASE_URL").

Important: Remove connect_args={"check_same_thread": False} from create_engine(), as that argument is strictly for SQLite and will cause PostgreSQL to crash.

Run Alembic migrations to initialize the production schema:

Bash
alembic upgrade head
Task 2: Superadmin Provisioning & Security Lock
Once the production database is live, register the client/owner's primary email account via the standard signup flow.

Open Swagger UI (http://<your-domain>/docs) and execute the Make Superadmin endpoint (in auth.py) using the client's email address to elevate their privileges.

Security Hardening: Once the production Superadmin is assigned, either protect the superadmin-promotion endpoint behind an existing Superadmin JWT dependency or disable the route in production so external users cannot elevate their own accounts via /docs.

Disable public Swagger UI in production inside main.py:

Python
app = FastAPI(docs_url=None, redoc_url=None) # Enable only in dev
Task 3: Razorpay Production Keys & Webhooks
Log into the client's Razorpay Dashboard and switch from Test Mode to Live Mode.

Generate live API credentials (rzp_live_...) and update .env:

Code snippet
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxx
RAZORPAY_WEBHOOK_SECRET=xxxxxxxxxxxxxxxx
Configure the live webhook URL in the Razorpay Dashboard to point to the deployed backend payment verification route.

Task 4: Environment & CORS Configuration
Generate a fresh cryptographic JWT secret key for .env (openssl rand -hex 32).

In main.py, update CORSMiddleware allow_origins from ["*"] / localhost to strictly match the deployed React frontend domain (e.g., ["https://app.laxvira.com"]).

Task 5: Scalability & AI Inference Architecture
Server Workers: Run FastAPI using Gunicorn with Uvicorn workers (gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app). Note: Because PaddleOCR loads weights globally on import, each worker process will consume ~500MB–1GB of RAM. Size your server RAM accordingly.

Non-Blocking Inference: In extract_receipt, ocr.ocr() and requests.post() are synchronous CPU/GPU-bound calls inside an async def endpoint. For high concurrency, change async def extract_receipt to a standard def extract_receipt (so FastAPI runs it in a separate threadpool) or offload OCR + Ollama calls to a background Celery/Redis queue.

Host Requirements for Ollama: Ensure the production server hosting Ollama has either a dedicated GPU (4GB+ VRAM) or high-frequency CPU cores with at least 8GB of system RAM to run the 4-bit quantized Qwen2.5-1.5B model smoothly.
````
