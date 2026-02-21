# Implementation Plan

## [Overview]

Implementar as correções e melhorias identificadas pela análise do CodeRabbit no projeto 0to5k. O plano abrange correções de typos, problemas de acessibilidade, ajustes de conteúdo científico, e limpeza de arquivos sensíveis do repositório.

## [Types]

### Tipos de Alterações

1. **Correções de Tipos** (Typo fixes)
   - Correção de grafia incorreta em português
   - Nomenclatura de exercícios incorretos
   - Palavras mal escritas

2. **Melhorias de Acessibilidade** (UX/Accessibility)
   - Indicadores não-visuais para cores semânticas
   - Novo princípio de design sobre acessibilidade

3. **Melhorias de Conteúdo** (Content improvements)
   - Avisos de segurança mais proeminentes
   - Referências científicas
   - Clarificação de informações ambíguas

4. **Limpeza de Repositório** (Repository cleanup)
   - Remoção de arquivos sensíveis
   - Atualização do .gitignore

## [Files]

### Arquivos a Modificar

| Arquivo | Tipo de Alteração |
|---------|-------------------|
| `fluxo_ux.md` | Acessibilidade (linhas 172-181, 174-177) |
| `exames/exames_monitoramento.md` | Typo (linha 47) |
| `treino/treino_ppl_completo.md` | Múltiplas correções (linhas 18, 157-158, 165, 208-214, 262) |
| `ciclo/ciclo_hormonal.md` | Typo (linhas 180-181) |
| `README.md` | Múltiplas melhorias (linhas 9, 15-21, 91-105, 110-117, 120-131, 134-165, 168-184, 187-198) |
| `.gitignore` | Adicionar padrões omitidos |

### Arquivos a Remover

| Arquivo | Motivo |
|---------|--------|
| `.omc/state/last-tool-error.json` | Contiene PII (caminhos absolutos) |
| `repomix-output.xml` | Arquivo gerado, não deve estar no repositório |

### Arquivos a Atualizar no .gitignore

- `repomix-output.xml`
- `.omc/` (diretório inteiro)

## [Functions]

### Correções Específicas por Arquivo

#### fluxo_ux.md

1. **Seção "2. Cores semânticas" (linhas 174-177)**
   - Adicionar indicadores de texto: "Concluído", "Atenção", "Crítico"
   - Manter símbolos existentes ✓ ⚠️ ❌
   - Adicionar nota sobre acessibilidade (teste com simuladores de daltonismo)

2. **Seção "4. Princípios de Design" (linhas 172-181)**
   - Adicionar 6º princípio sobre acessibilidade:
     - Suporte a screen readers (VoiceOver/TalkBack)
     - Navegação por teclado
     - Tamanho mínimo de touch targets (44x44px)
     - Texto redimensionável sem quebra
     - ARIA labels
     - Modo de alto contraste

#### exames/exames_monitoramento.md

1. **Linha 47**
   - Buscar: "infamação"
   - Substituir por: "inflamação"

#### treino/treino_ppl_completo.md

1. **Linha 18**
   - Buscar: "sobrecarrecuperação"
   - Substituir por: "sobrecarga muscular"

2. **Linha 157-158**
   - Buscar: "Tríceps Rosca" no dia PULL
   - Substituir por: "Rosca Direta"
   - Manter "Face Pulls" como está

3. **Linha 165**
   - Buscar: "Mais alongamento peitoral" (na linha de Rosca Inclinada)
   - Substituir por: "Mais alongamento do bíceps"

4. **Linha 208-214**
   - Ajustar tabela: header tem 4 colunas mas dados têm 5
   - Remover a 5ª coluna dos dados ou adicionar header correspondente

5. **Linha 262**
   - Buscar: "recupere adequamentamente"
   - Substituir por: "recupere adequadamente"

#### ciclo/ciclo_hormonal.md

1. **Linhas 180-181**
   - Buscar: "injeitonear"
   - Substituir por: "injetar"

#### README.md

1. **Linha 9**
   - Substituir aviso fraco por bloco de aviso de segurança PROEMINENTE
   - Mentionar esteroides anabolizantes (testosterona, nandrolona)
   - Advertência para consultar médico/endocrinologista
   - Advertência sobre legais locais

2. **Linhas 15-21**
   - Clarificar que "3,145 kcal" é exemplo
   - Adicionar "(valor de exemplo — recalcular individualmente)"

3. **Linhas 91-105**
   - Converter "⚠️ Avisos Críticos" em bloco destacado
   - Usar Markdown admonition ou HTML com fundo destacado
   - Adicionar título "Aviso Crítico — Segurança Médica"

4. **Linhas 110-117**
   - Corrigir "Ciclo Hormonal" para "12-15 sem" ou adicionar nota explicativa

5. **Linhas 120-131**
   - Adicionar 2-3 referências científicas com autor/ano/título/URL
   - Incluir pelo menos um estudo sobre TRT/hormonal monitoring
   - Incluir pelo menos um estudo sobre corrida progressiva

6. **Linhas 134-165**
   - Clarificar item de "Liberação médica"
   - Nova versão: "Liberação médica (OBRIGATÓRIA se for iniciar ciclo hormonal)"

7. **Linhas 168-184**
   - Substituir "Não processará os autores..." por linguagem mais cautelosa
   - Mencionar "programa fornecido como está"
   - Adicionar recomendação de consultar advogado

8. **Linhas 187-198**
   - Atualizar contagem de linhas (remover "~")
   - Atualizar: treino_ppl_completo.md, corrida_zero_5km.md, nutricao_calculada.md, ciclo_hormonal.md, exames_monitoramento.md

#### .gitignore

1. Adicionar entradas:
   ```
   repomix-output.xml
   .omc/
   ```

## [Classes]

N/A - Este é um projeto de documentação Markdown, não há classes ou código de programação.

## [Dependencies]

N/A - Não há novas dependências necessárias. Apenas edição de arquivos Markdown existentes.

## [Testing]

### Estratégia de Validação

1. **Verificação de typos**: Ler cada arquivo modificado e confirmar correção
2. **Validação de tabelas**: Renderizar Markdown e verificar formatação
3. **Links internos**: Confirmar que todos os links continuam funcionando
4. **Git status**: Verificar arquivos modificados com `git status`
5. **Git diff**: Revisar alterações com `git diff`

### Comandos de Validação

```bash
# Verificar status do repositório
git status

# Verificar diferenças
git diff --stat

# Verificar se arquivos sensíveis foram removidos
ls -la .omc/
ls -la repomix-output.xml
```

## [Implementation Order]

### Ordem de Implementação (1-14)

1. **Corrigir typos simples** (exames, ciclo, treino - linhas únicas)
   - exams: "infamação" → "inflamação"
   - ciclo: "injeitonear" → "injetar"
   - treino: "adequamentamente" → "adequadamente"

2. **Corrigir "sobrecarrecuperação"** (treino_ppl_completo.md linha 18)

3. **Corrigir exercício incorreto** (treino_ppl_completo.md linha 157-158)
   - "Tríceps Rosca" → "Rosca Direta"

4. **Corrigir descrição de exercício** (treino_ppl_completo.md linha 165)
   - "alongamento peitoral" → "alongamento do bíceps"

5. **Corrigir tabela** (treino_ppl_completo.md linhas 208-214)
   - Alinhar colunas do header com dados

6. **Adicionar acessibilidade em fluxo_ux.md** (linhas 174-177)
   - Adicionar texto labels aos estados de cor

7. **Adicionar princípio de acessibilidade** (fluxo_ux.md linhas 172-181)
   - Adicionar 6º princípio de design

8. **Atualizar .gitignore**
   - Adicionar repomix-output.xml e .omc/

9. **Remover arquivos sensíveis**
   - Remover .omc/state/last-tool-error.json
   - Remover repomix-output.xml

10. **Melhorar aviso de segurança** (README.md linha 9)
    - Substituir por bloco proeminente

11. **Clarificar exemplo calórico** (README.md linhas 15-21)
    - Adicionar "(valor de exemplo)"

12. **Destacar avisos críticos** (README.md linhas 91-105)
    - Converter em bloco destacado

13. **Corrigir不一致 do ciclo hormonal** (README.md linhas 110-117)
    - Corrigir duração para 12-15 sem

14. **Adicionar referências científicas** (README.md linhas 120-131)
    - Adicionar 2-3 citações

15. **Clarificar liberação médica** (README.md linhas 134-165)
    - Torner condicional explícito

16. **Melhorar linguagem de responsabilidade** (README.md linhas 168-184)
    - Substituir por linguagem mais cautelosa

17. **Atualizar contagem de linhas** (README.md linhas 187-198)
    - Remover "~" das estimativas

### Priorização

- **ALTA**: Correções de typos e informações incorretas
- **MÉDIA**: Melhorias de acessibilidade e conteúdo
- **BAIXA**: Atualização de metadados (contagem de linhas)

---

*Plano criado em 21/02/2026*
*Baseado na análise CodeRabbit em analisecoderabbit_debug.md*
