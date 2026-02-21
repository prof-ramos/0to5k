import { Suspense } from 'react'
import { getCompostosAtivos, getProximasAplicacoes } from './actions'
import { AplicacaoForm } from './aplicacao-form'
import { TimelineAplicacoes } from './timeline-aplicacoes'
import { RodizioVisual } from './rodizio-visual'
import { Skeleton } from '@/components/ui/skeleton'

async function CicloContent() {
  const [compostos, aplicacoes] = await Promise.all([getCompostosAtivos(), getProximasAplicacoes()])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4 space-y-6">
        <RodizioVisual ultimaAplicacaoLocal={aplicacoes[0]?.local} />

        <div className="bg-card p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Ação Rápida</h2>
          <AplicacaoForm compostos={compostos} />
        </div>

        <div className="bg-card p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Protocolo Ativo</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Lista de compostos em uso no ciclo atual.
          </p>
          <div className="space-y-3">
            {compostos.map((c) => (
              <div
                key={c.id}
                className="flex justify-between items-center p-3 rounded-lg bg-muted/50 border"
              >
                <span className="font-medium">{c.nome}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {c.doseSemanal}mg/sem
                </span>
              </div>
            ))}
            {compostos.length === 0 && (
              <p className="text-xs italic text-muted-foreground">Nenhum protocolo ativo.</p>
            )}
          </div>
        </div>
      </div>

      <div className="lg:col-span-8">
        <TimelineAplicacoes aplicacoes={aplicacoes} />
      </div>
    </div>
  )
}

export default function CicloPage() {
  return (
    <main className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Módulo Ciclo Hormonal</h1>
        <p className="text-muted-foreground">Gerenciamento de aplicações, rodízio e histórico.</p>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Skeleton className="lg:col-span-4 h-[400px]" />
            <Skeleton className="lg:col-span-8 h-[600px]" />
          </div>
        }
      >
        <CicloContent />
      </Suspense>
    </main>
  )
}
