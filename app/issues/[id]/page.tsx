import prisma from "@/prisma/client"
import { notFound } from "next/navigation"
import IssueDetails from "./IssueDetails"
import DeleteIssueButton from "./DeleteIssueButton"
import EditIssueButton from "./EditIssueButton"

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()

  return (
    <section className="container grid md:grid-cols-5 gap-5">
      <div className=" md:col-span-4">
        <IssueDetails issue={issue} />
      </div>
      <div className="flex flex-col gap-4">
        <EditIssueButton issueId={issue.id} />
        <DeleteIssueButton issueId={issue.id} />
      </div>
    </section>
  )
}

export default IssueDetailPage
