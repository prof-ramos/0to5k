# 📑 ÍNDICE COMPLETO — Zero aos 5KM

## 🎯 Comece por aqui

### Novo no projeto?
1. Leia: **docs/GETTING_STARTED.md** ← Guia de primeiros passos
2. Baixe: **data/planilha_zero_aos_5km.xlsx** ← Arquivo principal
3. Execute: Seu primeiro treino (Semana 1)

### Quer entender a ciência?
1. Leia: **README.md** ← Documentação com 7 referências
2. Consulte: **docs/GUIA_MEDICO.md** ← Para profissionais

### Quer contribuir?
1. Leia: **CONTRIBUTING.md** ← Diretrizes
2. Consulte: **SECURITY.md** ← Política de segurança

---

## 📂 Estrutura de Arquivos

```
zero-aos-5km/
│
├─ ENTREGÁVEIS PRINCIPAIS
│  ├─ data/planilha_zero_aos_5km.xlsx      ⭐ Arquivo Excel (45 treinos)
│  ├─ README.md                       ⭐ Documentação técnica completa
│  └─ docs/GETTING_STARTED.md              ⭐ Guia de início rápido
│
├─ DOCUMENTAÇÃO
│  ├─ docs/EXECUTIVE_SUMMARY.md            📊 Sumário para tomadores de decisão
│  ├─ CHANGELOG.md                    📜 Histórico de versões
│  ├─ CONTRIBUTING.md                 👥 Como contribuir
│  ├─ SECURITY.md                     🔒 Política de segurança
│  ├─ LICENSE                         ⚖️ MIT License
│  └─ docs/
│     └─ GUIA_MEDICO.md               👨‍⚕️ Para profissionais de saúde
│
├─ CONFIGURAÇÃO & INFRAESTRUTURA
│  ├─ pyproject.toml                  🐍 Config Python (uv)
│  ├─ requirements.txt                📦 Dependências pip
│  ├─ package.json                    📋 Metadados Node.js
│  ├─ generate_planilha.py            🔧 Script de geração
│  └─ .gitignore                      🚫 Regras Git
│
├─ CI/CD & AUTOMAÇÃO
│  └─ .github/
│     └─ workflows/
│        └─ validate.yml              ⚙️ GitHub Actions
│
└─ METADADOS
   ├─ project_metadata.json           📊 Dados do projeto (JSON)
   └─ docs/INDEX.md (este arquivo)         📑 Navegação do projeto
```

---

## 📖 Guia de Documentação

### Para Usuários Finais

| Arquivo | Conteúdo | Tempo de Leitura |
|---------|----------|-----------------|
| **docs/GETTING_STARTED.md** | Como usar a planilha, primeiros passos, checklist de segurança | 10 min |
| **README.md** (Seções 1–8) | Estrutura do programa, protocolo, dicas, clima de Brasília | 15 min |
| **data/planilha_zero_aos_5km.xlsx** | Acompanhamento prático dos 45 treinos | Contínuo |

### Para Profissionais de Saúde

| Arquivo | Conteúdo | Aplicação |
|---------|----------|-----------|
| **docs/GUIA_MEDICO.md** | Evidências, contraindicações, sinais de alerta | Orientar pacientes |
| **README.md** (Seção 🔬) | 7 estudos científicos com DOI e implicações | Validar protocolo |
| **SECURITY.md** | Avisos médicos, disclaimers, responsabilidade | Proteção legal |

### Para Desenvolvedores

| Arquivo | Conteúdo | Ação |
|---------|----------|------|
| **pyproject.toml** | Dependências, versão, metadados | `uv install` |
| **requirements.txt** | Pacotes Python necessários | `pip install -r requirements.txt` |
| **generate_planilha.py** | Script para regenerar Excel | `python generate_planilha.py` |
| **CONTRIBUTING.md** | Diretrizes de contribuição | Submeter PR |

### Para Administradores

| Arquivo | Conteúdo | Função |
|---------|----------|--------|
| **LICENSE** | Termos de uso (MIT) | Conformidade legal |
| **.gitignore** | Arquivos ignorados | Limpeza de repositório |
| **.github/workflows/validate.yml** | CI/CD automatizado | Validação automática |
| **project_metadata.json** | Metadados estruturados | Catalogação |

---

## 🔍 Busca por Tópico

### Segurança & Saúde

| Tópico | Local |
|--------|-------|
| ⚠️ Contraindicações | docs/GUIA_MEDICO.md + SECURITY.md |
| 🆘 Sinais de parada | README.md + docs/GETTING_STARTED.md |
| ❤️ Avaliação médica | README.md + SECURITY.md |
| 🏥 Para profissionais | docs/GUIA_MEDICO.md |

### Programa & Treino

| Tópico | Local |
|--------|-------|
| 📅 Estrutura das 15 semanas | README.md + docs/GETTING_STARTED.md |
| ⏱️ Protocolo de cada sessão | README.md + planilha (Aba 2) |
| 📈 Regras de progressão | README.md + docs/GETTING_STARTED.md |
| 🚬 Dicas para fumantes | README.md + docs/GETTING_STARTED.md |

### Técnico & Desenvolvimento

| Tópico | Local |
|--------|-------|
| 🐍 Instalar dependências | pyproject.toml + requirements.txt |
| 🔧 Regenerar planilha | docs/GETTING_STARTED.md (Opção 3) |
| 🤝 Contribuir | CONTRIBUTING.md |
| 🚀 Fazer deploy | .github/workflows/validate.yml |

### Científico & Evidências

| Tópico | Local |
|--------|-------|
| 📚 Referências completas | README.md (Seção 🔬) |
| 🔗 Rastreabilidade | README.md (Mapa de Decisões) |
| 📊 Estudos por tema | README.md (Tabela de Estudos) |

---

## 🎓 Leitura Recomendada por Perfil

### Perfil: Iniciante em Corrida
```
1. docs/GETTING_STARTED.md (10 min)
     ↓
2. Planilha — Aba "Dicas & Protocolo" (5 min)
     ↓
3. Seu primeiro treino! 🏃
     ↓
4. README.md — Progressão (conforme avança)
```

### Perfil: Médico/Fisioterapeuta
```
1. docs/GUIA_MEDICO.md (5 min)
     ↓
2. README.md — Seção 🔬 (15 min)
     ↓
3. Recomendar para pacientes sedentários
```

### Perfil: Desenvolvedor
```
1. README.md — Estrutura (5 min)
     ↓
2. pyproject.toml + requirements.txt (2 min)
     ↓
3. CONTRIBUTING.md (5 min)
     ↓
4. Clonar repo + Enviar PR
```

### Perfil: Gerente/Stakeholder
```
1. docs/EXECUTIVE_SUMMARY.md (10 min)
     ↓
2. project_metadata.json (2 min)
     ↓
3. README.md — Referências (10 min)
     ↓
4. Decisão: Adotar/Financiar/Colaborar
```

---

## 📊 Estatísticas do Projeto

### Documentação
| Métrica | Valor |
|---------|-------|
| Total de arquivos | 13 |
| Arquivos Markdown | 8 |
| Linhas de documentação | 1,200+ |
| Referências científicas | 7 com DOI |
| Código (Python) | 1 script |

### Planilha
| Métrica | Valor |
|---------|-------|
| Semanas | 15 |
| Sessões por semana | 3 |
| Total de treinos | 45 |
| Fases | 4 |
| Colunas de registro | 6 |

### Repositório
| Métrica | Valor |
|---------|-------|
| Licença | MIT (Open Source) |
| Versão | 1.1.0 |
| Data de lançamento | Fevereiro 2026 |
| Linguagem principal | Português (BR) |
| Plataforma | GitHub |

---

## 🔗 Referências Cruzadas

### README.md referencia:
- ✓ docs/GETTING_STARTED.md (como usar)
- ✓ docs/GUIA_MEDICO.md (profissionais)
- ✓ SECURITY.md (disclaimers)
- ✓ Referências científicas (7 estudos)

### docs/GETTING_STARTED.md referencia:
- ✓ README.md (documentação completa)
- ✓ planilha Excel (Aba "Dicas & Protocolo")
- ✓ SECURITY.md (sinais de parada)

### CONTRIBUTING.md referencia:
- ✓ SECURITY.md (código de conduta)
- ✓ README.md (contexto científico)
- ✓ LICENSE (termo MIT)

### docs/GUIA_MEDICO.md referencia:
- ✓ README.md (Seção 🔬 Referências)
- ✓ SECURITY.md (contraindicações)
- ✓ docs/GETTING_STARTED.md (protocolo)

---

## 🎯 Próximos Passos Recomendados

### Se você é usuário:
1. ✅ Consultou seu médico?
2. 📥 Baixou `data/planilha_zero_aos_5km.xlsx`?
3. 📖 Leu `docs/GETTING_STARTED.md`?
4. 🏃 Pronto para a Semana 1?

### Se você é desenvolvedor:
1. 🍴 Fork do repositório
2. 🐍 `uv install` ou `pip install -r requirements.txt`
3. 📝 Leia `CONTRIBUTING.md`
4. 🔧 Crie seu fork/branch
5. 🚀 Submeta um PR!

### Se você é pesquisador:
1. 📚 Leia `README.md` (Seção 🔬)
2. 📖 Acesse os 7 DOIs completos
3. 💡 Procure gaps em evidências
4. 📧 Proponha melhorias baseadas em novos estudos

---

## ❓ Não Encontrou o que Procurava?

### Tente:
```
1. Busque no GitHub Issues: https://github.com/gabriel-ramos/zero-aos-5km/issues
2. Abra uma Discussion: https://github.com/gabriel-ramos/zero-aos-5km/discussions
3. Leia CONTRIBUTING.md para contactar colaboradores
4. Verifique SECURITY.md para questões de saúde
```

---

## 📋 Checklist de Navegação

- [ ] Você sabe qual arquivo ler primeiro para seu perfil?
- [ ] Você encontrou a seção "Sinais de Parada"?
- [ ] Você consultou seu médico antes de começar?
- [ ] Você baixou a planilha Excel?
- [ ] Você entende a progressão de 15 semanas?
- [ ] Você identificou suas responsabilidades (Legal Disclaimer)?

---

**Versão**: 1.1.0  
**Atualizado**: Fevereiro 21, 2026  
**Próxima revisão**: Junho 2026 (feedback de usuários)
