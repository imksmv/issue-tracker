import { Button } from "@/components/ui/button"
import Link from "next/link"

const IssueActions = () => {
  return (
    <Link href="/issues/new">
      <Button className="mb-3">New Issue</Button>
    </Link>
  )
}

export default IssueActions
