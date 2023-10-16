import { Button } from "@/components/ui/button"
import Link from "next/link"
import IssueStatusFilter from "./IssueStatusFilter"

const IssueActions = () => {
  return (
    <div className="flex justify-between mb-3">
      <IssueStatusFilter />
      <Link href="/issues/new">
        <Button>New Issue</Button>
      </Link>
    </div>
  )
}

export default IssueActions
