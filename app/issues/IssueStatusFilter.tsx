"use client"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Status } from "@prisma/client"
import { useRouter } from "next/navigation"

const statusMap: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
]

const IssueStatusFilter = () => {
  const router = useRouter()

  return (
    // Temporary solution
    <Select
      onValueChange={(status) => {
        const query = status === " " ? "" : `?status=${status}`
        router.push("/issues/" + query)
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by" />
      </SelectTrigger>
      <SelectContent>
        {/* Temporary solution */}
        {statusMap.map((status, index) => (
          <SelectItem key={index} value={status.value || " "}>
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default IssueStatusFilter
