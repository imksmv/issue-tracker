import IssueStatusBadge from "@/components/IssueStatusBadge"
import { TypographyH1 } from "@/components/TypographyH1"
import { TypographyP } from "@/components/TypographyP"
import { Card, CardDescription } from "@/components/ui/card"
import prisma from "@/prisma/client"
import { notFound } from "next/navigation"

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
      <Card>
        <CardDescription>{issue.description}</CardDescription>
      </Card>
    </section>
  )
}

export default IssueDetailPage
