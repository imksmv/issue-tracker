import { Button } from "@/components/ui/button"
import Link from "next/link"

const IssueActions = () => {
  return (
    <Button className="mb-3" asChild>
      <Link href="/issues/new">New Issue</Link>
    </Button>
  )
}

export default IssueActions
