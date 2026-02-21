# Sumario Executivo - 0to5k

## Visao geral

O `0to5k` e um programa local-first para levar iniciantes, incluindo sedentarios e fumantes, do sedentarismo ate 5 km continuos em 15 semanas.

O produto atual e composto por:

- planilha operacional em `data/planilha_zero_aos_5km.xlsx`;
- documentacao em Markdown para orientacao, navegacao e manutencao;
- ativo visual em `assets/images/banner.png`.

## Entregaveis existentes

### 1) Nucleo do programa

- `data/planilha_zero_aos_5km.xlsx`
  - Aba `Plano de Treinos`
  - Aba `Dicas & Protocolo`
  - Aba `Resumo Semanal`

### 2) Documentacao

- `README.md`
- `ARCHITECTURE.md`
- `docs/GETTING_STARTED.md`
- `docs/INDEX.md`
- `docs/estrutura_planilha_zero_aos_5km.md`
- `docs/PROJETO_FINAL.txt`

### 3) Design/branding

- `assets/images/banner.png`

## Caracteristicas tecnicas atuais

- Arquitetura local-first, sem backend/API.
- Sem telemetria ou sincronizacao automatica.
- Operacao centrada em preenchimento manual da planilha.
- Compatibilidade com Excel e Google Sheets (importacao do `.xlsx`).

## Fundamentacao do protocolo

O protocolo do programa foi documentado com base cientifica no `README.md`, incluindo:

- progressao conservadora em 15 semanas;
- fase inicial de adaptacao com caminhada;
- foco em seguranca cardiovascular;
- orientacoes especificas para fumantes.

## Limites do estado atual

1. Nao ha integracao automatica com apps de corrida.
2. Consolidacao de dados entre abas e manual.
3. Parte da documentacao historica foi simplificada para refletir somente os arquivos existentes.

## Roadmap reduzido

### Curto prazo

- manter consistencia de caminhos entre todos os docs;
- adicionar verificacao automatica de links/documentacao.

### Medio prazo

- avaliar validacao de preenchimento da planilha (campos obrigatorios por semana).

### Longo prazo (hipotese)

- avaliar interface digital complementar a planilha.

## Identificacao

- Projeto: `0to5k`
- Repositorio: `github.com/gabrielramos/0to5k`
- Responsavel: Gabriel Ramos
- Versao documental: 1.1.0
- Atualizacao: 2026-02-21
