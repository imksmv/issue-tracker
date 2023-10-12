import { Status } from "@prisma/client"
import { Badge } from "./ui/badge"

const statusMap: Record<
  Status,
  { label: string; variant: "success" | "progress" | "destructive" }
> = {
  OPEN: { label: "Open", variant: "destructive" },
  IN_PROGRESS: { label: "In progress", variant: "progress" },
  CLOSED: { label: "Closed", variant: "success" },
}

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge variant={statusMap[status].variant}>{statusMap[status].label}</Badge>
  )
}

export default IssueStatusBadge
