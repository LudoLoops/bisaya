"use server"
import { db } from "./index"
import { words } from "./schema"
import type { PostWord, Word } from "@/app/types"
import { revalidatePath } from "next/cache"

export async function getWords(): Promise<Word[]> {
  return (await db.select().from(words)) as Word[]
}

export async function postWord(word: PostWord) {
  await db.insert(words).values(word)
  revalidatePath("/admin")
}
