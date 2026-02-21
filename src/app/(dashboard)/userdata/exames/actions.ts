'use server'

import { db } from '@/lib/db'
import { examesRef, resultadosExames } from '@/lib/db/schema'
import { eq, desc, and } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const resultSchema = z.object({
  exameId: z.number(),
  dataColeta: z.string(),
  janela: z.string(),
  valor: z.number(),
  observacoes: z.string().optional(),
})

async function getAuthUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

export async function getExamesReferencia() {
  try {
    return await db.select().from(examesRef)
  } catch (error) {
    console.error('Error fetching exames reference:', error)
    return []
  }
}

export async function getResultadosRecentes() {
  const user = await getAuthUser()
  if (!user) return []

  try {
    return await db
      .select()
      .from(resultadosExames)
      .where(eq(resultadosExames.userId, user.id))
      .orderBy(desc(resultadosExames.dataColeta))
      .limit(20)
  } catch (error) {
    console.error('Error fetching recent results:', error)
    return []
  }
}

export async function registrarResultadoExame(rawData: z.infer<typeof resultSchema>) {
  const user = await getAuthUser()
  if (!user) return { success: false, error: 'Usuário não autenticado' }

  try {
    const data = resultSchema.parse(rawData)

    await db.insert(resultadosExames).values({
      ...data,
      userId: user.id,
    })

    revalidatePath('/userdata/exames')
    revalidatePath('/')

    return { success: true }
  } catch (error) {
    console.error('Error registering exam result:', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: 'Dados inválidos' }
    }
    return { success: false, error: 'Erro ao registrar resultado' }
  }
}
