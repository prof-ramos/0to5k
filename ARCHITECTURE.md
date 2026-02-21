# Arquitetura do Sistema de Gerenciamento de Ciclo e Performance (SGCP) - v3.3

## 1. Visão Geral

O SGCP é uma aplicação full-stack de alta performance desenvolvida para atletas de alto rendimento, focada no monitoramento de protocolos hormonais, treinos, nutrição e saúde clínica. O projeto utiliza as tecnologias mais recentes do ecossistema Next.js/Vercel para garantir velocidade, escalabilidade e uma UX premium.

## 2. Tech Stack (v3.3)

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Linguagem**: TypeScript
- **Banco de Dados**: PostgreSQL via [Supabase](https://supabase.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) (Type-safe & Lightweight)
- **Estilização**: Tailwind CSS + ShadCN UI
- **Gráficos**: Recharts (Via ShadCN Chart)
- **Gerenciamento de Estado**:
  - Server State: Tanstack Query (opcional) / Server Components
  - Local State: React Hooks
- **Autenticação**: Supabase SSR (Auth)

## 3. Padrões Arquiteturais

### 3.1 Data Fetching & Performance

Seguindo as **Vercel Best Practices**, o sistema implementa:

- **Parallel Fetching**: Uso de `Promise.all` para evitar "waterfalls" no carregamento de dados do Dashboard.
- **Deduplicação**: Uso de `React.cache()` em camadas de serviço para evitar múltiplas chamadas ao banco na mesma requisição.
- **Progressive Rendering**: Implementação de `Suspense boundaries` com Skeletons personalizados para seções críticas (KPIs, Agenda, Histórico).
- **Server Actions**: Todas as mutações (registros de aplicação, treino, dieta) são tratadas via React Server Actions com revalidação de cache instantânea (`revalidatePath`).

### 3.2 Estrutura de Pastas

```text
src/
├── app/                  # Rotas e Páginas (App Router)
│   ├── (auth)/           # Fluxo de autenticação
│   ├── (dashboard)/      # Aplicação principal (Ciclo, Treino, Nutrição, Exames)
│   └── api/              # Endpoints auxiliares
├── components/          # Componentes UI reutilizáveis
│   ├── ui/               # Componentes base (ShadCN)
│   └── dashboard/        # Componentes específicos de negócio
├── lib/                 # Core utilities
│   ├── db/               # Configuração Drizzle + Schema
│   ├── supabase/         # Clients Server/Client para Supabase
│   └── services/         # Camada de lógica de busca de dados
└── hooks/               # Custom hooks reutilizáveis
```

## 4. Modelagem de Dados

O esquema do banco de dados é gerido pelo Drizzle ORM e focado em performance:

- **Tipos Nativos**: Uso de `date` nativo para histórico temporal e `jsonb` para dados flexíveis (PRs de treino, itens de plano alimentar).
- **Relacionamentos**: Estrutura normalizada para garantir integridade entre ciclos, aplicações e resultados de exames.

## 5. Fluxo de Autenticação e Segurança

- **Middleware**: Proteção de rotas servidor-side no Next.js verificando a sessão do Supabase.
- **RSC Auth**: Verificação de usuário diretamente em Server Components para renderização segura.
- **RLS (Row Level Security)**: (Em progresso) Políticas no Supabase para garantir que usuários acessem apenas seus próprios dados.

## 6. Design System

- **Estética**: High-end/Premium, utilizando `tailwindcss-animate` para micro-interações.
- **Responsividade**: Interface mobile-first otimizada para logs rápidos na academia (PWA-ready).
- **Acessibilidade**: Seguindo padrões ARIA via Radix UI (base do ShadCN).

## 7. Manutenibilidade e CI/CD

- **Drizzle Kit**: Sincronização automática de schema via `npm run db:push`.
- **Scripts de Seed**: `npm run db:seed` para popular tabelas de referência (compostos, valores de exames).
- **Vercel Deploy**: Configurado para otimização de bundle e monitoramento via `next-bundle-analyzer`.

---

_Última atualização: 2026-02-21_
_Versão do Documento: 3.3.0_
