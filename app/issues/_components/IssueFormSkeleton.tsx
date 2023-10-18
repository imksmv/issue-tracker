import { Skeleton } from "@/components/ui/skeleton"

const IssueFormSkeleton = () => {
  return (
    <div className="container space-y-3">
      <Skeleton className="h-10" />
      <div className="space-y-10">
        <Skeleton className="h-96" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  )
}

export default IssueFormSkeleton
