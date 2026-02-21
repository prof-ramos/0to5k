# 🚀 Guia de Início Rápido — Zero aos 5KM

## Pré-Requisitos

- ✅ Excel 2016+ ou Google Sheets (para abrir a planilha)
- ✅ Internet (para ler a documentação)
- ✅ Consulta médica prévia (muito importante!)
- ✅ Calçados de corrida confortáveis

---

## Opção 1: Usar a Planilha Diretamente

### 1. Baixe o arquivo
```bash
# Clone o repositório
git clone https://github.com/gabriel-ramos/zero-aos-5km.git

# Ou baixe apenas:
# → data/planilha_zero_aos_5km.xlsx
# → README.md
```

### 2. Abra em Excel ou Google Sheets
```
1. Abra Excel/Google Sheets
2. Arquivo → Abrir
3. Navegue até: data/planilha_zero_aos_5km.xlsx
4. Clique em "Plano de Treinos"
```

### 3. Comece na Semana 1
- Leia a aba "Dicas & Protocolo" (importante!)
- Siga o protocolo de cada sessão: Aquecimento → Treino → Desaceleração
- Preencha as colunas amarelas após cada sessão

---

## Opção 2: Usar via Google Sheets

### 1. Importe na sua conta Google
```
1. Acesse: https://sheets.google.com
2. + Novo → Abrir um arquivo
3. Selecione: data/planilha_zero_aos_5km.xlsx
4. Google Sheets fará a conversão automaticamente
```

### 2. Configure para compartilhamento
```
1. Clique em "Compartilhar"
2. Defina como "Qualquer pessoa com o link"
3. Compartilhe com seu médico ou personal trainer
```

---

## Opção 3: Regenerar a Planilha (Python)

### Se você quer modificar ou customizar a planilha:

```bash
# 1. Clone o repositório
git clone https://github.com/gabriel-ramos/zero-aos-5km.git
cd zero-aos-5km

# 2. Instale as dependências com uv
uv pip install -r requirements.txt

# Ou com pip tradicional:
pip install pandas openpyxl

# 3. Execute o script
python generate_planilha.py

# 4. Novo arquivo gerado:
# → data/planilha_zero_aos_5km.xlsx
```

---

## ✅ Passo a Passo Inicial (Sua Primeira Sessão)

### Dia 1 — Semana 1, Treino 1

#### Antes de Sair
```
1. Consulte seu médico ✅
2. Escolha um local seguro (parque, academia, trilha)
3. Use roupas confortáveis e calçados apropriados
4. Deixe alguém sabendo por onde você vai treinar
5. Carregue seu celular
```

#### Aquecimento (5 min)
```
→ Caminhe em ritmo normal por 5 minutos
→ Objetivo: elevar sua frequência cardíaca gradualmente
→ Você deve sentir-se preparado mas não cansado
```

#### Treino (Semana 1, Sessão 1)
```
→ 8× (30 segundos correndo + 2 minutos caminhando)
→ Ritmo: lento! Deve conseguir falar enquanto corre
→ Se ficar muito cansado: reduza para mais caminhada
```

**Exemplo de cronograma:**
```
0:00–0:30     Correr (sinta o cansaço, mas respire!)
0:30–2:30     Caminhar (recupere a respiração)
2:30–3:00     Correr
3:00–5:00     Caminhar
... (repita 8 vezes)
```

#### Desaceleração (5 min)
```
→ Caminhe em ritmo lento por 5 minutos
→ Objetivo: normalizar sua frequência cardíaca
→ Você deve estar respirando normalmente ao final
```

#### Alongamento (5 min)
```
Panturrilha (cada perna): 30 segundos
Quadríceps (cada perna): 30 segundos
Isquiotibiais (cada perna): 30 segundos
Quadril (cada lado): 30 segundos

→ Mantenha cada posição sem pular
→ Sinta o alongamento, não a dor
```

#### Registro (2 min)
```
Preencha a planilha:
  Data: 21/02/2026
  Tempo real (min): 30
  Distância real (km): 2.5
  FC média (bpm): 125
  Esforço (1-10): 6
  Observações: Primeira vez! Ardia a panturrilha no final.
```

#### Hidratação e Descanso
```
→ Beba água após o treino
→ Coma algo com proteína nos próximos 30 min
→ Descanse bem — você merece!
```

---

## 📅 Cronograma Sugerido

### Semana 1–3 (Fase 0 — Caminhada)
```
Seg: Treino 1  →  Qua: Treino 2  →  Sex: Treino 3
↓
Descanso ativo (alongamento, yoga, caminhada leve)
```

### Semana 4+ (Fases 1–3)
```
Segunda:  Treino 1  →  Terça: Descanso  →  Quarta: Treino 2
↓
Quinta: Descanso  →  Sexta: Treino 3  →  Fim de semana: Descanso
```

---

## 🆘 Checklist de Segurança

### Antes de cada treino, responda:

- [ ] Consultei meu médico? (especialmente se fumante)
- [ ] Dormi bem (≥7 horas)?
- [ ] Comi algo leve 1–2 horas atrás?
- [ ] Estou hidratado?
- [ ] O clima permite (não muito quente)?
- [ ] Tenho calçados apropriados?
- [ ] Deixei alguém sabendo meu local?

### Durante o treino, monitore:

- [ ] Consigo falar enquanto corro? (SIM = bom, NÃO = reduza velocidade)
- [ ] Tenho dor no peito? (SIM = PARE IMEDIATAMENTE)
- [ ] Estou tonto? (SIM = sente-se, beba água)
- [ ] Minha respiração é normal? (SIM = continue)

---

## 📊 Acompanhamento

### Use Apps para Registrar

**Recomendados:**
- **Strava**: Distância, ritmo, rota, redes sociais
- **Google Fit**: Integração com wearables, histórico
- **Nike Run Club**: Plano guiado, motivação
- **Garmin Connect**: Se tiver relógio Garmin

**Na planilha, você registra:**
```
Tempo real (min)
Distância real (km)
FC média (bpm)
Esforço (1-10)
Observações
```

### Sinais de Bom Progresso

✅ Você consegue falar frases completas enquanto corre
✅ Sua frequência cardíaca de repouso está diminuindo
✅ Você dorme melhor à noite
✅ Seus pulmões parecem menos "queimados"
✅ A semana seguinte parece mais fácil

### Sinais de Alerta

❌ Dor que não é muscular
❌ Falta de ar desproporcional ao esforço
❌ Seu coração "pulando" batidas
❌ Tontura ou desmaios
❌ Inchaço que não melhora em 48h

→ Se qualquer um desses: **Procure seu médico**

---

## 🚬 Se Você Fuma

### Dicas Especiais

1. **Não fume 2h antes do treino**
   - O CO do cigarro reduz seu transporte de oxigênio
   - Faça 2h de intervalo para recuperação

2. **Use o treino como substituto**
   - Quando bate aquela fissura, saia para correr
   - O exercício ativa os mesmos receptores de recompensa

3. **Espere sinais de melhora**
   - Semana 2–3: seu pulmão ainda dói? Normal
   - Semana 4–6: você respira melhor? Excelente!
   - Semana 8+: falta de ar melhorou? Você está melhorando

4. **Converse com seu médico sobre parar**
   - O programa incentiva a cessação
   - Muitos usuários param naturalmente após semanas 4–6

---

## 🌡️ Brasília: Dicas de Clima

### Melhores Horários
```
06:00–07:00  Manhã: Fresco, pouco movimento ✅
10:00–16:00  Meio-dia: Muito quente, evitar ⚠️
17:30–19:00  Tarde: Bom, fresco ✅
```

### Por Época do Ano
```
Dez–Mar (Quente & Úmido)
→ Madrugada (05:30–06:30) é ideal

Abr–Set (Seco & Poeira)
→ Hidrate extra (500ml antes + durante)
→ Use máscara se poluição alta

Set–Nov (Transição)
→ Qualquer horário funciona
```

---

## 📞 Dúvidas Frequentes

**P: Quanto tempo até ver resultado?**
R: Semanas 1–4 adaptação. Semana 5+ você nota diferença na respiração.

**P: E se eu pular um treino?**
R: Nenhum problema. Retorne na próxima. Se pular >3 semanas, consulte seu médico.

**P: Posso fazer 2 treinos no mesmo dia?**
R: Não recomendado. Pode causar lesão. Mantenha 3x/semana.

**P: Meu joelho dói. E agora?**
R: Dor articular ≠ dor muscular. Interrompa e consulte médico.

**P: Posso pular para a próxima semana?**
R: Só se o esforço foi ≤ 4/10. Se foi > 7, repita a semana.

---

## 🎯 Seu Primeiro Mês

```
SEMANA 1  →  20 min de caminhada  →  Meta: Criar hábito
SEMANA 2  →  25 min de caminhada  →  Meta: Aumentar duração
SEMANA 3  →  30 min de caminhada  →  Meta: Manter intensidade
SEMANA 4  →  Primeiros 30s correndo  →  Meta: Introduzir corrida

Parabéns! Você superou a adaptação cardiorrespiratória! 🎉
```

---

## 📚 Próximas Leituras

1. **README.md** — Documentação completa com referências científicas
2. **docs/GUIA_MEDICO.md** — Se você é profissional de saúde
3. **CONTRIBUTING.md** — Se quer melhorar o programa

---

## ❤️ Motivação Final

> *"O progresso não é linear. Você terá dias fáceis e dias difíceis. Ambos fazem parte da jornada. Cada passo que você dá é um passo em direção a uma vida mais saudável."*

Bem-vindo ao **Zero aos 5KM**. 🏃

---

**Precisa de ajuda?**
- 📝 Abra uma Issue no GitHub
- 💬 Pergunte em GitHub Discussions
- 📧 Entre em contato (se configurado)

**Versão**: 1.1.0  
**Última atualização**: Fevereiro 21, 2026
