import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const LOCAIS_PADRAO = [
  'Glúteo Direito',
  'Glúteo Esquerdo',
  'Vasto Lateral D',
  'Vasto Lateral E',
  'Deltoide Direito',
  'Deltoide Esquerdo',
]

interface RodizioVisualProps {
  ultimaAplicacaoLocal?: string
}

export function RodizioVisual({ ultimaAplicacaoLocal }: RodizioVisualProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Sugestão de Rodízio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {LOCAIS_PADRAO.map((local) => {
            const isUltimo = local
              .toLowerCase()
              .includes(ultimaAplicacaoLocal?.toLowerCase() || 'none')
            return (
              <div
                key={local}
                className={`p-2 rounded-lg border text-center text-xs transition-colors ${
                  isUltimo
                    ? 'bg-destructive/10 border-destructive/50 text-destructive font-bold'
                    : 'bg-muted/50 border-input'
                }`}
              >
                {local}
                {isUltimo && (
                  <p className="mt-1 text-[8px] uppercase tracking-tighter">Evitar agora</p>
                )}
              </div>
            )
          })}
        </div>
        <p className="mt-4 text-[10px] text-muted-foreground italic text-center">
          * Alterne sempre o local para evitar fibrose.
        </p>
      </CardContent>
    </Card>
  )
}
