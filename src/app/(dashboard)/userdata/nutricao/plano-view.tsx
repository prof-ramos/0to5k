'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { registrarAderenciaRefeicao } from './actions'
import { format } from 'date-fns'

interface ItemPlano {
  id: number
  horario: string
  nome: string
  caloriasAlvo: number | null
  protAlvo: number | null
  carbAlvo: number | null
  gordAlvo: number | null
  itens: any
}

interface PlanoAlimentarViewProps {
  plano: ItemPlano[]
}

export function PlanoAlimentarView({ plano }: PlanoAlimentarViewProps) {
  async function handleAderencia(planoId: number, aderencia: 'Sim' | 'Não') {
    try {
      const result = await registrarAderenciaRefeicao({
        data: format(new Date(), 'yyyy-MM-dd'),
        planoId,
        aderencia,
      })
      if (result.success) {
        toast.success('Marcação realizada!')
      } else {
        toast.error(result.error || 'Erro ao marcar aderência.')
      }
    } catch (error) {
      toast.error('Erro de conexão ou sistema.')
    }
  }

  return (
    <div className="space-y-4">
      {plano.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-32 bg-muted/50 p-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r">
              <span className="text-lg font-bold">{item.horario}</span>
            </div>
            <div className="flex-1 p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{item.nome}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">P: {item.protAlvo}g</Badge>
                    <Badge variant="secondary">C: {item.carbAlvo}g</Badge>
                    <Badge variant="secondary">G: {item.gordAlvo}g</Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {item.caloriasAlvo} kcal
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-green-600 border-green-200 hover:bg-green-50"
                    onClick={() => handleAderencia(item.id, 'Sim')}
                  >
                    Fiz tudo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => handleAderencia(item.id, 'Não')}
                  >
                    Falhei
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
      {plano.length === 0 && (
        <div className="p-12 text-center border-2 border-dashed rounded-xl">
          <p className="text-muted-foreground italic">Nenhum plano alimentar configurado.</p>
        </div>
      )}
    </div>
  )
}
