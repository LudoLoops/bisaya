"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { SignedIn } from "@clerk/nextjs"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-white/80",
          pathname === "/" ? "text-white" : "text-white/70"
        )}
      >
        Learn
      </Link>

      <SignedIn>
        <Link
          href="/account"
          className={cn(
            "text-sm font-medium transition-colors hover:text-white/80",
            pathname === "/account" ? "text-white" : "text-white/70"
          )}
        >
          Account
        </Link>
        {/* <Link
          href="/achievements"
          className={cn(
            "text-sm font-medium transition-colors hover:text-white/80",
            pathname === "/achievements" ? "text-white" : "text-white/70"
          )}
        >
          Achievements
        </Link> */}
      </SignedIn>
    </nav>
  )
}
