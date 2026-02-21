import { Suspense } from 'react'
import { getExamesReferencia, getResultadosRecentes } from './actions'
import { ExameResultForm } from './exame-form'
import { ExameHistory } from './exame-history'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

async function ExamesContent() {
  const [referencias, resultados] = await Promise.all([
    getExamesReferencia(),
    getResultadosRecentes(),
  ])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-card p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Ação Rápida</h2>
          <ExameResultForm examesRef={referencias} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Resumo Clínico</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900">
              <p className="text-xs font-semibold text-green-700 dark:text-green-400">
                STATUS GERAL: ESTÁVEL
              </p>
              <p className="text-[10px] text-green-600 dark:text-green-500 mt-1">
                Nenhum marcador crítico detectado nos últimos exames.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-bold text-muted-foreground uppercase">
                Próximos Exames Sugeridos
              </p>
              <div className="text-xs space-y-1">
                <p>• Perfil Lipídico (daqui a 4 semanas)</p>
                <p>• Transaminases (TGO/TGP)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-8">
        <ExameHistory resultados={resultados} referencias={referencias} />
      </div>
    </div>
  )
}

export default function ExamesPage() {
  return (
    <main className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Módulo de Exames</h1>
        <p className="text-muted-foreground">
          Monitoramento clínico e histórico de marcadores laboratoriais.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Skeleton className="lg:col-span-4 h-[400px]" />
            <Skeleton className="lg:col-span-8 h-[600px]" />
          </div>
        }
      >
        <ExamesContent />
      </Suspense>
    </main>
  )
}
