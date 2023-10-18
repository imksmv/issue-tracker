import IssueStatusBadge from "@/components/IssueStatusBadge"
import Link from "@/components/Link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { fallbackInitials } from "@/lib/fallbackInitials"
import prisma from "@/prisma/client"
import { Card } from "@/components/ui/card"
import { TypographyH2 } from "@/components/TypographyH2"

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  })

  return (
    <Card>
      <TypographyH2 className="p-4">Latest Issues</TypographyH2>
      <Table>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2 items-start">
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </div>
                  {issue.assignedToUserId && (
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={issue.assignedToUser?.image!} />
                      <AvatarFallback>
                        {fallbackInitials(issue.assignedToUser?.name!)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default LatestIssues
