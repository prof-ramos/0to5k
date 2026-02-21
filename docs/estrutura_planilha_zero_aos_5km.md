# Estrutura da planilha `data/planilha_zero_aos_5km.xlsx`

## Visão geral

- **Arquivo**: `data/planilha_zero_aos_5km.xlsx`
- **Total de abas**: 3
- **Abas**:
  - `Plano de Treinos`
  - `Dicas & Protocolo`
  - `Resumo Semanal`
- **Fórmulas**: nenhuma (0)
- **Validações de dados**: nenhuma (0)
- **Nomes definidos (named ranges)**: nenhum (0)

## Mapa rápido das abas

| Aba | Intervalo usado | Objetivo |
|---|---|---|
| `Plano de Treinos` | `A1:K70` | Planejamento principal das 15 semanas e registro de cada sessão |
| `Dicas & Protocolo` | `A1:C29` | Orientações de segurança, clima, protocolo e progressão |
| `Resumo Semanal` | `A1:G17` | Consolidação semanal (1 linha por semana) |

## 1) Aba `Plano de Treinos`

### Estrutura base

- **Intervalo**: `A1:K70`
- **Congelamento de painéis**: `A5`
- **Cabeçalho da tabela**: linha `4`
- **Mesclagens relevantes**:
  - Título/aviso: `A1:K1`, `A2:K2`, `A3:K3`
  - Legenda: `A66:K66`, `B67:K67`, `B68:K68`, `B69:K69`, `B70:K70`

### Colunas (linha 4)

| Coluna | Nome | Uso |
|---|---|---|
| A | `SEMANA` | Número da semana (1 a 15) |
| B | `FASE` | Fase do plano (`FASE 0` a `FASE 3`) |
| C | `SESSÃO / DESCRIÇÃO` | Descrição do treino da semana |
| D | `TEMPO ESTIM. (min)` | Tempo estimado base da semana |
| E | `DIST. ESTIM. (km)` | Distância estimada base da semana |
| F | `DATA REALIZADA` | Registro manual |
| G | `TEMPO REAL (min)` | Registro manual |
| H | `DISTÂNCIA REAL (km)` | Registro manual |
| I | `FC MÉDIA (bpm)` | Registro manual |
| J | `ESFORÇO (1-10)` | Registro manual |
| K | `OBSERVAÇÕES` | Registro manual |

### Organização por semanas

- O plano usa um padrão fixo de blocos:
  - **3 linhas de treino** por semana (`Treino 1`, `Treino 2`, `Treino 3`)
  - **1 linha separadora em branco** entre semanas
- Fórmula estrutural:
  - **Linha inicial da semana `N`** = `5 + (N - 1) * 4`
  - Exemplo: semana 1 começa na linha 5, semana 2 na 9, ..., semana 15 na 61
- Linhas com semanas:
  - Semana 1 → linha 5
  - Semana 2 → linha 9
  - Semana 3 → linha 13
  - Semana 4 → linha 17
  - Semana 5 → linha 21
  - Semana 6 → linha 25
  - Semana 7 → linha 29
  - Semana 8 → linha 33
  - Semana 9 → linha 37
  - Semana 10 → linha 41
  - Semana 11 → linha 45
  - Semana 12 → linha 49
  - Semana 13 → linha 53
  - Semana 14 → linha 57
  - Semana 15 → linha 61

### Legenda interna

- Linhas `66` a `70` descrevem as fases:
  - `FASE 0` (Semanas 1–3)
  - `FASE 1` (Semanas 4–7)
  - `FASE 2` (Semanas 8–11)
  - `FASE 3` (Semanas 12–15)

## 2) Aba `Dicas & Protocolo`

### Estrutura base

- **Intervalo**: `A1:C29`
- **Formato de conteúdo**:
  - Coluna `A`: marcador visual
  - Coluna `B`: título do item
  - Coluna `C`: explicação detalhada
- **Mesclagens de seção**:
  - `A1:C1` (título principal)
  - `A2:C2`, `A7:C7`, `A13:C13`, `A18:C18`, `A25:C25`

### Seções mapeadas

| Linha inicial | Seção |
|---|---|
| 2 | `🚬 TABAGISMO & EXERCÍCIO` |
| 7 | `❤️ SINAIS DE PARAR IMEDIATAMENTE` |
| 13 | `🌡️ BRASÍLIA — CLIMA CERRADO` |
| 18 | `🏃 PROTOCOLO DE CADA SESSÃO` |
| 25 | `📈 PROGRESSÃO SEGURA` |

## 3) Aba `Resumo Semanal`

### Estrutura base

- **Intervalo**: `A1:G17`
- **Título**: `A1:G1` (mesclado)
- **Cabeçalho**: linha `2`
- **Linhas de dados**: `3` a `17` (15 semanas)

### Colunas (linha 2)

| Coluna | Nome | Uso |
|---|---|---|
| A | `SEMANA` | Semana 1 a 15 |
| B | `FASE` | Fase correspondente da semana |
| C | `TREINOS REALIZADOS (de 3)` | Registro manual |
| D | `DIST. TOTAL SEMANAL (km)` | Registro manual |
| E | `FC MÉDIA SEMANAL` | Registro manual |
| F | `ESFORÇO MÉDIO (1-10)` | Registro manual |
| G | `NOTA / COMO FOI A SEMANA` | Registro manual |

## Relação entre abas

- Não há vínculos automáticos por fórmula entre abas.
- A consistência é **manual**:
  - Semanas e fases de `Resumo Semanal` espelham a estrutura de `Plano de Treinos`.
  - A aba `Dicas & Protocolo` funciona como referência textual operacional.

## Campos de preenchimento manual (resumo)

- `Plano de Treinos`: principalmente colunas `F:K` nas linhas de treino (5 a 63).
- `Resumo Semanal`: principalmente colunas `C:G` nas linhas 3 a 17.

