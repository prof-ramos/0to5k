import { cache } from 'react'
import { db } from '@/lib/db'
import { perfil, aplicacoes, treinos, refeicoes, examesRef, alertas } from '@/lib/db/schema'
import { eq, and, gte, lte } from 'drizzle-orm'
import { createClient } from '@/lib/supabase/server'

/**
 * Service para buscar dados do dashboard em paralelo e com cache por request.
 */

export const getDashboardData = cache(async () => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const userId = user.id

  // Datas para filtro semanal (mock ou dinâmico)
  const hoje = new Date()
  const inicioSemana = new Date(hoje.setDate(hoje.getDate() - hoje.getDay()))
  const fimSemana = new Date(hoje.setDate(hoje.getDate() + 6))

  const [userPerfil, proximasAplicacoes, treinosSemana, refeicoesAderencia, alertasAtivos] =
    await Promise.all([
      db.select().from(perfil).where(eq(perfil.userId, userId)).limit(1),
      db.select().from(aplicacoes).where(eq(aplicacoes.userId, userId)).limit(5),
      db.select().from(treinos).where(eq(treinos.userId, userId)).limit(7),
      db.select().from(refeicoes).where(eq(refeicoes.userId, userId)).limit(7),
      db
        .select()
        .from(alertas)
        .where(and(eq(alertas.userId, userId), eq(alertas.resolvido, false))),
    ])

  return {
    perfil: userPerfil[0],
    aplicacoes: proximasAplicacoes,
    treinos: treinosSemana,
    refeicoes: refeicoesAderencia,
    alertas: alertasAtivos,
  }
})
