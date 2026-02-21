# 📊 SUMÁRIO EXECUTIVO DO PROJETO

## Zero aos 5KM
**Programa de Corrida para Sedentários e Fumantes — 15 Semanas**

---

## 🎯 Visão Geral

| Aspecto | Descrição |
|--------|-----------|
| **Nome do Repositório** | `zero-aos-5km` |
| **Versão** | 1.1.0 |
| **Licença** | MIT (Open Source) |
| **Autor** | Gabriel Ramos |
| **Data de Lançamento** | Fevereiro 2026 |
| **Linguagem Principal** | Python (geração do Excel) |
| **Plataforma Alvo** | Excel / Google Sheets |

---

## 📦 Componentes Entregáveis

### 1. **Planilha Principal** (`data/planilha_zero_aos_5km.xlsx`)
- **Aba 1**: Plano de Treinos — 15 semanas × 3 sessões/semana
- **Aba 2**: Dicas & Protocolo — referências de segurança e progressão
- **Aba 3**: Resumo Semanal — consolidação de progresso
- **Formatos**: Excel (.xlsx), compatível com Google Sheets

### 2. **Documentação Técnica**
| Arquivo | Propósito | Público |
|---------|-----------|---------|
| **README.md** | Documentação completa com 7 referências científicas | Geral |
| **CHANGELOG.md** | Histórico de versões e mudanças | Desenvolvedores |
| **CONTRIBUTING.md** | Diretrizes para contribuições | Colaboradores |
| **SECURITY.md** | Política de segurança e disclaimers | Geral |
| **docs/GUIA_MEDICO.md** | Guia para profissionais de saúde | Médicos/Fisioterapeutas |

### 3. **Infraestrutura**
| Arquivo | Propósito |
|---------|-----------|
| **pyproject.toml** | Configuração Python com `uv` |
| **requirements.txt** | Dependências pip |
| **package.json** | Metadados Node.js |
| **generate_planilha.py** | Script Python para regenerar Excel |
| **.gitignore** | Regras Git |
| **.github/workflows/validate.yml** | CI/CD GitHub Actions |

---

## 🔬 Fundamentação Científica

### 7 Estudos Revisados por Pares

| # | Estudo | Autores | Ano | DOI |
|----|--------|---------|-----|-----|
| 1 | Start to Run | Ooms et al. | 2013 | 10.1186/1471-2458-13-697 |
| 2 | Couch-to-5k & Lesões | Relph et al. | 2023 | 10.3390/ijerph20176682 |
| 3 | ASPC Saúde Cardiovascular I | Lavie et al. | 2022 | 10.1016/j.ajpc.2022.100424 |
| 4 | ASPC Saúde Cardiovascular II | Lavie et al. | 2022 | 10.1016/j.ajpc.2022.100425 |
| 5 | Sedentarismo & Aptidão | Biswas et al. | 2024 | 10.3390/ijerph21040461 |
| 6 | Exercício & Tabagismo | Haasova et al. | 2018 | 10.1093/ntr/ntx190 |
| 7 | Sprint Inapropriado | Kessler et al. | 2014 | 10.3389/fpsyg.2014.01505 |

**Cada decisão do programa é rastreável** a um ou mais estudos.

---

## 📈 Estrutura do Programa

### Progressão por Fases

```
FASE 0 (Semanas 1–3)        Apenas Caminhada
    ↓                        (adaptar cardiorrespiratório)
FASE 1 (Semanas 4–7)        Primeiros Tiros de Corrida
    ↓                        (intervalos 30s–1m30s)
FASE 2 (Semanas 8–11)       Construindo Base Aeróbica
    ↓                        (blocos até 8 minutos)
FASE 3 (Semanas 12–15)      Corrida Contínua
    ↓
META: 30 MIN CONTÍNUOS = 5KM 🏁
```

### Estatísticas do Programa

| Métrica | Valor |
|---------|-------|
| Duração total | 15 semanas |
| Frequência | 3x por semana |
| Total de sessões | 45 treinos |
| Duração média do treino | 30–40 min (incluindo aquecimento) |
| Progressão | 10% máximo por semana |
| Zona de intensidade alvo | PSE 5–6 (escala 1–10) |
| Taxa de abandono esperada | 20–30% (vs. 64% do C25K padrão) |

---

## 👥 Público-Alvo

### Perfil Primário
- **Sedentários** (sem atividade regular por 6+ meses)
- **Fumantes** (atuais ou ex)
- **Adultos** 25–65 anos
- **Sem histórico** de doença cardiovascular severa

### Populações Específicas (Requer Adaptação Médica)
- Gestantes → Consultar ginecologista
- Idosos (65+) → Teste de esforço recomendado
- Comorbidades (diabetes, hipertensão) → Avaliação prévia obrigatória
- Pós-cirúrgico (< 3 meses) → Contraindicado

---

## 🎯 Objetivos de Desenvolvimento

### Curto Prazo (Semanas 1–5)
- ✅ Criar hábito de exercício regular
- ✅ Adaptar sistema cardiovascular a atividade leve
- ✅ Reduzir fissura por nicotina em fumantes
- ✅ Estabelecer proteção musculoesquelética

### Médio Prazo (Semanas 6–11)
- ✅ Aumentar capacidade aeróbica
- ✅ Reduzir frequência cardíaca de repouso
- ✅ Manter aderência ao programa
- ✅ Adaptar sistema respiratório (especial para fumantes)

### Longo Prazo (Semanas 12–15+)
- ✅ Completar 5KM contínuos
- ✅ Reduzir risco cardiovascular
- ✅ Estimular tentativa de cessação do tabagismo
- ✅ Criar base para programas de exercício futuro

---

## ⚠️ Contraindicações & Disclaimers

### Contraindicações Absolutas
- Infarto agudo (< 3 meses)
- Angina instável
- Arritmia não controlada
- Insuficiência cardíaca descompensada

### Avisos Obrigatórios
1. ⚠️ **Avaliação médica prévia** — essencial para fumantes
2. ⚠️ **ECG de esforço** — recomendado antes de iniciar
3. ⚠️ **Monitoramento** — especialmente semanas 1–4
4. ⚠️ **Sinais de parada** — dor torácica, tontura, dispneia severa

### Responsabilidade Legal
- Projeto fornecido "no estado em que se encontra"
- Sem garantias de resultados ou segurança
- Usuário assume responsabilidade pela saúde
- Autores não se responsabilizam por lesões ou eventos adversos

---

## 📊 Métricas de Sucesso

| KPI | Alvo | Como Medir |
|-----|------|-----------|
| **Taxa de Conclusão** | ≥ 70% | Usuários que completam 15 semanas |
| **Redução de Lesões** | ≤ 20% | Comparado com C25K padrão (64%) |
| **Satisfação** | ≥ 4.5/5 | Feedback em GitHub Issues/Discussions |
| **Aderência Semanal** | ≥ 80% | Média de treinos completados |
| **Tentativa Cessação** | ≥ 40% | Em fumantes participantes |

---

## 💰 Modelo de Sustentabilidade

### Receita (Futuro Potencial)
- **Freemium**: Versão básica grátis, premium com analytics
- **Consultoria**: Personalizações para clinicas de fisioterapia
- **Integração**: API para apps de corrida (Strava, Garmin)
- **Publicações**: Artigos científicos em periódicos

### Custos Operacionais
- **Hospedagem GitHub**: Gratuita
- **Domínio**: ~$12/ano (opcional)
- **CI/CD**: GitHub Actions gratuito
- **Documentação**: Markdown (gratuito)

---

## 🚀 Plano de Lançamento

### Fase 1: Alfa (Semanas 1–2)
- [ ] Testes internos com 5–10 usuários
- [ ] Coleta de feedback no README
- [ ] Correção de bugs na planilha
- [ ] Validação científica

### Fase 2: Beta (Semanas 3–6)
- [ ] Lançamento GitHub público
- [ ] Publicação em comunidades de corrida
- [ ] Contactar professores de educação física
- [ ] Tradução para inglês (opcional)

### Fase 3: Produção (Semana 7+)
- [ ] Site landing (GitHub Pages)
- [ ] Integração com Google Fit
- [ ] Publicação em App Stores (Android/iOS)
- [ ] Artigo científico descrevendo programa

---

## 📞 Canais de Comunicação

| Canal | Uso |
|-------|-----|
| **GitHub Issues** | Bugs e problemas técnicos |
| **GitHub Discussions** | Dúvidas gerais e sugestões |
| **Pull Requests** | Contribuições e melhorias |
| **Wiki** | Documentação adicional (futuro) |

---

## 📋 Checklist de Pré-Lançamento

- [x] Planilha Excel completa (3 abas)
- [x] README com 7 referências científicas
- [x] Documentação de segurança
- [x] Guia para profissionais de saúde
- [x] Configuração Python (uv, pyproject.toml)
- [x] CI/CD GitHub Actions
- [x] Licença MIT
- [x] .gitignore e estrutura de diretórios
- [ ] Testes com usuários reais
- [ ] Feedback de cardiologistas
- [ ] Tradução (opcional)

---

## 🎓 Impacto Esperado

### Saúde Pública
- Programa de baixo custo e alto alcance
- Redução de sedentarismo em comunidades
- Estímulo à cessação do tabagismo
- Potencial redução de doenças cardiovasculares

### Comunidade Open Source
- Modelo de projeto de saúde aberto
- Demonstração de integração de ciência + código
- Referência para outros programas de fitness
- Contribuição para conhecimento público

### Desenvolvimento Pessoal (Gabriel Ramos)
- Portfolio de projeto end-to-end
- Demonstração de skills em Python, Excel, documentação
- Publicação potencial em periódico científico
- Conexão com comunidade de health tech

---

## 📚 Recursos Adicionais

- **GitHub**: https://github.com/gabriel-ramos/zero-aos-5km
- **Documentação**: README.md (318 linhas)
- **Planilha**: data/planilha_zero_aos_5km.xlsx (45 treinos)
- **Referências**: 7 estudos com DOI completo

---

**Versão do Documento**: 1.1.0  
**Data**: Fevereiro 21, 2026  
**Status**: ✅ Pronto para Lançamento
