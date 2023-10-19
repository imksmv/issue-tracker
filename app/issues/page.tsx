import Pagination from "@/components/Pagination"
import prisma from "@/prisma/client"
import { Prisma, Status } from "@prisma/client"
import IssueActions from "./IssueActions"
import IssueTable, { IssueQuery, columnNames } from "./IssueTable"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Issue Tracker - Issues",
  description: "View all project issues.",
}

interface Props {
  searchParams: IssueQuery
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined

  const where = { status }

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : { createdAt: Prisma.SortOrder.desc }

  const page = parseInt(searchParams.page) || 1
  const pageSize = 10

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  const issueCount = await prisma.issue.count({ where })

  return (
    <section className="container">
      <IssueActions />

      <div className="flex justify-end">
        <Pagination
          itemCount={issueCount}
          currentPage={page}
          pageSize={pageSize}
        />
      </div>

      <IssueTable searchParams={searchParams} issues={issues} />
    </section>
  )
}

export const dynamic = "force-dynamic"

export default IssuesPage
