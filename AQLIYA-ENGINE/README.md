# AQLIYA-ENGINE Tools

This folder contains workflows, agent configs, scripts and docs for the Notion validator
and agent router. Files are placeholders/stubs to be expanded.

Structure:

- `workflows/` — workflow definitions (JSON)
- `agents/` — agent manifest files
- `scripts/` — validator/router/autocorrector scripts
- `docs/` — documentation and specs
# 🚀 AQLIYA-ENGINE v1.0

Core API for AQLIYA Decision Intelligence Platform

AQLIYA-ENGINE هو المحرك الأساسي لمنصة AQLIYA، ويعمل كطبقة Backend موحّدة تربط:

- AQLIYA-APP (واجهة المنصة)
- n8n Orchestrator
- Benchmark Cloud
- Insights Engine
- Agents Layer
- JSON Builder

ويمثل نقطة الدخول الرسمية للذكاء التشغيلي والتكامل بين مكوّنات النظام.

## 📦 ميزات النسخة v1.0

- Health API جاهزة
- Benchmarks API (placeholder)
- Insights API (placeholder)
- Agents API
- Logs API (in-memory)
- Orchestration API (تشغيل workflows في n8n)
- Fastify server with TypeScript
- جاهز للنشر على Railway
- يدعم environment variables
- Integration-ready مع AQLIYA-APP

## 🗂 هيكلة المشروع

```
AQLIYA-ENGINE/
├── src/
│   ├── index.ts                # Entry point
│   ├── routes/
│   │   ├── health.ts
│   │   ├── benchmarks.ts
│   │   ├── insights.ts
│   │   ├── agents.ts
│   │   ├── orchestrate.ts
│   │   └── logs.ts
│   ├── services/
│   │   └── n8n.ts
│   └── types/
│       └── common.ts
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

## ⚙️ Environment Variables

انسخ الملف:

```bash
cp .env.example .env
```

وحرّر القيم:

```
PORT=3000
ENGINE_ENV=production
ENGINE_VERSION=1.0.0

N8N_BASE_URL=https://YOUR-N8N-URL
N8N_API_KEY=OPTIONAL
```

## ▶️ التشغيل محليًا

```bash
npm install
npm run dev
```

يفترض أن يعمل على:

http://localhost:3000

## 🧪 API Endpoints

- `/health` — Status + uptime + n8n connection.
- `/benchmarks` — Placeholder data — سيتم ربطه لاحقاً بـ Notion Benchmark Cloud.
- `/insights` — Insights Layer v1.0 (placeholder).
- `/agents` — قائمة الـ 8 Agents الرسمية.
- `/logs` — Logs in-memory.
- `/orchestrate` (POST) —

```json
{ "workflowId": "my-workflow", "payload": { "example": true } }
```

## 🚀 النشر على Railway

1. أنشئ مشروع جديد على Railway
2. اربط الريبو
3. اضبط Environment Variables في Railway

Railway سيبني المشروع باستخدام:

```bash
npm install
npm run build
npm start
```

URL الناتج مثال:

`https://aqliya-engine-production.up.railway.app`

## 🔗 ربط AQLIYA-APP

ضع في `AQLIYA-APP/.env.local`:

```
NEXT_PUBLIC_AQLIYA_ENGINE_URL="https://YOUR-ENGINE-URL"
NEXT_PUBLIC_AQLIYA_N8N_URL="https://YOUR-N8N-URL"
```

ثم شغّل الـ APP:

```bash
npm run dev
```

## 🧭 خارطة التطوير القادمة

- ربط Benchmark Cloud من Notion
- بناء Insights Engine v2
- ربط Agents Logic الحقيقي
- إضافة Authentication Layer
- إضافة Logging DB
- إضافة Telemetry Dashboard

---

README جاهز للاستخدام والرفع.
