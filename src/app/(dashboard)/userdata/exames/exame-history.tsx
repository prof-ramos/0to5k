import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Resultado {
  id: number
  exameId: number | null
  dataColeta: string
  valor: number | null
  janela: string
}

interface ExameRef {
  id: number
  nome: string
  unidade: string | null
  alvoMin: number | null
  alvoMax: number | null
}

interface ExameHistoryProps {
  resultados: Resultado[]
  referencias: ExameRef[]
}

export function ExameHistory({ resultados, referencias }: ExameHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Histórico de Resultados</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resultados.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Nenhum resultado registrado.</p>
          ) : (
            resultados.map((res) => {
              const ref = referencias.find((r) => r.id === res.exameId)
              const valor = res.valor || 0
              const isLow = ref?.alvoMin && valor < ref.alvoMin
              const isHigh = ref?.alvoMax && valor > ref.alvoMax
              const status = isLow || isHigh ? 'Atenção' : 'OK'

              return (
                <div
                  key={res.id}
                  className="flex items-center justify-between p-4 rounded-xl border bg-muted/30"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{ref?.nome || 'Exame'}</span>
                      <Badge variant="outline" className="text-[10px]">
                        {res.janela}
                      </Badge>
                    </div>
                    <div className="text-xl font-bold">
                      {res.valor}{' '}
                      <span className="text-xs font-normal text-muted-foreground">
                        {ref?.unidade}
                      </span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      Ref: {ref?.alvoMin} - {ref?.alvoMax} {ref?.unidade}
                    </div>
                  </div>
                  <div className="text-right">
                    <time className="block text-xs font-medium uppercase text-muted-foreground mb-2">
                      {format(new Date(res.dataColeta), 'dd MMM yy', { locale: ptBR })}
                    </time>
                    <Badge
                      variant={status === 'OK' ? 'default' : 'destructive'}
                      className="text-[10px]"
                    >
                      {status}
                    </Badge>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </CardContent>
    </Card>
  )
}
