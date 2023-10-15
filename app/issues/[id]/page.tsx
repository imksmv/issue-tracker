import IssueStatusBadge from "@/components/IssueStatusBadge"
import { TypographyH1 } from "@/components/TypographyH1"
import { TypographyP } from "@/components/TypographyP"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import prisma from "@/prisma/client"
import { PenSquare } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()

  return (
    <section className="container grid md:grid-cols-2 gap-5">
      <div>
        <TypographyH1>{issue.title}</TypographyH1>
        <div className="flex space-x-2 py-2">
          <IssueStatusBadge status={issue.status} />
          <TypographyP>{issue.updatedAt.toDateString()}</TypographyP>
        </div>
        <Card className="prose dark:prose-invert p-5 mt-5">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </div>
      <div>
        <Button asChild>
          <Link href={`/issues/${issue.id}/edit`}>
            <PenSquare className="mr-2 h-4 w-4" /> Edit Issue
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default IssueDetailPage
