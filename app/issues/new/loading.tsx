import { Skeleton } from "@/components/ui/skeleton"

const LoadingNewIssuePage = () => {
  return (
    <div className="container space-y-3">
      <Skeleton className="h-10" />
      <Skeleton className="h-80" />
    </div>
  )
}

export default LoadingNewIssuePage
