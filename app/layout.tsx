import "@radix-ui/themes/styles.css"
import "./globals.css"
import { Theme } from "@radix-ui/themes"
import type { Metadata } from "next"
import NavBar from "./NavBar"

export const metadata: Metadata = {
  title: "Issue Tracker",
  description:
    "A platform to facilitate the management and tracking of various tasks",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="purple">
          <NavBar />
          <main className="container">{children}</main>
        </Theme>
      </body>
    </html>
  )
}
