import { TypographyP } from "@/components/TypographyP"
import { Card } from "@/components/ui/card"
import { Status } from "@prisma/client"
import Link from "next/link"

interface Props {
  open: number
  inProgress: number
  closed: number
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ]

  return (
    <div className="flex gap-4">
      {containers.map((container) => (
        <Link
          key={container.label}
          href={`/issues/?status=${container.status}`}
        >
          <Card className="hover:shadow-lg hover:scale-105 transition-all">
            <div className="flex flex-col gap-2 p-3">
              {container.label}
              <TypographyP className="text-2xl font-bold">
                {container.value}
              </TypographyP>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default IssueSummary
