# Sumário Executivo - 0to5k

## Visão geral

O `0to5k` é um programa local-first para levar iniciantes, incluindo sedentários e fumantes, do sedentarismo até 5 km contínuos em 15 semanas.

O produto atual é composto por:

- planilha operacional em `data/planilha_zero_aos_5km.xlsx`;
- documentação em Markdown para orientação, navegação e manutenção;
- ativo visual em `assets/images/banner.png`.

## Entregáveis existentes

### 1) Núcleo do programa

- `data/planilha_zero_aos_5km.xlsx`
  - Módulo `Plano de Treinos`
  - Módulo `Dicas & Protocolo`
  - Módulo `Resumo Semanal`

### 2) Documentação

- `README.md`
- `ARCHITECTURE.md`
- `docs/GETTING_STARTED.md`
- `docs/INDEX.md`
- `docs/estrutura_planilha_zero_aos_5km.md`
- `docs/PROJETO_FINAL.txt`

### 3) Design/branding

- `assets/images/banner.png`

## Características técnicas atuais

- Arquitetura local-first, sem backend/API.
- Sem telemetria ou sincronização automática.
- Operação centrada em preenchimento manual da planilha.
- Compatibilidade com Excel e Google Sheets (importação do `.xlsx`).

## Fundamentação do protocolo

O protocolo do programa foi documentado com base científica no `README.md`, incluindo:

- progressão conservadora em 15 semanas;
- fase inicial de adaptação com caminhada;
- foco em segurança cardiovascular;
- orientações específicas para fumantes.

## Limites do estado atual

1. Não há integração automática com apps de corrida.
2. Consolidação de dados entre abas é manual.
3. Parte da documentação histórica foi simplificada para refletir somente os arquivos existentes.

## Roadmap reduzido

### Curto prazo

- manter consistência de caminhos entre todos os docs;
- adicionar verificação automática de links/documentação.

### Médio prazo

- avaliar validação de preenchimento da planilha (campos obrigatórios por semana).

### Longo prazo (hipótese)

- avaliar interface digital complementar à planilha.

## Identificação

- Projeto: `0to5k`
- Repositório: `github.com/gabrielramos/0to5k`
- Responsável: Gabriel Ramos
- Versão documental: 1.1.0
- Atualização: 2026-02-21
