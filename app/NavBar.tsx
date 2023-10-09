"use client"

import { Bug } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "./lib/utils"

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ]

  const currentPath = usePathname()

  return (
    <header className="border-b mb-5 py-4">
      <nav className="container flex space-x-6">
        <Link href="/">
          <Bug />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "hover:text-zinc-500 dark:hover:text-zinc-300 transition-colors",
                  {
                    "dark:text-zinc-300 text-zinc-500 underline underline-offset-4":
                      link.href === currentPath,
                  }
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
