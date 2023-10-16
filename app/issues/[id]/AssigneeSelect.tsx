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
import { User } from "@prisma/client"
import axios from "axios"
import { useEffect, useState } from "react"

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users/")
      setUsers(data)
    }
    fetchUsers()
  }, [])

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          {users.map((user) => (
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

export default AssigneeSelect
