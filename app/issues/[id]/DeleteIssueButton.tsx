import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button variant="destructive">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Issue
    </Button>
  )
}

export default DeleteIssueButton
