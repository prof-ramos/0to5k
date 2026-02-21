# Architecture Overview - 0to5k

Este documento fornece uma visão geral da arquitetura do projeto **0to5k**. Atualmente, o projeto é centrado em dados e documentação, servindo como base para uma futura aplicação orientada ao usuário.

## 1. Project Structure

A estrutura atual é minimalista, focada na entrega de valor via planilha e documentação técnica.

```text
[Project Root]/
├── planilha_zero_aos_5km.xlsx   # Core: Motor de dados e lógica de progressão
├── banner.png                   # Ativo visual de marca
├── README.md                    # Interface principal de documentação e guia do usuário
├── ARCHITECTURE.md              # Este documento (Visão técnica)
└── .gitignore                   # Configurações de versionamento
```

## 2. High-Level System Diagram

Atualmente, o sistema opera de forma local e offline:

`[Usuário] <--> [Planilha Excel (Lógica/Dados)] <--> [Apps de Terceiros (Strava/NRC)]`

_O usuário utiliza a planilha para planejar e registrar, consumindo dados de sensores externos manualmente._

## 3. Core Components

### 3.1. Data Domain (Excel)

**Name**: Planilha Zero aos 5KM
**Description**: Contém a lógica de progressão de 15 semanas, cálculos de volume semanal e validação de esforço (PSE).
**Technologies**: Microsoft Excel / OpenXML.

### 3.2. Documentation Layer

**Name**: README.md
**Description**: Serve como a "Frontend" atual, fornecendo todas as instruções e base científica para o programa.

## 4. Data Stores

### 4.1. Primary Data Store

**Name**: `planilha_zero_aos_5km.xlsx`
**Type**: Arquivo de Planilha Estuturado.
**Purpose**: Armazena o plano de treino estático e os logs de execução do usuário.

## 5. External Integrations

O projeto não possui integrações via API no momento, mas orienta o uso de:

- **Strava/Garmin**: Captura de dados de GPS e Frequência Cardíaca.
- **Google Fit**: Consolidação de métricas de saúde.

## 6. Deployment & Infrastructure

**Hosting**: GitHub (Versionamento e distribuição).
**CI/CD**: N/A (Futuramente GitHub Actions para validação de dados).

## 7. Security Considerations

**Data Privacy**: Como a planilha é local, os dados de saúde do usuário permanecem em seu dispositivo pessoal.

## 8. Development Environment

**Ferramentas**:

- Editor de Texto (Markdown).
- Microsoft Excel ou equivalente (Google Sheets, LibreOffice).

## 9. Future Considerations / Roadmap

O projeto prevê as seguintes evoluções arquiteturais:

1. **Web App Conversion**: Migrar a lógica do Excel para uma aplicação React/Next.js.
2. **API Integration**: Conexão direta com Strava API para automatizar o registro de treinos.
3. **Database Migration**: Uso de Supabase ou PostgreSQL para armazenamento em nuvem.

## 10. Project Identification

**Project Name**: 0to5k
**Repository URL**: https://github.com/prof-ramos/0to5k
**Primary Contact**: Gabriel Ramos
**Date of Last Update**: 2026-02-21

## 11. Glossary / Acronyms

- **PSE**: Percepção Subjetiva de Es esforço (Escala 1-10).
- **C25K**: Couch to 5K (Programa base).
- **ASPC**: American Society of Preventive Cardiology.
