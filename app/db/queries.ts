import { and, eq, gte, lte } from "drizzle-orm"
import { db } from "./index"
import { words, type Words } from "./schema"

export async function getWords() {
  return db.select().from(words)
}

export async function postWord(word: Words) {
  return db.insert(words).values(word)
}
