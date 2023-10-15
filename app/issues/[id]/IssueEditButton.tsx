import { Button } from "@/components/ui/button"
import { PenSquare } from "lucide-react"
import Link from "next/link"

const IssueEditButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button asChild>
      <Link href={`/issues/${issueId}/edit`}>
        <PenSquare className="mr-2 h-4 w-4" /> Edit Issue
      </Link>
    </Button>
  )
}

export default IssueEditButton
