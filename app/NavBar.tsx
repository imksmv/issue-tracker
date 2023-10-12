"use client"

import { Bug } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "./lib/utils"
import { ThemeToggler } from "@/components/ThemeToggle"

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ]

  const currentPath = usePathname()

  return (
    <header className="border-b mb-5 py-2">
      <nav className="container flex justify-between">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <Bug size={28} />
          </Link>
          <ul className="flex space-x-1 bg-accent py-1.5 px-2 rounded-md">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn("px-3", {
                    "bg-background rounded-md py-1": link.href === currentPath,
                  })}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ThemeToggler />
      </nav>
    </header>
  )
}

export default NavBar
