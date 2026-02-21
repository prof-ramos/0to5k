import { Suspense } from 'react'
import { getPlanoAlimentar, getHistoricoRefeicoes } from './actions'
import { PlanoAlimentarView } from './plano-view'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

async function NutricaoContent() {
  const [plano, historico] = await Promise.all([getPlanoAlimentar(), getHistoricoRefeicoes()])

  // Cálculo básico de macros do plano (mock para exibição)
  const totais = plano.reduce(
    (acc, curr) => ({
      kcal: acc.kcal + (curr.caloriasAlvo || 0),
      prot: acc.prot + (curr.protAlvo || 0),
      carb: acc.carb + (curr.carbAlvo || 0),
      gord: acc.gord + (curr.gordAlvo || 0),
    }),
    { kcal: 0, prot: 0, carb: 0, gord: 0 }
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Refeições do Dia</h2>
        </div>
        <PlanoAlimentarView plano={plano} />
      </div>

      <div className="lg:col-span-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Macros Alvo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Proteína</span>
              <span className="font-bold">{totais.prot}g</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-[80%]"></div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Carboidrato</span>
              <span className="font-bold">{totais.carb}g</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[60%]"></div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Gordura</span>
              <span className="font-bold">{totais.gord}g</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full w-[40%]"></div>
            </div>

            <div className="pt-4 border-t flex justify-between items-center">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-bold text-lg text-primary">{totais.kcal} kcal</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aderência da Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-lg text-muted-foreground text-xs italic text-center px-4">
              O gráfico de progresso será exibido conforme você registrar as refeições.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function NutricaoPage() {
  return (
    <main className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Módulo Nutrição</h1>
        <p className="text-muted-foreground">Acompanhamento de dieta e metas de macros.</p>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Skeleton className="lg:col-span-8 h-[600px]" />
            <Skeleton className="lg:col-span-4 h-[400px]" />
          </div>
        }
      >
        <NutricaoContent />
      </Suspense>
    </main>
  )
}
