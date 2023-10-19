import prisma from "@/prisma/client"
import IssueSummary from "./IssueSummary"
import LatestIssues from "./LatestIssues"
import IssueChart from "./IssueChart"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues.",
}

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } })
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } })
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  })

  const props = { open, inProgress, closed }

  return (
    <section className="container">
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col gap-5">
          <IssueSummary {...props} />
          <IssueChart {...props} />
        </div>
        <LatestIssues />
      </div>
    </section>
  )
}

export const dynamic = "force-dynamic"
