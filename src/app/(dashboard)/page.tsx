import { Suspense } from 'react'
import { getDashboardData } from '@/lib/services/dashboard'
import { Skeleton } from '@/components/ui/skeleton'
import { DashboardCharts } from '@/components/dashboard/kpi-cards'

// --- Server Components Async Independentes ---

async function KPICardsSection() {
  const data = await getDashboardData()
  if (!data) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="p-6 bg-card rounded-xl border shadow-sm">
        <p className="text-sm text-muted-foreground">Aderência Dieta</p>
        <p className="text-2xl font-bold">95%</p>
      </div>
      <div className="p-6 bg-card rounded-xl border shadow-sm">
        <p className="text-sm text-muted-foreground">Treinos Concluídos</p>
        <p className="text-2xl font-bold">{data.treinos.length}/5</p>
      </div>
      <div className="p-6 bg-card rounded-xl border shadow-sm">
        <p className="text-sm text-muted-foreground">Alertas Ativos</p>
        <p className="text-2xl font-bold">{data.alertas.length}</p>
      </div>
    </div>
  )
}

async function AgendaSection() {
  const data = await getDashboardData()
  if (!data) return null

  return (
    <div className="bg-card rounded-xl border shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4 text-foreground">Agenda da Semana</h2>
      <div className="grid grid-cols-7 gap-4">
        {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day) => (
          <div key={day} className="text-center p-4 rounded-lg bg-muted/50 border">
            <p className="font-medium text-muted-foreground mb-2">{day}</p>
            <div className="h-20 flex items-center justify-center text-xs text-muted-foreground italic">
              Sem registros
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Semanal</h1>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-3 gap-6 mb-8">
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
        }
      >
        <KPICardsSection />
      </Suspense>

      <Suspense fallback={<Skeleton className="h-[250px]" />}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <DashboardCharts />
          <div className="lg:col-span-8">
            <AgendaSection />
          </div>
        </div>
      </Suspense>
    </main>
  )
}
