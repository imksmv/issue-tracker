"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Issue, Status } from "@prisma/client"
import axios from "axios"

const statusMap: { label: string; value: Status }[] = [
  { label: "Open", value: "OPEN" },
  { label: "In progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
]

const StatusSelect = ({ issue }: { issue: Issue }) => {
  const onStatusSelect = (status: string) => {
    axios.patch("/api/issues/" + issue.id, {
      status,
    })
  }

  return (
    <Select defaultValue={issue.status} onValueChange={onStatusSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Choose Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {statusMap.map((status) => (
            <SelectItem
              key={status.label}
              value={status.value}
              className="cursor-pointer"
            >
              {status.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default StatusSelect
