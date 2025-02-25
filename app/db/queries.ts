import { db } from "./index"
import { words } from "./schema"
import type { PostWord } from "@/app/types"

export async function getWords() {
  return db.select().from(words)
}

export async function postWord(word: PostWord) {
  return db.insert(words).values(word)
}
