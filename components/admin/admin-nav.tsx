"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, BookOpenCheck, Settings } from "lucide-react"

const adminNavItems = [
  {
    title: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Words",
    href: "/admin/words",
    icon: BookOpenCheck,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

interface AdminNavProps {
  variant?: "sidebar" | "topbar" | "tabs"
}

export function AdminNav({ variant = "sidebar" }: AdminNavProps) {
  const pathname = usePathname()

  if (variant === "topbar") {
    return (
      <div className="border-b bg-gradient-to-r from-purple-400/10 to-indigo-400/10 backdrop-blur-sm">
        <nav className="flex space-x-4 px-6 py-4">
          {adminNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm"
                    : "text-muted-foreground hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-600/10 hover:text-foreground",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>
    )
  }

  if (variant === "tabs") {
    return (
      <div className="border-b">
        <nav className="flex space-x-2 px-6 py-4">
          {adminNavItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-gradient-to-b from-purple-500 to-indigo-600 text-white shadow-sm"
                    : "text-muted-foreground hover:bg-gradient-to-b hover:from-purple-500/10 hover:to-indigo-600/10 hover:text-foreground",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>
    )
  }

  // Default sidebar variant
  return (
    <div className="flex h-screen w-64 flex-col border-r bg-gradient-to-b from-purple-400/10 to-indigo-400/10 backdrop-blur-sm">
      <div className="flex h-14 items-center border-b px-6 font-semibold">Admin Dashboard</div>
      <nav className="flex-1 space-y-1 p-4">
        {adminNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all",
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm"
                  : "text-muted-foreground hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-600/10 hover:text-foreground",
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

