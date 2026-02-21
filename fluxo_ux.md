Aqui está o **Fluxo de UX completo** do sistema SGCP (Sistema de Gestão de Ciclo & Performance), projetado para ser intuitivo, focado na **semana como unidade principal**, e otimizado para uso diário rápido.
---
## 1. Fluxo Principal – Jornada do Usuário
```
ONBOARDING (1x)
↓
DASHBOARD SEMANAL ←─(diário)─── REGRESSO
↓
┌──────────────┬──────────────┬──────────────┬──────────────┐
│   CICLO      │   TREINO     │  NUTRIÇÃO    │   EXAMES     │
│ hormonal     │ PPL + Corrida│ 3.145 kcal   │ Monitoramento│
└──────┬───────┴──────┬───────┴──────┬───────┴──────┬──────┘
       │               │              │               │
       ↓               ↓              ↓               ↓
  APLICAÇÃO REGISTRO TREINO REGISTRO REFEIÇÃO REGISTRO EXAME RESULTADO
  HOJE (Seg)      HOJE (Seg)      HOJE (6 refeições)  HOJE (se aplicável)
       │               │              │               │
       └───────────────┼──────────────┼───────────────┘
                        ↓
                   ALERTAS CRÍTICOS
                   (ex.: Ht > 54%)
                        ↓
                   RESUMO SEMANAL
                   (exportável)
```

***
## 2. Telas e Navegação (Hierarquia)
### 2.1. Tela 1: Onboarding (primeiro uso)
```
CONFIGURAÇÃO INICIAL
┌─────────────────────────────────────┐
│ Perfil: 80kg | 182cm | 30 anos      │
│ IMC: 24,2                           │
│                                     │
│ [CICLO] Test 250mg/sem + Deca 100mg │
│ [TREINO] PPL 3x + Corrida 3x        │
│ [DIETA] 3145 kcal | 227g prot       │
│ [EXAMES] Baseline marcado? ☐       │
│                                     │
│ [PRÓXIMO] Dashboard Semanal        │
└─────────────────────────────────────┘
```
### 2.2. Tela 2: Dashboard Semanal (tela principal, 90% do tempo)
```
DASHBOARD SEMANAL – Semana 07/2026
──────────────────────────────────────────────────────────
SEG TER QUA QUI SEX SÁB DOM
Test+Deca  Test    Legs
Push       Corrida Pull Corrida
Push       Corrida Pull Corrida
Push       Corrida Pull Corrida
──────────────────────────────────────────────────────────

Hoje: Segunda 07/02
✅ Aplicação: 125mg Test + 100mg Deca
✅ Treino: Push (PSE 6)
❌ Dieta: 80% aderência
⚠️  Exame semana 6 pendente

[APLICAR] [TREINO] [DIETA] [EXAMES] [RESUMO SEMANAL]
```
### 2.3. Tela 3: Módulo Ciclo Hormonal
```
CICLO ATUAL – Semana 7/2026
┌─────────────────────────────────────┐
│ Testosterona Enantato 250mg/sem     │
│ Decanoato Nandrolona 100mg/sem      │
│                                     │
│ Próxima: SEG 125mg Test + 100mg Deca│
│ Local sugerido: Glúteo direito     │
│                                     │
│ Histórico:                         │
│ 31/01 Seg → Glúteo esquerdo ✓      │
│ 03/02 Qui → Vasto lateral ✓        │
│                                     │
│ [REGISTRAR APLICADA] [EDITAR CICLO] │
└─────────────────────────────────────┘
```
### 2.4. Tela 4: Módulo Treino
```
TREINO HOJE – Segunda 07/02
┌─────────────────────────────────────┐
│ PPL – PUSH                          │
│                                     │
│ Planejado: Supino, desenvolvimento  │
│ Desenvolvimento, tríceps polia      │
│                                     │
│ Realizado:                          │
│ Supino 80kg x 8 ✓ PSE 6             │
│ Desenvolvimento 30kg x 10 ✓ PSE 5   │
│                                     │
│ [CONCLUÍDO] [AJUSTAR] [PRÓXIMO]     │
└─────────────────────────────────────┘
```
### 2.5. Tela 5: Módulo Nutrição
```
DIETA HOJE – 07/02 (80% aderência)
┌─────────────────────────────────────┐
│ 08:00 Café ✓ 567kcal (100%)         │
│ 11:00 Colação ❌ 667kcal (0%)       │
│ 13:30 Almoço ✓ 492kcal (100%)       │
│ 16:00 Lanche ✓ 432kcal (100%)       │
│ 19:00 Jantar ❌ 508kcal (0%)        │
│ 22:00 Ceia ✓ 477kcal (100%)         │
│                                     │
│ Total dia: 2.478 kcal (79%)         │
│                                     │
│ [REGISTRAR REFEIÇÃO] [CALORIAS EXTRAS]
└─────────────────────────────────────┘
```
### 2.6. Tela 6: Módulo Exames
```
EXAMES – Últimos resultados
┌─────────────────────────────────────┐
│ Hematócrito 53,2% ⚠️ (alvo <54%)    │
│ HDL 38 mg/dL ⚠️ (alvo >40)          │
│ Testo Total 820 ng/dL ✓             │
│ E2 28 pg/mL ✓                       │
│                                     │
│ Próxima coleta: 14/02 (semana 8) ⏰  │
│                                     │
│ [REGISTRAR RESULTADO] [HISTÓRICO]   │
└─────────────────────────────────────┘
```
### 2.7. Tela 7: Alertas Críticos
```
🚨 ALERTAS CRÍTICOS
─────────────────────────────────────
❌ Hematócrito 53,2% (54% = STOP)
❌ HDL 38 mg/dL – risco cardiovascular
⚠️  Aplicação de ontem pendente de registro
⚠️  Dieta ontem: apenas 65% aderência

[AÇÃO TOMADA] [MARQUEI MÉDICO] [IGNORAR]
```
### 2.8. Tela 8: Resumo Semanal
```
RESUMO SEMANA 06/2026
┌─────────────────────────────────────┐
│ Aplicações: 2/2 ✓                   │
│ Treinos PPL: 3/3 ✓                  │
│ Corridas: 3/3 ✓                     │
│ Dieta média: 82%                    │
│                                     │
│ Evolução: +0,4 kg | Supino +5 kg    │
│                                     │
│ [EXPORT CSV] [PDF] [ARQUIVAR CICLO] │
└─────────────────────────────────────┘
```

***
## 3. Estados e Transições
```
Estados principais:
Dashboard Semanal ←─────(diário)──────┐
       ↑                                │
┌─────┼─────┐                    ┌────┼─────┐
│ CICLO│TREINO│ ←─(ações diárias)→ │DIETA│EXAMES│
└─────┼─────┘                    └────┼─────┘
       │                              │
       └───────────(registros)─────────┘
                    │
                    ↓
            ALERTAS + RESUMO SEMANAL
                    │
                    ↓
                 EXPORT/ARQUIVO
```

***
## 4. Princípios de Design
1. **Semana como unidade central** – 90% das interações giram em torno da visão semanal.
2. **Cores semânticas:**
   - Verde ✓ = concluído / dentro da faixa.
   - Amarelo ⚠️ = atenção.
   - Vermelho ❌ = crítico / pendente.
3. **Mobile-first** – todas telas legíveis em celular (principal uso).
4. **Zero digitação desnecessária** – botões de “Concluído”, “Parcial”, “Pendente” para 95% das ações.
5. **Offline-first** – sincroniza quando online (para uso em academia, etc.).

***

Esse fluxo garante que você **consiga fazer toda a rotina diária em menos de 3 minutos**, mantendo o histórico perfeito para ajustes futuros.

Quer que eu detalhe alguma tela específica ou gere **wireframes** em Figma/texto ASCII?

Fontes
