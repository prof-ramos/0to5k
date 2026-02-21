import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Treino {
  id: number
  data: string
  tipo: string
  fase: string | null
  duracao: number | null
  pse: number | null
  concluido: boolean | null
  observacoes: string | null
}

interface TreinoListProps {
  treinos: Treino[]
}

export function TreinoList({ treinos }: TreinoListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico de Treinos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {treinos.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Nenhum treino registrado.</p>
          ) : (
            treinos.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between p-4 rounded-xl border bg-muted/30"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{t.tipo}</span>
                    <Badge variant="outline" className="text-[10px]">
                      {t.fase || 'Treino'}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{t.duracao} min</span>
                    <span>PSE: {t.pse}/10</span>
                  </div>
                  {t.observacoes && (
                    <p className="text-xs italic mt-1 font-mono text-primary/80">
                      "{t.observacoes}"
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <time className="block text-xs font-medium uppercase text-muted-foreground mb-1">
                    {format(new Date(t.data), 'dd MMM', { locale: ptBR })}
                  </time>
                  <Badge variant={t.concluido ? 'default' : 'secondary'}>
                    {t.concluido ? 'Concluído' : 'Pendente'}
                  </Badge>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
