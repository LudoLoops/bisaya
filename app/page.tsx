import { Word } from "./types"

import { getWords } from "./db/queries"
import FlashcardGame from "../components/flashcard-game"
export default async function Home() {
  const words = await getWords()
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <FlashcardGame />
      {/* <DailyProgress /> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"> */}
      {/* <WordCard word={words[0]} /> */}
      {/* Word cards will be rendered here */}
      {/* </div> */}
    </main>
  )
}
