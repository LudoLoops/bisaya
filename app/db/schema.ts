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
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  clerkId: text("clerk_id").notNull().unique(), // Add clerkId and make it unique
  username: text("username"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const words = pgTable("words", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  bisaya: text("bisaya").notNull(),
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

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  user: one(users, {
    fields: [userProgress.userId],
    references: [users.id],
  }),
  word: one(words, {
    fields: [userProgress.wordId],
    references: [words.id],
  }),
}))

export const dailyGoalsRelations = relations(dailyGoals, ({ one }) => ({
  user: one(users, {
    fields: [dailyGoals.userId],
    references: [users.id],
  }),
}))
