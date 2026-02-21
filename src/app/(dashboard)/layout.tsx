import Link from 'next/link'
import { cn } from '@/lib/utils'
import { AlertasList } from '@/components/dashboard/alertas-list'
import { getDashboardData } from '@/lib/services/dashboard'

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Ciclo', href: '/userdata/ciclo' },
  { name: 'Treino', href: '/userdata/treino' },
  { name: 'Nutrição', href: '/userdata/nutricao' },
  { name: 'Exames', href: '/userdata/exames' },
  { name: 'Alertas', href: '/alertas' },
]

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const data = await getDashboardData()
  const alertas = data?.alertas || []

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-card border-r hidden md:flex flex-col">
        <div className="p-8 border-b">
          <span className="font-bold text-2xl tracking-tighter text-primary">SGCP</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-4 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              G
            </div>
            <div className="text-xs">
              <p className="font-medium">Gabriel Ramos</p>
              <p className="text-muted-foreground">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-card border-b flex items-center justify-between px-8">
          <div className="md:hidden font-bold text-xl">SGCP</div>
          <div className="ml-auto flex items-center gap-4">
            <AlertasList alertas={alertas as any} />
            <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
              v3.3.0
            </span>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}
