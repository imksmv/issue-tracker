"use client"

import { Card } from "@/components/ui/card"
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar } from "recharts"

interface Props {
  open: number
  inProgress: number
  closed: number
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: "Open", value: open },
    { label: "In Progress", value: inProgress },
    { label: "Closed", value: closed },
  ]

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis padding={{ bottom: 1 }} />
          <Bar dataKey="value" barSize={60} className="fill-progress" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default IssueChart
