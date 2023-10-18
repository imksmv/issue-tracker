"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

interface Props {
  open: number
  inProgress: number
  closed: number
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: "Open", Count: open },
    { label: "In Progress", Count: inProgress },
    { label: "Closed", Count: closed },
  ]

  return (
    <ResponsiveContainer width="100%" minHeight={300} height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="label" />
        <Tooltip
          cursor={{ fill: "hsl(var(--muted))" }}
          itemStyle={{
            color: "hsl(var(--foreground))",
          }}
          labelStyle={{ color: "hsl(var(--muted-foreground))" }}
          contentStyle={{
            background: "hsl(var(--background))",
            borderRadius: "10px",
            borderStyle: "none",
          }}
        />

        <Bar barSize={60} dataKey="Count" className="fill-progress" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default IssueChart
