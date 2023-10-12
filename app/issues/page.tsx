import { Button } from "@/components/ui/button"
import Link from "next/link"

const IssuesPage = () => {
  return (
    <section className="container">
      <Button asChild>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </section>
  )
}

export default IssuesPage
