import IssueStatusBadge from "@/components/IssueStatusBadge"
import Link from "@/components/Link"
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
import { Issue, Status } from "@prisma/client"
import { ArrowDownWideNarrow } from "lucide-react"
import NextLink from "next/link"
import IssueActions from "./IssueActions"

interface Props {
  searchParams: { status: Status; orderBy: keyof Issue }
}

const IssuesPage = async ({ searchParams }: Props) => {
  const columns: { label: string; value: keyof Issue; className?: string }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
  ]

  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined
  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
  })

  return (
    <section className="container">
      <IssueActions />

      <Table className="mb-3">
        <TableCaption>A list of your recent issues.</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.value} className={column.className}>
                <div className="flex items-center gap-1 w-24">
                  <NextLink
                    href={{
                      query: { ...searchParams, orderBy: column.value },
                    }}
                  >
                    {column.label}
                  </NextLink>
                  {column.value === searchParams.orderBy && (
                    <ArrowDownWideNarrow size={14} />
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell className="font-medium">
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
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

export const dynamic = "force-dynamic"

export default IssuesPage
