"use server"
import { db } from "./index"
import { words } from "./schema"
import type { PostWord } from "@/app/types"
import { revalidatePath } from "next/cache"

export async function getWords() {
  return db.select().from(words)
}

export async function postWord(word: PostWord) {
  await db.insert(words).values(word)
  revalidatePath("/admin")
}
