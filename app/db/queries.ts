import { and, eq, gte, lte } from "drizzle-orm"
import { db } from "./index"
import { words } from "./schema"

export async function getWords() {
  return db.select().from(words)
}
