import type React from "react"
import { AdminNav } from "@/components/admin/admin-nav"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  // Choose your preferred variant: "sidebar", "topbar", or "tabs"
  const navVariant = "tabs"

  return (
    <div className=" min-h-screen">
      <AdminNav variant={navVariant} />
      <div className="flex-1">{children}</div>
    </div>
  )
}

