import IssueStatusBadge from "@/components/IssueStatusBadge"
import { TypographyH1 } from "@/components/TypographyH1"
import { TypographyP } from "@/components/TypographyP"
import { Card } from "@/components/ui/card"
import prisma from "@/prisma/client"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()

  return (
    <section className="container">
      <TypographyH1>{issue.title}</TypographyH1>
      <div className="flex space-x-2 py-2">
        <IssueStatusBadge status={issue.status} />
        <TypographyP>{issue.updatedAt.toDateString()}</TypographyP>
      </div>
      <Card className="prose dark:prose-invert p-5 mt-5">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </section>
  )
}

export default IssueDetailPage
