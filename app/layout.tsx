import "./globals.css"
import type { Metadata } from "next"
import { Exo_2 } from "next/font/google"
import NavBar from "./NavBar"

const exo_2 = Exo_2({ subsets: ["latin"] })

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
      <body className={exo_2.className}>
        <NavBar />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
