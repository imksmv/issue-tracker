import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  className?: string
}

export function TypographyP({ children, className }: Props) {
  return <p className={cn("leading-7", className)}>{children}</p>
}
