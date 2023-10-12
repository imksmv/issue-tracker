import IssueStatusBadge from "@/components/IssueStatusBadge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import prisma from "@/prisma/client"
import Link from "next/link"

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany()

  return (
    <section className="container">
      <Button className="mb-3" asChild>
        <Link href="/issues/new">New Issue</Link>
      </Button>

      <Table className="mb-3">
        <TableCaption>A list of your recent issues.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Issue</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell className="font-medium">
                {issue.title}
                <div className="block md:hidden mt-1">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}

export default IssuesPage
