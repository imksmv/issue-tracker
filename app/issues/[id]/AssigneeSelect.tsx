"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { Issue, User } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import ms from "ms"

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { toast } = useToast()

  const { data: users, error, isLoading } = useUsers()

  if (error) return null

  if (isLoading) return <Skeleton className="h-10 w-full" />

  const assignIssue = (userId: string) => {
    {
      /* Temporary solution */
    }
    axios
      .patch("/api/issues/" + issue.id, {
        assignedToUserId: userId === "null" ? null : userId,
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Changes could not be saved.",
        })
      })
  }

  return (
    <Select
      defaultValue={issue.assignedToUserId || ""}
      onValueChange={assignIssue}
    >
      <SelectTrigger>
        <SelectValue placeholder="Unassigned" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          {/* Temporary solution */}
          <SelectItem value="null">Unassigned</SelectItem>
          {users?.map((user) => (
            <SelectItem
              key={user.id}
              className="cursor-pointer"
              value={user.id}
            >
              {user.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    staleTime: ms("60s"),
    retry: 2,
  })

export default AssigneeSelect
