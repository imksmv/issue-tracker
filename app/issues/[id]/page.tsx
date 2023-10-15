import prisma from "@/prisma/client"
import { notFound } from "next/navigation"
import IssueDetails from "./IssueDetails"
import IssueEditButton from "./IssueEditButton"

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()

  return (
    <section className="container grid md:grid-cols-2 gap-5">
      <div>
        <IssueDetails issue={issue} />
      </div>
      <div>
        <IssueEditButton issueId={issue.id} />
      </div>
    </section>
  )
}

export default IssueDetailPage
