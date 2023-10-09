import "./globals.css"
import "@radix-ui/themes/styles.css"
import { Inter } from "next/font/google"
import { Theme } from "@radix-ui/themes"
import type { Metadata } from "next"
import NavBar from "./NavBar"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <Theme>
          <NavBar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  )
}
