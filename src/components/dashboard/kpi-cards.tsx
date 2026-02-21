'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const data = [
  { name: 'Seg', total: 95 },
  { name: 'Ter', total: 88 },
  { name: 'Qua', total: 100 },
  { name: 'Qui', total: 92 },
  { name: 'Sex', total: 75 },
  { name: 'Sáb', total: 85 },
  { name: 'Dom', total: 98 },
]

export function DashboardCharts() {
  return (
    <Card className="col-span-full xl:col-span-4">
      <CardHeader>
        <CardTitle>Aderência Semanal</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ChartContainer
          config={{
            total: {
              label: 'Aderência',
              color: 'hsl(var(--primary))',
            },
          }}
          className="h-[200px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="total" fill="var(--color-total)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
