import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export function TypographyH2({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "border-b text-3xl font-semibold tracking-tight transition-colors",
        className
      )}
    >
      {children}
    </h2>
  )
}
