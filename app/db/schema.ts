import {
  pgTable,
  uuid,
  text,
  timestamp,
  integer,
  date,
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const words = pgTable("words", {
  id: uuid("id").primaryKey().defaultRandom(),
  cebuano: text("cebuano").notNull(),
  english: text("english").notNull(),
  category: text("category").notNull(),
  difficulty: text("difficulty").notNull(),
  example: text("example"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const userProgress = pgTable("user_progress", {
  userId: uuid("user_id").references(() => users.id),
  wordId: uuid("word_id").references(() => words.id),
  proficiency: integer("proficiency").notNull().default(0),
  lastReviewed: timestamp("last_reviewed").defaultNow(),
  nextReview: timestamp("next_review").defaultNow(),
})

export const dailyGoals = pgTable("daily_goals", {
  userId: uuid("user_id").references(() => users.id),
  date: date("date").notNull(),
  wordsLearned: integer("words_learned").notNull().default(0),
  targetWords: integer("target_words").notNull().default(10),
  streak: integer("streak").notNull().default(0),
})

// Define relationships
export const wordsRelations = relations(words, ({ many }) => ({
  progress: many(userProgress),
}))

export const userRelations = relations(users, ({ many }) => ({
  progress: many(userProgress),
  goals: many(dailyGoals),
}))
