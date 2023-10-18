import IssueStatusBadge from "@/components/IssueStatusBadge"
import { TypographyP } from "@/components/TypographyP"
import { Card } from "@/components/ui/card"
import { Issue } from "@prisma/client"
import ReactMarkdown from "react-markdown"

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {issue.title}
      </h1>
      <div className="flex space-x-2 py-2">
        <IssueStatusBadge status={issue.status} />
        <TypographyP>{issue.updatedAt.toDateString()}</TypographyP>
      </div>
      <Card className="prose max-w-full dark:prose-invert p-5 mt-5">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  )
}

export default IssueDetails
