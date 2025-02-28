"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Search, Plus } from "lucide-react"

// Mock data - Replace with your actual data
const words = [
  {
    id: "1",
    bisaya: "Maayong buntag",
    english: "Good morning",
    difficulty: "easy",
    category: "Greetings",
  },
  {
    id: "2",
    bisaya: "Salamat",
    english: "Thank you",
    difficulty: "easy",
    category: "Common Phrases",
  },
  // Add more words...
]

const categories = ["Greetings", "Common Phrases", "Numbers", "Food", "Family"]
const difficulties = ["easy", "medium", "hard"]

export default function WordsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [isAddingWord, setIsAddingWord] = useState(false)

  const filteredWords = words.filter(
    (word) =>
      (word.bisaya.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.english.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!selectedCategory || word.category === selectedCategory),
  )

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Word Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-500 to-indigo-600">
              <Plus className="mr-2 h-4 w-4" /> Add Word
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Word</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="bisaya">Bisaya Word</Label>
                <Input id="bisaya" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="english">English Translation</Label>
                <Input id="english" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="difficulty">Difficulty</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty}>
                        {difficulty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600">Add Word</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bisaya</TableHead>
              <TableHead>English</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Difficulty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredWords.map((word) => (
              <TableRow key={word.id}>
                <TableCell className="font-medium">{word.bisaya}</TableCell>
                <TableCell>{word.english}</TableCell>
                <TableCell>{word.category}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      word.difficulty === "easy" ? "success" : word.difficulty === "medium" ? "warning" : "destructive"
                    }
                  >
                    {word.difficulty}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

