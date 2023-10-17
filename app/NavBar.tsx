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
import { Skeleton } from "@/components/ui/skeleton"
import { fallbackInitials } from "@/lib/fallbackInitials"
import { cn } from "@/lib/utils"
import { Bug } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBar = () => {
  return (
    <header className="border-b mb-5 py-2">
      <nav className="container flex justify-between">
        <div className="flex items-center ">
          <Link className="hidden xs:flex mr-2.5" href="/">
            <Bug size={28} />
          </Link>
          <NavLinks />
          <ThemeToggler />
        </div>
        <AuthStatus />
      </nav>
    </header>
  )
}

const NavLinks = () => {
  const currentPath = usePathname()

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ]

  return (
    <ul className="flex space-x-1 bg-accent py-1.5 px-2 rounded-md mr-2.5">
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
  )
}

const AuthStatus = () => {
  const { status, data: session } = useSession()

  if (status === "loading")
    return (
      <div className="flex items-center">
        <Skeleton className="h-5 w-12" />
      </div>
    )

  if (status === "unauthenticated")
    return (
      <Link className="flex items-center" href="/api/auth/signin">
        Log In
      </Link>
    )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer h-9 w-9">
          <AvatarImage src={session!.user!.image!} />
          <AvatarFallback>
            {fallbackInitials(session!.user!.name!)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={5} align="end">
        <DropdownMenuLabel>{session!.user!.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/api/auth/signout">Log out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavBar
