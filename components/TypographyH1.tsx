import { PropsWithChildren } from "react"

export function TypographyH1({ children }: PropsWithChildren) {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}
