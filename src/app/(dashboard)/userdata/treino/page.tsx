import { Suspense } from 'react'
import { getHistoricoTreinos } from './actions'
import { TreinoLogForm } from './treino-log-form'
import { TreinoList } from './treino-list'
import { Skeleton } from '@/components/ui/skeleton'

async function TreinoContent() {
  const treinos = await getHistoricoTreinos()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-card p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Ação Rápida</h2>
          <TreinoLogForm />
        </div>

        <div className="bg-card p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Resumo de Carga</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Média de esforço percebido (PSE) nos últimos 7 dias.
          </p>
          <div className="h-32 flex items-center justify-center border-2 border-dashed rounded-lg text-muted-foreground text-xs italic">
            Gráfico de PSE em breve
          </div>
        </div>
      </div>

      <div className="lg:col-span-8">
        <TreinoList treinos={treinos} />
      </div>
    </div>
  )
}

export default function TreinoPage() {
  return (
    <main className="p-8">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Treino & Corrida</h1>
          <p className="text-muted-foreground">Log de musculação, Cárdio e recordes pessoais.</p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Skeleton className="lg:col-span-4 h-[400px]" />
            <Skeleton className="lg:col-span-8 h-[600px]" />
          </div>
        }
      >
        <TreinoContent />
      </Suspense>
    </main>
  )
}
