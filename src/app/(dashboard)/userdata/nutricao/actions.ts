'use server'

import { db } from '@/lib/db'
import { planoAlimentar, refeicoes } from '@/lib/db/schema'
import { eq, desc, and } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const aderenciaSchema = z.object({
  data: z.string(),
  planoId: z.number(),
  aderencia: z.enum(['Sim', 'Não', 'Parcial']),
  caloriasReal: z.number().optional(),
  observacoes: z.string().optional(),
})

async function getAuthUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function getPlanoAlimentar() {
  // O plano alimentar pode ser global ou específico do usuário.
  // Por enquanto, assumimos global (referência), mas se for do usuário, precisa de userId.
  try {
    return await db.select().from(planoAlimentar)
  } catch (error) {
    console.error('Error fetching plano alimentar:', error)
    return []
  }
}

export async function getHistoricoRefeicoes() {
  const user = await getAuthUser()
  if (!user) return []

  try {
    return await db
      .select()
      .from(refeicoes)
      .where(eq(refeicoes.userId, user.id))
      .orderBy(desc(refeicoes.data))
      .limit(10)
  } catch (error) {
    console.error('Error fetching refeicoes:', error)
    return []
  }
}

export async function registrarAderenciaRefeicao(rawData: z.infer<typeof aderenciaSchema>) {
  const user = await getAuthUser()
  if (!user) return { success: false, error: 'Usuário não autenticado' }

  try {
    const data = aderenciaSchema.parse(rawData)

    await db.insert(refeicoes).values({
      ...data,
      userId: user.id,
    })

    revalidatePath('/userdata/nutricao')
    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Error registering aderência:', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Dados inválidos' }
    }
    return { success: false, error: 'Erro ao registrar aderência' }
  }
}
