---
title: PRD – SGCP v3.3.1 — Stack 100% Gratuita e Open Source
version: 3.3.1
date: 2026-02-21
author: Gabriel Ramos
status: Aprovado
---

## PRD — Sistema de Gestão de Ciclo & Performance (SGCP)

### Versão 3.3.1 | Stack 100% Free & Open Source

---

## Changelog

| Versão    | Data           | Alteração                                                           |
| --------- | -------------- | ------------------------------------------------------------------- |
| 1.0.0     | 2026-02-21     | PRD inicial                                                         |
| 2.0.0     | 2026-02-21     | Stack ShadCN/UI + Next.js 15                                        |
| 3.0.0     | 2026-02-21     | Migração para stack OSS (Better Auth + Turso + Coolify)             |
| 3.1.0     | 2026-02-21     | Simplificação: Supabase + Vercel Blob + Vercel Deploy               |
| 3.2.0     | 2026-02-21     | Correções Técnicas: Pooling, Async Cookies, Schema DB               |
| 3.3.0     | 2026-02-21     | Performance & Best Practices: Removido Tremor/Zustand, Suspense     |
| **3.3.1** | **2026-02-21** | **Limpeza: Tremor/Zustand residuais, +form/toggle ShadCN, -cmdk/vaul duplicados** |

---

## 1. Visão Geral

### 1.1. Posicionamento

| Campo             | Valor                                                |
| ----------------- | ---------------------------------------------------- |
| **Nome**          | SGCP — Sistema de Gestão de Ciclo & Performance      |
| **Tagline**       | Protocolo, treino, dieta e exames. Tudo em um lugar. |
| **Versão**        | 1.0.0 MVP                                            |
| **Custo mensal**  | R$ 0,00                                              |
| **Stack**         | 100% gratuita, majoritariamente open source          |
| **Self-hostável** | ✅ Supabase tem Docker Compose oficial               |

### 1.2. Usuário Alvo

| Campo                 | Valor                                        |
| --------------------- | -------------------------------------------- |
| Nome                  | Gabriel Ramos                                |
| Idade / Peso / Altura | 30 anos / 80 kg / 1,82 m                     |
| Objetivo              | Hipertrofia + Corrida 5km                    |
| Ciclo                 | Testosterona Enantato 250mg + Deca 100mg/sem |
| Perfil Técnico        | Dev avançado (Python, TypeScript, MacOS M3)  |

### 1.3. Dores Resolvidas

| Dor                                   | Impacto                  | Solução no SGCP             |
| ------------------------------------- | ------------------------ | --------------------------- |
| Dados fragmentados (planilhas, notas) | Decisão sem contexto     | Dashboard unificado semanal |
| Sem alertas clínicos automáticos      | Risco ignorado (Ht >54%) | Alert engine automático     |
| Aderência difusa                      | Sem feedback objetivo    | KPIs por módulo             |
| Sem histórico entre ciclos            | Não reproduz resultados  | DB auditável por janela     |
| Timing de exames esquecido            | Coleta no momento errado | Lembrete vale sérico        |

---

## 2. Stack Tecnológica (v3.3 — Final)

### 2.1. Mapa Completo

```text
┌──────────────────────────────────────────────────────────────┐
│                    SGCP — Stack v3.3                         │
├──────────────────────────────────────────────────────────────┤
│  FRONTEND                                                    │
│  ├── Next.js 15 (App Router)            MIT                  │
│  ├── TypeScript 5.x                     Apache 2.0           │
│  ├── TailwindCSS 3.x                    MIT                  │
│  ├── ShadCN/UI (New York, Slate)        MIT                  │
│  ├── Lucide React                       ISC                  │
│  └── Recharts (shadcn chart)            MIT                  │
├──────────────────────────────────────────────────────────────┤
│  BACKEND / AUTH / BANCO                                      │
│  ├── Supabase Auth                      Apache 2.0  FREE     │
│  ├── Supabase PostgreSQL                Apache 2.0  FREE     │
│  ├── Supabase Realtime                  Apache 2.0  FREE     │
│  ├── Drizzle ORM                        MIT         FREE     │
│  └── Vercel Blob (exports/attachments)  Proprietário FREE    │
├──────────────────────────────────────────────────────────────┤
│  UTILITÁRIOS                                                 │
│  ├── React Hook Form                    MIT                  │
│  ├── Zod                                MIT                  │
│  ├── Tanstack Table                     MIT                  │
│  ├── Tanstack Query (Server State)      MIT                  │
│  ├── date-fns                           MIT                  │
│  └── Sonner (toasts)                    MIT                  │
├──────────────────────────────────────────────────────────────┤
│  DEPLOY                                                      │
│  └── Vercel Hobby                       Proprietário FREE    │
├──────────────────────────────────────────────────────────────┤
│  CUSTO TOTAL: R$ 0,00/mês                                    │
└──────────────────────────────────────────────────────────────┘
```

### 2.2. Por Que Supabase Substitui 3 Pacotes Anteriores

| Antes (v3.0)         | Depois (v3.1)          | Ganho                        |
| -------------------- | ---------------------- | ---------------------------- |
| Better Auth          | Supabase Auth          | Auth + OAuth + MFA prontos   |
| Turso (LibSQL)       | Supabase PostgreSQL    | SQL completo, RLS, triggers  |
| Implementação manual | Supabase Realtime      | Alertas em tempo real        |
| Supabase Storage     | Vercel Blob (1GB free) | Simples, integrado ao deploy |

### 2.3. Free Tier — Limites

| Serviço               | Free Tier                                         | Suficiente para SGCP?       |
| --------------------- | ------------------------------------------------- | --------------------------- |
| **Supabase**          | 2 projetos, 500MB DB, 1GB storage, 50k auth users | ✅ Muito além do necessário |
| **Vercel Hobby**      | 100GB bandwidth, build ilimitado                  | ✅                          |
| **Vercel Blob**       | 1GB storage, 10k requests/mês                     | ✅ Só para exports          |
| **Supabase Realtime** | Incluso no free tier                              | ✅                          |

---

## 3. Componentes ShadCN/UI — Mapa Completo

### 3.1. Oficiais (npx shadcn@latest add)

| Componente  | Tela Principal             | Tela Secundária    |
| ----------- | -------------------------- | ------------------ |
| `card`      | KPI cards dashboard        | Resumo módulos     |
| `table`     | Agenda semanal             | Histórico exames   |
| `calendar`  | Selecionar data registro   | Calendário coletas |
| `badge`     | Status OK/Atenção/Crítico  | Fases corrida      |
| `chart`     | Evolução peso/força        | Macros diários     |
| `sheet`     | Registro rápido aplicação  | Registro treino    |
| `dialog`    | Confirmação ações críticas | PR modal           |
| `progress`  | Aderência semanal %        | Fases corrida 0→3  |
| `button`    | CTAs principais            | Ações módulos      |
| `input`     | Formulários registro       | Busca histórico    |
| `label`     | Labels acessíveis          | —                  |
| `popover`   | Tooltips datas             | Info exames        |
| `tooltip`   | Faixas referência exames   | Hover PRs          |
| `select`    | Local injeção              | Tipo treino        |
| `textarea`  | Campo observações          | —                  |
| `separator` | Divisores visuais          | —                  |
| `tabs`      | Navegar módulos            | Semanas            |
| `skeleton`  | Loading states             | —                  |
| `alert`     | Alertas clínicos críticos  | PSE alto           |
| `avatar`    | Perfil usuário             | —                  |
| `sonner`    | Toasts confirmação         | —                  |
| `drawer`    | Mobile bottom sheet        | —                  |
| `command`   | Command palette (⌘K)       | —                  |

### 3.2. Extensions GitHub (npm install)

| Biblioteca            | GitHub                   | Uso SGCP                       | Licença    | Carregamento |
| --------------------- | ------------------------ | ------------------------------ | ---------- | ------------ |
| **Tanstack Table**    | tanstack/table           | Grid exames filtrable/sortável | MIT        | Eager        |
| **Tanstack Query**    | tanstack/query           | Cache e sync Supabase          | MIT        | Eager        |
| **@hello-pangea/dnd** | hello-pangea/dnd         | Drag refeições/treinos         | Apache 2.0 | Dynamic      |
| **shadcn-timeline**   | timdehof/shadcn-timeline | Timeline aplicações            | MIT        | Dynamic      |

> **Nota:** `cmdk` e `vaul` já são instalados automaticamente pelo ShadCN (`command` e `drawer`). Não instalar separadamente.

---

## 4. Arquitetura do Projeto

### 4.1. Estrutura de Pastas

```text
sgcp-dashboard/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx              # Sidebar + Navbar
│   │   │   ├── page.tsx                # Dashboard Semanal
│   │   │   ├── ciclo/
│   │   │   │   └── page.tsx
│   │   │   ├── treino/
│   │   │   │   └── page.tsx
│   │   │   ├── nutricao/
│   │   │   │   └── page.tsx
│   │   │   ├── exames/
│   │   │   │   └── page.tsx
│   │   │   ├── alertas/
│   │   │   │   └── page.tsx
│   │   │   └── relatorio/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── callback/route.ts   # Supabase OAuth callback
│   │   │   ├── aplicacoes/
│   │   │   │   └── route.ts
│   │   │   ├── treinos/
│   │   │   │   └── route.ts
│   │   │   ├── refeicoes/
│   │   │   │   └── route.ts
│   │   │   ├── exames/
│   │   │   │   └── route.ts
│   │   │   └── export/
│   │   │       └── route.ts            # Vercel Blob export
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                         # ShadCN (auto-gerados)
│   │   ├── dashboard/
│   │   │   ├── agenda-table.tsx        # Tanstack Table
│   │   │   ├── kpi-cards.tsx           # ShadCN/Recharts
│   │   │   ├── alertas-banner.tsx       # ShadCN Alert
│   │   │   └── quick-actions.tsx        # ShadCN Button
│   │   ├── ciclo/
│   │   │   ├── aplicacao-form.tsx      # Sheet + Form
│   │   │   ├── rodizio-visual.tsx      # Card + Badge
│   │   │   └── timeline-aplicacoes.tsx # shadcn-timeline (Dynamic)
│   │   ├── treino/
│   │   │   ├── treino-log.tsx           # Sheet + Form
│   │   │   ├── pr-tracker.tsx           # Dialog + Table
│   │   │   └── corrida-progress.tsx     # Progress + Tabs
│   │   ├── nutricao/
│   │   │   ├── refeicao-card.tsx       # Card + Badge
│   │   │   └── macros-chart.tsx         # ShadCN Chart (Recharts)
│   │   └── exames/
│   │       ├── exame-table.tsx         # Tanstack Table
│   │       └── resultado-badge.tsx     # Badge + Tooltip
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts               # Browser client
│   │   │   ├── server.ts               # Server client
│   │   │   └── middleware.ts           # Auth middleware
│   │   ├── db/
│   │   │   ├── schema.ts               # Drizzle Schema
│   │   │   └── index.ts                # DB connection
│   │   ├── utils.ts                    # ShadCN utils + cn()
│   │   └── constants.ts                # Metas, thresholds clínicos
│   ├── hooks/
│   │   ├── use-agenda.ts
│   │   ├── use-alertas.ts
│   │   ├── use-exames.ts
│   │   └── use-realtime.ts             # Supabase Realtime
│   └── types/
│       └── index.ts
├── drizzle/
│   └── migrations/
├── public/
├── components.json                     # ShadCN config
├── drizzle.config.ts
├── middleware.ts                       # Supabase session
├── tailwind.config.ts
├── tsconfig.json
├── .env.local
└── package.json
```

### 4.2. Schema de Banco — Drizzle + PostgreSQL (Supabase)

```typescript
// src/lib/db/schema.ts
import { sql } from 'drizzle-orm'
import {
  pgTable,
  serial,
  text,
  real,
  integer,
  boolean,
  timestamp,
  jsonb,
  date, // Importado pg-core (v3.2)
} from 'drizzle-orm/pg-core'

// ─────────────────────────────────────────
// PERFIL
// ─────────────────────────────────────────
export const perfil = pgTable('perfil', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(), // Supabase Auth UID
  peso: real('peso'), // 80.0 kg
  altura: real('altura'), // 182.0 cm
  idade: integer('idade'), // 30
  pesoAlvo: real('peso_alvo'),
  atualizadoEm: timestamp('atualizado_em').defaultNow(),
})

// ─────────────────────────────────────────
// PROTOCOLO HORMONAL
// ─────────────────────────────────────────
export const compostos = pgTable('compostos', {
  id: serial('id').primaryKey(),
  nome: text('nome').notNull(), // "Testosterona Enantato"
  doseSemanal: real('dose_semanal'), // 250.0 mg
  doseAplicacao: real('dose_aplicacao'), // 125.0 mg
  frequencia: integer('frequencia'), // 2x/semana
  diasAplicacao: text('dias_aplicacao'), // "1,4" (seg, qui)
  meiaVida: text('meia_vida'), // "7-10 dias"
  ativo: boolean('ativo').default(true),
})

export const aplicacoes = pgTable('aplicacoes', {
  id: serial('id').primaryKey(),
  data: date('data').notNull(), // "2026-02-03" (Correção v3.2)
  compostoId: integer('composto_id').references(() => compostos.id),
  dose: real('dose').notNull(), // 125.0 mg
  local: text('local').notNull(), // "Glúteo Direito"
  realizada: boolean('realizada').default(false),
  observacoes: text('observacoes'),
  criadoEm: timestamp('criado_em').defaultNow(),
})

// ─────────────────────────────────────────
// TREINOS
// ─────────────────────────────────────────
export const treinos = pgTable('treinos', {
  id: serial('id').primaryKey(),
  data: date('data').notNull(), // Correção v3.2
  tipo: text('tipo').notNull(), // "PPL Push" | "Corrida"
  fase: text('fase'), // "Fase 0" | "Fase 1A"
  duracao: integer('duracao'), // minutos
  pse: integer('pse'), // 1–10
  concluido: boolean('concluido').default(false),
  prs: jsonb('prs'), // {"supino": "80kg x 8"}
  observacoes: text('observacoes'),
  criadoEm: timestamp('criado_em').defaultNow(),
})

// ─────────────────────────────────────────
// NUTRIÇÃO
// ─────────────────────────────────────────
export const planoAlimentar = pgTable('plano_alimentar', {
  id: serial('id').primaryKey(),
  horario: text('horario').notNull(), // "08:00"
  nome: text('nome').notNull(), // "Café da manhã"
  caloriasAlvo: real('calorias_alvo'), // 567
  protAlvo: real('prot_alvo'), // 44.9
  carbAlvo: real('carb_alvo'), // 72.1
  gordAlvo: real('gord_alvo'), // 14.5
  itens: jsonb('itens'), // [{alimento, qtd, peso}]
})

export const refeicoes = pgTable('refeicoes', {
  id: serial('id').primaryKey(),
  data: date('data').notNull(), // Correção v3.2
  planoId: integer('plano_id').references(() => planoAlimentar.id),
  aderencia: text('aderencia'), // "100%" | "Parcial" | "0%"
  caloriasReal: real('calorias_real'),
  observacoes: text('observacoes'),
  criadoEm: timestamp('criado_em').defaultNow(),
})

// ─────────────────────────────────────────
// EXAMES
// ─────────────────────────────────────────
export const examesRef = pgTable('exames_ref', {
  id: serial('id').primaryKey(),
  painel: text('painel').notNull(), // "Hormonal" | "Hematologia"
  nome: text('nome').notNull(), // "Hematócrito"
  unidade: text('unidade'), // "%"
  alvoMin: real('alvo_min'),
  alvoMax: real('alvo_max'),
  alertaCritico: real('alerta_critico'), // 54.0
  janelas: text('janelas'), // "Baseline,Sem6,Sem12,Pós"
})

export const resultadosExames = pgTable('resultados_exames', {
  id: serial('id').primaryKey(),
  exameId: integer('exame_id').references(() => examesRef.id),
  dataColeta: date('data_coleta').notNull(), // Correção v3.2
  janela: text('janela').notNull(), // "Semana 6"
  valor: real('valor'),
  observacoes: text('observacoes'),
  criadoEm: timestamp('criado_em').defaultNow(),
})

// ─────────────────────────────────────────
// ALERTAS
// ─────────────────────────────────────────
export const alertas = pgTable('alertas', {
  id: serial('id').primaryKey(),
  tipo: text('tipo').notNull(), // "CRÍTICO" | "ATENÇÃO"
  categoria: text('categoria'), // "Exame" | "Ciclo" | "Treino"
  mensagem: text('mensagem').notNull(),
  resolvido: boolean('resolvido').default(false),
  criadoEm: timestamp('criado_em').defaultNow(),
})
```

---

## 5. Módulos e Funcionalidades (MVP)

### 5.1. Módulo 0 — Onboarding

- Cadastro de perfil (peso, altura, idade) via Supabase Auth
- Setup do protocolo hormonal (compostos, doses, dias, meias-vidas)
- Importação do plano alimentar (JSON com 6 refeições)
- Geração automática do calendário de exames (Baseline, Sem 6, Sem 12, Pós)

### 5.2. Módulo 1 — Dashboard Semanal (tela principal — 90% do uso)

- Grade 7 dias: aplicações + PPL + corrida por dia
- KPI cards: aderência dieta %, treinos concluídos, exames pendentes
- Alertas críticos em banner no topo (Supabase Realtime)
- Botões de ação rápida (1 clique por ação)
- Destaque visual no dia atual

### 5.3. Módulo 2 — Ciclo Hormonal

- Agenda de aplicações com sugestão de local (rodízio automático)
- Registro em Sheet lateral: composto, dose, local, observações
- Timeline visual de aplicações (shadcn-timeline)
- Alertas de sintomas de "Deca Dick"
- Meias-vidas exibidas por composto

### 5.4. Módulo 3 — Treino

- Calendário PPL (Push/Pull/Legs) + corrida integrado
- Progress bar fases corrida (0 → 3)
- Registro: tipo, duração, PSE, PRs, observações
- Tracker de PRs (carga máxima por exercício)
- Regras de integração PPL + corrida visíveis

### 5.5. Módulo 4 — Nutrição

- 6 refeições com horários, alimentos e gramagens do manual
- Totais diários (kcal, prot, carb, gord) em Cards
- Marcação de aderência por refeição (1 clique)
- Gráfico Donut aderência semanal (ShadCN Chart)

### 5.6. Módulo 5 — Exames

- 30+ exames organizados por painel (Hormonal, Hematologia, etc.)
- Calendário de coletas (Baseline, Sem 6, Sem 12, Pós-ciclo)
- Registro de resultado com valor + unidade
- Flag automático: ✅ OK / ⚠️ Atenção / 🔴 Crítico
- Alerta automático: Ht >54%, PA >140/90, HDL <40
- Nota de timing: "Coletar ANTES da injeção (vale sérico)"

### 5.7. Módulo 6 — Alertas e Relatório

- Central de alertas clínicos e de protocolo
- Resumo semanal (aderência, treinos, PRs, destaques)
- Export CSV → Vercel Blob → download
- Export Markdown → Vercel Blob → compartilhar com médico

---

## 6. Fluxo de Navegação

```text
/ (Landing)
│
└── /login  ←── Supabase Auth (email/senha + GitHub OAuth)
    │
    └── /dashboard                    ← TELA PRINCIPAL
        │
        ├── /ciclo
        │   ├── <Sheet> Registrar aplicação
        │   └── /historico
        │
        ├── /treino
        │   ├── <Sheet> Registrar treino
        │   └── /prs
        │
        ├── /nutricao
        │   └── <Sheet> Marcar refeição
        │
        ├── /exames
        │   ├── <Sheet> Registrar resultado
        │   └── /historico
        │
        ├── /alertas
        │
        └── /relatorio
            └── <Button> Export CSV / Markdown → Vercel Blob
```

---

## 7. Requisitos Funcionais

| ID    | Requisito                                    | Prioridade |
| ----- | -------------------------------------------- | ---------- |
| RF-01 | Dashboard semanal com grade 7 dias           | 🔴 Alta    |
| RF-02 | Registro aplicação em <5 campos              | 🔴 Alta    |
| RF-03 | Registro treino + PRs                        | 🔴 Alta    |
| RF-04 | Marcação aderência refeição (1 clique)       | 🔴 Alta    |
| RF-05 | Registro resultado exame com flag automático | 🔴 Alta    |
| RF-06 | Alerta automático Ht >54% via Realtime       | 🔴 Alta    |
| RF-07 | Rodízio automático local de aplicação        | 🟡 Média   |
| RF-08 | Fases corrida com progress bar               | 🟡 Média   |
| RF-09 | Export CSV + Markdown → Vercel Blob          | 🟡 Média   |
| RF-10 | Command palette ⌘K para navegação rápida     | 🟢 Baixa   |

---

## 8. Requisitos Não Funcionais

| RNF               | Meta                      | Tecnologia                          |
| ----------------- | ------------------------- | ----------------------------------- |
| Performance — FCP | <1.5s                     | Next.js RSC + Tanstack Query cache  |
| Performance — LCP | <2.5s                     | Suspense + Parallel Fetching        |
| Bundle JS (Total) | <150KB (gzipped)          | Removido Tremor/Zustand + Dynamic   |
| Privacidade       | Zero tracking third-party | Supabase RLS por user_id            |
| Offline           | Registro offline          | Tanstack Query + optimistic updates |
| Acessibilidade    | WCAG 2.1 AA               | Radix UI (base do ShadCN)           |
| Auditabilidade    | Timestamp em toda mutação | Drizzle + defaultNow()              |
| Mobile            | 100% responsivo           | TailwindCSS + Drawer + Sheet        |

---

## 9. Configurações e Setup Completo

### 9.1. Instalação (Zero a Rodando)

```bash
# 1. Criar projeto Next.js 15
npx create-next-app@latest sgcp-dashboard \
  --typescript --tailwind --eslint --app \
  --src-dir --import-alias="@/*"
cd sgcp-dashboard

# 2. ShadCN/UI (MIT)
npx shadcn@latest init
npx shadcn@latest add \
  card table calendar badge chart sheet dialog \
  progress button input label popover tooltip \
  select textarea separator tabs skeleton alert \
  avatar sonner drawer command form toggle toggle-group

# 3. Supabase (Apache 2.0)
npm i @supabase/supabase-js @supabase/ssr

# 4. Drizzle ORM + PostgreSQL (MIT)
npm i drizzle-orm postgres
npm i -D drizzle-kit

# 5. Tanstack (MIT)
npm i @tanstack/react-table @tanstack/react-query

# 6. Forms e Validação (MIT)
npm i react-hook-form zod @hookform/resolvers

# 7. State e Utils (MIT)
npm i sonner date-fns lucide-react

# 8. Charts (MIT)
# ShadCN chart utiliza Recharts nativamente
npx shadcn@latest add chart

# 9. DnD + Timeline (MIT / Apache 2.0)
# vaul e cmdk já são instalados pelo ShadCN (drawer e command)
npm i @hello-pangea/dnd

# 10. Migrations
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 9.2. .env.local

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Banco (Supabase Connection String)
DATABASE_URL=postgresql://postgres:[SENHA]@db.[REF].supabase.co:5432/postgres

# Vercel Blob (gerado automaticamente no deploy)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 9.3. components.json (ShadCN)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

## 10. Mapa de Licenças — Auditoria Completa

| Tecnologia        | Licença      | Comercial  | Self-host | Custo              |
| ----------------- | ------------ | ---------- | --------- | ------------------ |
| Next.js 15        | MIT          | ✅         | ✅        | Grátis             |
| TypeScript        | Apache 2.0   | ✅         | ✅        | Grátis             |
| TailwindCSS       | MIT          | ✅         | ✅        | Grátis             |
| ShadCN/UI         | MIT          | ✅         | ✅        | Grátis             |
| Supabase          | Apache 2.0   | ✅         | ✅        | Grátis (free tier) |
| Drizzle ORM       | MIT          | ✅         | ✅        | Grátis             |
| Recharts          | MIT          | ✅         | ✅        | Grátis             |
| Tanstack Table    | MIT          | ✅         | ✅        | Grátis             |
| Tanstack Query    | MIT          | ✅         | ✅        | Grátis             |
| Zod               | MIT          | ✅         | ✅        | Grátis             |
| React Hook Form   | MIT          | ✅         | ✅        | Grátis             |
| date-fns          | MIT          | ✅         | ✅        | Grátis             |
| Lucide React      | ISC          | ✅         | ✅        | Grátis             |
| Sonner            | MIT          | ✅         | ✅        | Grátis             |
| @hello-pangea/dnd | Apache 2.0   | ✅         | ✅        | Grátis             |
| shadcn-timeline   | MIT          | ✅         | ✅        | Grátis             |
| Vercel Hobby      | Proprietário | ✅ pessoal | ❌        | Grátis             |
| Vercel Blob       | Proprietário | ✅ pessoal | ❌        | Grátis (1GB)       |

**Total Open Source: 18/20 tecnologias (90%)**
**Custo mensal: R$ 0,00**

---

## 11. Cronograma de Desenvolvimento (10 Semanas)

| Semana | Entregável                                  | Stack Principal           |
| ------ | ------------------------------------------- | ------------------------- |
| **1**  | Setup Next.js + ShadCN + Supabase + Drizzle | Core stack                |
| **2**  | Auth pages (login/register) + middleware    | Supabase Auth             |
| **3**  | Schema DB + migrations + seed               | Drizzle + PostgreSQL      |
| **4**  | Dashboard Semanal + Agenda Table            | ShadCN Table + Card       |
| **5**  | Módulo Ciclo + Timeline                     | Sheet + shadcn-timeline   |
| **6**  | Módulo Treino + PR Tracker + Corrida        | Progress + Dialog         |
| **7**  | Módulo Nutrição + Macros Chart              | ShadCN Chart (Recharts)   |
| **8**  | Módulo Exames + Alertas Realtime            | Supabase Realtime + Alert |
| **9**  | Relatório + Export → Vercel Blob            | Vercel Blob + CSV         |
| **10** | Testes + Deploy Vercel + Auditoria          | Vitest + Vercel           |

---

## 12. Riscos e Mitigações

### 12.1. Matriz de Riscos

| Risco                       | Prob. | Impacto | Mitigação                                  |
| --------------------------- | ----- | ------- | ------------------------------------------ |
| Interpretação médica errada | Baixa | Alto    | Disclaimer em toda tela de exames          |
| Supabase free tier esgotado | Baixa | Alto    | Self-host com Docker Compose oficial       |
| Abandono por complexidade   | Média | Alto    | Máx 3 campos por registro, UX mobile-first |
| Divergência manual ↔ app    | Média | Médio   | Auditoria mensal (checklist gerado)        |
| Vendor lock-in Vercel Blob  | Baixa | Baixo   | Migrar para Supabase Storage em 1h         |
| **Supabase Pooling**        | Baixa | Alta    | **Fix: Usar { prepare: false } no client** |
| **Next.js 15 breaking api** | Baixa | Alta    | **Fix: Usar await cookies() / headers()**  |

---

## 13. Referências

| Recurso                 | URL                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| ShadCN/UI Docs          | [https://ui.shadcn.com](https://ui.shadcn.com)                                                 |
| Supabase Docs           | [https://supabase.com/docs](https://supabase.com/docs)                                         |
| Drizzle ORM             | [https://orm.drizzle.team](https://orm.drizzle.team)                                           |
| Next.js 15 App Router   | [https://nextjs.org/docs](https://nextjs.org/docs)                                             |
| ShadCN Chart (Recharts) | [https://ui.shadcn.com/docs/components/chart](https://ui.shadcn.com/docs/components/chart)     |
| Tanstack Table          | [https://tanstack.com/table](https://tanstack.com/table)                                       |
| Vercel Blob             | [https://vercel.com/docs/storage/vercel-blob](https://vercel.com/docs/storage/vercel-blob)     |
| Supabase Self-host      | [https://supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) |
| Manual Protocolo SGCP   | ciclo-treino.md (repositório)                                                                  |
| Auditoria Repo ↔ Manual | checklist-auditoria-2026-02-21.md                                                              |

---

_Versão 3.3.1 — Stack 100% Free, 90% Open Source_
_Criado por Gabriel Ramos — 2026-02-21_
_Próxima revisão: Semana 10 (pós-deploy)_
