# MetroMind 
## 🚇 Overview
MetroMind is an AI-powered intelligent depot management and scheduling system built for Kochi Metro.
It acts as the central brain for depot operations — autonomously optimizing train scheduling, maintenance planning, and resource allocation through advanced mathematical optimization and machine learning.
MetroMind transforms conventional human-dependent depot workflows into predictive, adaptive, and self-optimizing operations, ensuring efficiency, safety, and reliability across every daily cycle.

<!-- ## ✨ Key Features
- Virtual Depot Twin – Real-time digital replica of the entire depot built by aggregating sensor data, maintenance logs, and operational inputs.
- AI-Driven Optimization – Multi-objective scheduling using Google OR-Tools CP-SAT solver for train readiness, maintenance, and parking arrangements.
- Predictive Intelligence – Machine learning models (LSTM, XGBoost, RandomForest) forecast failures, optimize departure sequences, and adapt to disruptions.
- Ad-Aware Scheduling – Integrates commercial campaigns into scheduling to maximize advertisement visibility and metro revenue.
- Interactive Dashboard – Next.js + Tailwind interface for real-time visualization, predictive heatmaps, and natural-language commands.
- Voice Command Interface – Speech-enabled assistant (OpenAI Whisper + Google TTS) supporting Malayalam and English.
- Failure Horizon AI – Predicts possible subsystem faults hours in advance, minimizing downtime and improving reliability.
- Human-in-the-Loop Learning – Learns from supervisor overrides to continuously refine scheduling intelligence.

## ⚙️ Core Functional Flow

```text
Train Sensors & Maintenance Systems  ─▶  Data Ingestion Layer (FastAPI + MQTT)
                                            │
                                            ▼
                                Virtual Depot Twin (Realtime Digital Model)
                                            │
                                            ▼
                        Optimization Engine (CP-SAT Solver + Rule Constraints)
                                            │
                                            ▼
                       Predictive Intelligence (ML Models + AI Reasoning)
                                            │
                                            ▼
                Visualization & Control (Next.js Dashboard + Voice Interface)
```
## 🧩 Optimization Objectives
- Hard Constraints: Safety, certification validity, maintenance job locks.
- Soft Constraints: Readiness scores, energy minimization, shunting reduction, mileage balance.
- Commercial Factors: Ad campaign priority, exposure time, event-based dispatching.
- Operational Factors: Crew shifts, bay availability, weather adaptation. -->

## 🧑‍💻 Setup Instructions 
## setup instruc for hiya

Open Terminal 1 and run:

cd ~/metro-mind/metro-mind-main/backend
source venv/bin/activate
python -m uvicorn app.main:app --reload --port 8000

Wait until you see: Application startup complete.


Open Terminal 2 and run:

cd ~/metro-mind/metro-mind-main
npm run dev

Wait until you see:

Local: http://localhost:3000

Login creds- KM-2026-0001 , hiya.wadhwa.mail@gmail.com , pass -Mee***** , 


```bash
# 1. Clone Repository
git clone https://github.com/yourusername/metromind.git
cd metromind

# 2. Backend Setup
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

# 3. Frontend Setup
cd frontend
npm install
npm run dev
