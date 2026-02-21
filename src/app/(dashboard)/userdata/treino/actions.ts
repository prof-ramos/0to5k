'use server'

import { db } from '@/lib/db'
import { treinos } from '@/lib/db/schema'
import { eq, desc, and } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const treinoSchema = z.object({
  data: z.string(),
  tipo: z.string(),
  fase: z.string().optional(),
  duracao: z.number().optional(),
  pse: z.number().optional(),
  concluido: z.boolean().optional(),
  prs: z.any().optional(),
  observacoes: z.string().optional(),
})

async function getAuthUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function getHistoricoTreinos() {
  const user = await getAuthUser()
  if (!user) return []

  try {
    return await db
      .select()
      .from(treinos)
      .where(eq(treinos.userId, user.id))
      .orderBy(desc(treinos.data))
      .limit(20)
  } catch (error) {
    console.error('Error fetching treinos:', error)
    return []
  }
}

export async function registrarTreino(rawData: z.infer<typeof treinoSchema>) {
  const user = await getAuthUser()
  if (!user) return { success: false, error: 'Usuário não autenticado' }

  try {
    const data = treinoSchema.parse(rawData)

    await db.insert(treinos).values({
      ...data,
      userId: user.id,
      concluido: data.concluido ?? true,
    })

    revalidatePath('/userdata/treino')
    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Error registering treino:', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Dados inválidos' }
    }
    return { success: false, error: 'Erro ao registrar treino' }
  }
}
