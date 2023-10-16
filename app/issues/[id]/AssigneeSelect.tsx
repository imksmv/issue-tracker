import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const AssigneeSelect = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Assignee</SelectLabel>
          <SelectItem className="cursor-pointer" value="apple">
            Apple
          </SelectItem>
          <SelectItem className="cursor-pointer" value="banana">
            Banana
          </SelectItem>
          <SelectItem className="cursor-pointer" value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem className="cursor-pointer" value="grapes">
            Grapes
          </SelectItem>
          <SelectItem className="cursor-pointer" value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default AssigneeSelect
