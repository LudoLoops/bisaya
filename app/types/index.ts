import { InferSelectModel } from "drizzle-orm"
import { words, userProgress, dailyGoals } from "@/app/db/schema"

// import type from schema and modify it if needed
export type Word = InferSelectModel<typeof words> & {
  difficulty: "beginner" | "intermediate" | "advanced"
}

export type PostWord = Omit<Word, "id" | "createdAt">

export type UserProgress = InferSelectModel<typeof userProgress>

export type DailyGoal = InferSelectModel<typeof dailyGoals>
