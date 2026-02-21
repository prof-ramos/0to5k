import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Aplicacao {
  id: number
  data: string
  compostoId: number | null
  dose: number
  local: string
  realizada: boolean | null
  observacoes: string | null
}

interface TimelineAplicacoesProps {
  aplicacoes: Aplicacao[]
}

export function TimelineAplicacoes({ aplicacoes }: TimelineAplicacoesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico de Aplicações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {aplicacoes.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Nenhuma aplicação registrada.</p>
          ) : (
            aplicacoes.map((ap) => (
              <div
                key={ap.id}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-border last:before:h-8"
              >
                <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-primary" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                      Dose de {ap.dose}mg — {ap.local}
                    </p>
                    <time className="text-xs text-muted-foreground uppercase">
                      {format(new Date(ap.data), "dd 'de' MMMM", { locale: ptBR })}
                    </time>
                  </div>
                  {ap.observacoes && (
                    <p className="text-xs text-muted-foreground italic">"{ap.observacoes}"</p>
                  )}
                  <div className="mt-1">
                    <Badge
                      variant={ap.realizada ? 'default' : 'secondary'}
                      className="text-[10px] px-2 py-0"
                    >
                      {ap.realizada ? 'Realizada' : 'Pendente'}
                    </Badge>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
