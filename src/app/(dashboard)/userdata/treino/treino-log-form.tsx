'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { format } from 'date-fns'
import { CalendarIcon, Dumbbell } from 'lucide-react'
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
import { registrarTreino } from './actions'

const formSchema = z.object({
  data: z.date(),
  tipo: z.string().min(1, 'Informe o tipo de treino'),
  fase: z.string().optional(),
  duracao: z.string().optional(),
  pse: z.string().optional(),
  observacoes: z.string().optional(),
})

export function TreinoLogForm() {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      data: new Date(),
      tipo: 'Musculação (PPL)',
      fase: 'Hipertrofia',
      duracao: '60',
      pse: '8',
      observacoes: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await registrarTreino({
        data: format(values.data, 'yyyy-MM-dd'),
        tipo: values.tipo,
        fase: values.fase,
        duracao: values.duracao ? parseInt(values.duracao) : undefined,
        pse: values.pse ? parseInt(values.pse) : undefined,
        observacoes: values.observacoes,
      })

      if (result.success) {
        toast.success('Treino registrado!')
        setOpen(false)
        form.reset()
      } else {
        toast.error(result.error || 'Erro ao registrar treino.')
      }
    } catch (error) {
      toast.error('Erro de conexão ou sistema.')
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Dumbbell className="h-4 w-4" /> Log de Treino
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Registrar Treino Realizado</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-6">
            <FormField
              control={form.control}
              name="tipo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Treino</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Musculação (PPL)">Musculação (PPL)</SelectItem>
                      <SelectItem value="Corrida">Corrida</SelectItem>
                      <SelectItem value="Cárdio">Cárdio</SelectItem>
                      <SelectItem value="Mobilidade">Mobilidade</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="duracao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duração (min)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PSE (1-10)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="data"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data</FormLabel>
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

            <FormField
              control={form.control}
              name="observacoes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observações / PRs</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: PR no Supino 100kg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Salvar Treino
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
