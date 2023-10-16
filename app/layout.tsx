import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavBar from "./NavBar"
import { ThemeProvider } from "@/app/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import AuthProvider from "./auth/Provider"
import QueryClientProvider from "./QueryClientProvider"

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryClientProvider>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar />
              <main>{children}</main>
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
