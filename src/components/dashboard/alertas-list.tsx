'use client'

import { Bell, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'

interface Alerta {
  id: number
  tipo: string
  mensagem: string
  prioridade: string
  resolvido: boolean
}

interface AlertasListProps {
  alertas: Alerta[]
}

export function AlertasList({ alertas }: AlertasListProps) {
  const ativos = alertas.filter((a) => !a.resolvido)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 rounded-full hover:bg-accent transition-colors">
          <Bell className="h-5 w-5 text-muted-foreground" />
          {ativos.length > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
              {ativos.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Centro de Notificações</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {alertas.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <CheckCircle2 className="h-12 w-12 mb-2 opacity-20" />
              <p className="text-sm">Tudo em dia por aqui!</p>
            </div>
          ) : (
            alertas.map((a) => (
              <div
                key={a.id}
                className={`p-4 rounded-xl border ${a.prioridade === 'Alta' ? 'bg-destructive/5 border-destructive/20' : 'bg-muted/50 border-border'}`}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className={`h-4 w-4 mt-1 ${a.prioridade === 'Alta' ? 'text-destructive' : 'text-yellow-600'}`}
                  />
                  <div>
                    <p className="text-sm font-semibold">{a.tipo}</p>
                    <p className="text-xs text-muted-foreground mt-1">{a.mensagem}</p>
                    <Badge
                      variant="outline"
                      className="mt-2 text-[10px] uppercase tracking-tighter"
                    >
                      {a.prioridade}
                    </Badge>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
