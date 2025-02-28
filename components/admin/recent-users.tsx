"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const recentUsers = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    joinedAt: "2 minutes ago",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "editor",
    joinedAt: "1 hour ago",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
    joinedAt: "3 hours ago",
  },
  {
    name: "Alice Brown",
    email: "alice@example.com",
    role: "user",
    joinedAt: "5 hours ago",
  },
]

export function RecentUsers() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Joined</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentUsers.map((user) => (
          <TableRow key={user.email}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge variant={user.role === "editor" ? "default" : "secondary"}>{user.role}</Badge>
            </TableCell>
            <TableCell>{user.joinedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

