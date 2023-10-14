import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const LoadingIssueDetailPage = () => {
  return (
    <div className="container">
      <Skeleton className="h-5 w-[170px] mb-5" />
      <div className="flex space-x-3">
        <Skeleton className="h-5 w-[70px]" />
        <Skeleton className="h-5 w-[200px]" />
      </div>
      <Card className="prose dark:prose-invert p-5 mt-5 space-y-3">
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
      </Card>
    </div>
  )
}

export default LoadingIssueDetailPage
