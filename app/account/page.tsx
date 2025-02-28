"use client"

import { Trophy, Zap, Clock, Target, BookOpen } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

// Mock data - Replace with real data from your backend
const userData = {
  name: "Sarah Wilson",
  email: "sarah@example.com",
  avatar: "/placeholder.svg?height=40&width=40",
  stats: {
    wordsLearned: 324,
    currentStreak: 7,
    totalScore: 4280,
    minutesStudied: 438,
    daysActive: 28,
  },
  goals: {
    daily: 20,
    weekly: 100,
    progress: 65,
  },
  recentActivity: [
    { word: "Ephemeral", date: "2 hours ago", mastered: true },
    { word: "Ubiquitous", date: "5 hours ago", mastered: true },
    { word: "Serendipity", date: "1 day ago", mastered: false },
    { word: "Eloquent", date: "1 day ago", mastered: true },
  ],
  achievements: [
    {
      name: "First Steps",
      description: "Learn your first 10 words",
      completed: true,
    },
    {
      name: "Word Master",
      description: "Achieve a 7-day streak",
      completed: true,
    },
    {
      name: "Vocabulary Builder",
      description: "Learn 100 words",
      completed: true,
    },
    {
      name: "Language Explorer",
      description: "Study for 30 days",
      completed: false,
    },
  ],
  categories: [
    { name: "Common Words", progress: 75 },
    { name: "Academic", progress: 45 },
    { name: "Business", progress: 60 },
    { name: "Literature", progress: 30 },
  ],
}

export default function AccountPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50/50">
      <div className="container mx-auto p-4 space-y-4">
        {/* Header Section */}
        <Card className="border-none bg-white shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 ring-4 ring-purple-500/20">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback>SW</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    {userData.name}
                  </h1>
                  <p className="text-muted-foreground">{userData.email}</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-purple-400 to-indigo-600 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">
                Words Learned
              </CardTitle>
              <BookOpen className="h-4 w-4 text-white" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {userData.stats.wordsLearned}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-cyan-400 to-blue-600 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">
                Current Streak
              </CardTitle>
              <Zap className="h-4 w-4 text-white" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {userData.stats.currentStreak} days
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-pink-400 to-rose-600 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">
                Total Score
              </CardTitle>
              <Trophy className="h-4 w-4 text-white" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {userData.stats.totalScore}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-400 to-red-600 border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">
                Study Time
              </CardTitle>
              <Clock className="h-4 w-4 text-white" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {userData.stats.minutesStudied} min
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Daily Goals */}
          <Card className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-50 to-indigo-50 border-none shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Daily Goals
              </CardTitle>
              <CardDescription>Track your learning objectives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Daily Words</span>
                    <span className="text-sm text-muted-foreground">
                      {userData.goals.progress}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all"
                      style={{ width: `${userData.goals.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Target className="h-4 w-4 text-purple-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Target: {userData.goals.daily} words per day
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {userData.goals.weekly} words per week
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-none shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest learning progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userData.recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Badge
                      variant={activity.mastered ? "default" : "secondary"}
                      className={
                        activity.mastered
                          ? "bg-gradient-to-r from-purple-500 to-indigo-600"
                          : "bg-gradient-to-r from-gray-500 to-gray-600"
                      }
                    >
                      {activity.mastered ? "Mastered" : "Learning"}
                    </Badge>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {activity.word}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categories Progress */}
          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-none shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Categories Progress
              </CardTitle>
              <CardDescription>Your progress by word category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {userData.categories.map((category, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {category.progress}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-all"
                      style={{ width: `${category.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Achievements Section */}
        <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-none shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Achievements
            </CardTitle>
            <CardDescription>Your learning milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {userData.achievements.map((achievement, i) => (
                <HoverCard key={i}>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start gap-2 border-2 transition-all hover:scale-105 ${
                        achievement.completed
                          ? "border-purple-500 bg-gradient-to-r from-purple-500/10 to-indigo-500/10"
                          : "border-gray-200"
                      }`}
                    >
                      <Trophy
                        className={`h-4 w-4 ${
                          achievement.completed
                            ? "text-purple-500"
                            : "text-muted-foreground"
                        }`}
                      />
                      {achievement.name}
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent
                    className={`w-80 border-none ${
                      achievement.completed
                        ? "bg-gradient-to-r from-purple-500 to-indigo-600"
                        : "bg-gradient-to-r from-gray-500 to-gray-600"
                    }`}
                  >
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white">
                          {achievement.name}
                        </h4>
                        <p className="text-sm text-white/80">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
