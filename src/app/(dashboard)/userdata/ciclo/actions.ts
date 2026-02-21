'use server'

import { db } from '@/lib/db'
import { aplicacoes, compostos } from '@/lib/db/schema'
import { eq, desc, and } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const aplicacaoSchema = z.object({
  compostoId: z.number(),
  dose: z.number(),
  data: z.string(),
  local: z.string(),
  observacoes: z.string().optional(),
})

async function getAuthUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function getCompostosAtivos() {
  const user = await getAuthUser()
  if (!user) return []

  try {
    return await db
      .select()
      .from(compostos)
      .where(and(eq(compostos.ativo, true), eq(compostos.userId, user.id)))
  } catch (error) {
    console.error('Error fetching compostos:', error)
    return []
  }
}

export async function getProximasAplicacoes() {
  const user = await getAuthUser()
  if (!user) return []

  try {
    return await db
      .select()
      .from(aplicacoes)
      .where(eq(aplicacoes.userId, user.id))
      .orderBy(desc(aplicacoes.data))
      .limit(10)
  } catch (error) {
    console.error('Error fetching applications:', error)
    return []
  }
}

export async function registrarAplicacao(rawData: z.infer<typeof aplicacaoSchema>) {
  const user = await getAuthUser()
  if (!user) return { success: false, error: 'Usuário não autenticado' }

  try {
    const data = aplicacaoSchema.parse(rawData)

    await db.insert(aplicacoes).values({
      ...data,
      userId: user.id,
      realizada: true,
    })

    revalidatePath('/userdata/ciclo')
    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Error registering application:', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Dados inválidos' }
    }
    return { success: false, error: 'Erro ao registrar aplicação' }
  }
}

export async function marcarComoRealizada(id: number) {
  const user = await getAuthUser()
  if (!user) return { success: false, error: 'Usuário não autenticado' }

  try {
    await db
      .update(aplicacoes)
      .set({ realizada: true })
      .where(and(eq(aplicacoes.id, id), eq(aplicacoes.userId, user.id)))

    revalidatePath('/userdata/ciclo')
    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Error updating application status:', error)
    return { success: false, error: 'Erro ao atualizar status' }
  }
}
