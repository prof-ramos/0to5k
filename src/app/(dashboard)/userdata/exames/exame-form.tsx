'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { format } from 'date-fns'
import { CalendarIcon, ClipboardList } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { toast } from 'sonner'
import { registrarResultadoExame } from './actions'

const formSchema = z.object({
  exameId: z.string().min(1, 'Selecione o marcador'),
  dataColeta: z.date(),
  valor: z.string().min(1, 'Informe o valor'),
  janela: z.string().min(1, 'Informe a janela (Ex: Pré-ciclo)'),
  observacoes: z.string().optional(),
})

interface ExameFormProps {
  examesRef: { id: number; nome: string }[]
}

export function ExameResultForm({ examesRef }: ExameFormProps) {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dataColeta: new Date(),
      janela: 'Pós-ciclo',
      observacoes: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await registrarResultadoExame({
        exameId: parseInt(values.exameId),
        valor: parseFloat(values.valor),
        dataColeta: format(values.dataColeta, 'yyyy-MM-dd'),
        janela: values.janela,
        observacoes: values.observacoes,
      })

      if (result.success) {
        toast.success('Resultado registrado!')
        setOpen(false)
        form.reset()
      } else {
        toast.error(result.error || 'Erro ao registrar resultado.')
      }
    } catch (error) {
      toast.error('Erro de conexão ou sistema.')
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <ClipboardList className="h-4 w-4" /> Registrar Resultado
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Lançar Resultado de Exame</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-6">
            <FormField
              control={form.control}
              name="exameId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marcador / Exame</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o marcador" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {examesRef.map((e) => (
                        <SelectItem key={e.id} value={e.id.toString()}>
                          {e.nome}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="valor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor Encontrado</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="janela"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Janela</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Cruise" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="dataColeta"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data da Coleta</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Selecione uma data</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Salvar Resultado
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
