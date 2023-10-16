"use client"

import { ThemeToggler } from "@/app/ThemeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { fallbackInitials } from "@/lib/fallbackInitials"
import { cn } from "@/lib/utils"
import { Bug } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ]

  const currentPath = usePathname()
  const { status, data: session } = useSession()

  return (
    <header className="border-b mb-5 py-2">
      <nav className="container flex justify-between">
        <div className="flex items-center space-x-1 xs:space-x-5">
          <Link className="hidden xs:flex" href="/">
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
          <ThemeToggler />
        </div>
        {status === "authenticated" && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={session.user!.image!} />
                <AvatarFallback>
                  {fallbackInitials(session.user!.name!)}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={5} align="end">
              <DropdownMenuLabel>{session.user!.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/api/auth/signout">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {status === "unauthenticated" && (
          <Link className="flex items-center" href="/api/auth/signin">
            Log In
          </Link>
        )}
      </nav>
    </header>
  )
}

export default NavBar
