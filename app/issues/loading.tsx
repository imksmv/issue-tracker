import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import IssueActions from "./IssueActions"

const LoadingIssuePage = () => {
  const issues = [1, 2, 3, 4, 5, 6]

  return (
    <div className="container">
      <IssueActions />

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
            <TableRow key={issue}>
              <TableCell>
                <Skeleton className="h-5 w-[150px]" />
                <div className="block md:hidden mt-1">
                  <Skeleton className="h-5 w-[80px]" />
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-5 w-[150px]" />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton className="h-5 w-[150px]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LoadingIssuePage
