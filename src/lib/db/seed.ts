import { db } from './index'
import { compostos, examesRef, planoAlimentar } from './schema'

async function main() {
  console.log('🌱 Seeding database...')

  const TEST_USER_ID = process.env.TEST_USER_ID || '00000000-0000-0000-0000-000000000000'

  // 1. Compostos
  const insertedCompostos = await db
    .insert(compostos)
    .values([
      {
        userId: TEST_USER_ID,
        nome: 'Testosterona Enantato',
        doseSemanal: 250,
        doseAplicacao: 125,
        frequencia: 2,
        diasAplicacao: 'Seg, Qui',
        meiaVida: '7 dias',
      },
      {
        userId: TEST_USER_ID,
        nome: 'Deca Durabolin (Nandrolona)',
        doseSemanal: 200,
        doseAplicacao: 200,
        frequencia: 1,
        diasAplicacao: 'Seg',
        meiaVida: '15 dias',
      },
    ])
    .returning()

  // 2. Exames de Referência
  await db.insert(examesRef).values([
    {
      painel: 'Hormonal',
      nome: 'Testosterona Total',
      unidade: 'ng/dL',
      alvoMin: 300,
      alvoMax: 900,
      alertaCritico: 2000,
    },
    {
      painel: 'Hormonal',
      nome: 'Estradiol (E2)',
      unidade: 'pg/mL',
      alvoMin: 10,
      alvoMax: 40,
      alertaCritico: 100,
    },
    {
      painel: 'Hepático',
      nome: 'ALT (TGP)',
      unidade: 'U/L',
      alvoMin: 0,
      alvoMax: 41,
      alertaCritico: 150,
    },
    {
      painel: 'Hepático',
      nome: 'AST (TGO)',
      unidade: 'U/L',
      alvoMin: 0,
      alvoMax: 40,
      alertaCritico: 150,
    },
    {
      painel: 'Lípides',
      nome: 'HDL',
      unidade: 'mg/dL',
      alvoMin: 40,
      alvoMax: 60,
      alertaCritico: 20,
    },
    {
      painel: 'Lípides',
      nome: 'LDL',
      unidade: 'mg/dL',
      alvoMin: 0,
      alvoMax: 130,
      alertaCritico: 190,
    },
  ])

  // 3. Plano Alimentar Sample
  await db.insert(planoAlimentar).values([
    {
      horario: '08:00',
      nome: 'Café da Manhã',
      caloriasAlvo: 600,
      protAlvo: 40,
      carbAlvo: 60,
      gordAlvo: 20,
      itens: { text: '4 ovos, 80g aveia, 1 banana' },
    },
    {
      horario: '12:00',
      nome: 'Almoço',
      caloriasAlvo: 800,
      protAlvo: 50,
      carbAlvo: 80,
      gordAlvo: 30,
      itens: { text: '200g frango, 250g arroz, salada à vontade' },
    },
    {
      horario: '16:00',
      nome: 'Lanche da Tarde',
      caloriasAlvo: 400,
      protAlvo: 30,
      carbAlvo: 40,
      gordAlvo: 10,
      itens: { text: '30g whey, 40g castanhas' },
    },
    {
      horario: '20:00',
      nome: 'Jantar',
      caloriasAlvo: 700,
      protAlvo: 50,
      carbAlvo: 60,
      gordAlvo: 20,
      itens: { text: '200g patinho, 200g batata doce' },
    },
  ])

  console.log('✅ Seeding completed!')
  process.exit(0)
}

main().catch((err) => {
  console.error('❌ Seeding failed:', err)
  process.exit(1)
})
