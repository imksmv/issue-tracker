import { Button } from "@/components/ui/button"
import Link from "next/link"

const IssuesPage = () => {
  return (
    <Button asChild>
      <Link href="/issues/new">New Issue</Link>
    </Button>
  )
}

export default IssuesPage
