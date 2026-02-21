import { sql } from 'drizzle-orm'
import {
  pgTable,
  serial,
  text,
  real,
  integer,
  boolean,
  timestamp,
  jsonb,
  date,
} from 'drizzle-orm/pg-core'

// ─────────────────────────────────────────
// PERFIL
// ─────────────────────────────────────────
export const perfil = pgTable('perfil', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(), // Supabase Auth UID
  peso: real('peso'),
  altura: real('altura'),
  idade: integer('idade'),
  pesoAlvo: real('peso_alvo'),
  atualizadoEm: timestamp('atualizado_em').defaultNow(),
})

// ─────────────────────────────────────────
// PROTOCOLO HORMONAL
// ─────────────────────────────────────────
export const compostos = pgTable('compostos', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  nome: text('nome').notNull(),
  doseSemanal: real('dose_semanal'),
  doseAplicacao: real('dose_aplicacao'),
  frequencia: integer('frequencia'),
  diasAplicacao: text('dias_aplicacao'),
  meiaVida: text('meia_vida'),
  ativo: boolean('ativo').default(true),
})

export const aplicacoes = pgTable('aplicacoes', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  data: date('data').notNull(),
  compostoId: integer('composto_id').references(() => compostos.id),
  dose: real('dose').notNull(),
  local: text('local').notNull(),
  realizada: boolean('realizada').default(false),
  observacoes: text('observacoes'),
  criadoEm: timestamp('criado_em').defaultNow(),
})

// ─────────────────────────────────────────
// TREINOS
// ─────────────────────────────────────────
export const treinos = pgTable('treinos', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  data: date('data').notNull(),
  tipo: text('tipo').notNull(),
  fase: text('fase'),
  duracao: integer('duracao'),
  pse: integer('pse'),
  concluido: boolean('concluido').default(false),
  prs: jsonb('prs'),
  observacoes: text('observacoes'),
  criadoEm: timestamp('criado_em').defaultNow(),
})

// ─────────────────────────────────────────
// NUTRIÇÃO
// ─────────────────────────────────────────
export const planoAlimentar = pgTable('plano_alimentar', {
  id: serial('id').primaryKey(),
  horario: text('horario').notNull(),
  nome: text('nome').notNull(),
  caloriasAlvo: real('calorias_alvo'),
  protAlvo: real('prot_alvo'),
  carbAlvo: real('carb_alvo'),
  gordAlvo: real('gord_alvo'),
  itens: jsonb('itens'),
})

export const refeicoes = pgTable('refeicoes', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  data: date('data').notNull(),
  planoId: integer('plano_id').references(() => planoAlimentar.id),
  aderencia: text('aderencia'),
  caloriasReal: real('calorias_real'),
  observacoes: text('observacoes'),
  criadoEm: timestamp('criado_em').defaultNow(),
})

// ─────────────────────────────────────────
// EXAMES
// ─────────────────────────────────────────
export const examesRef = pgTable('exames_ref', {
  id: serial('id').primaryKey(),
  painel: text('painel').notNull(),
  nome: text('nome').notNull(),
  unidade: text('unidade'),
  alvoMin: real('alvo_min'),
  alvoMax: real('alvo_max'),
  alertaCritico: real('alerta_critico'),
  janelas: text('janelas'),
})

export const resultadosExames = pgTable('resultados_exames', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  exameId: integer('exame_id').references(() => examesRef.id),
  dataColeta: date('data_coleta').notNull(),
  janela: text('janela').notNull(),
  valor: real('valor'),
  observacoes: text('observacoes'),
  criadoEm: timestamp('criado_em').defaultNow(),
})

// ─────────────────────────────────────────
// ALERTAS
// ─────────────────────────────────────────
export const alertas = pgTable('alertas', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  tipo: text('tipo').notNull(),
  categoria: text('categoria'),
  mensagem: text('mensagem').notNull(),
  resolvido: boolean('resolvido').default(false),
  criadoEm: timestamp('criado_em').defaultNow(),
})
