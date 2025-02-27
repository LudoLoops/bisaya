import { getWords } from "./db/queries"
import FlashcardGame from "../components/flashcard-game"
export default async function Home() {
  const words = await getWords()
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <FlashcardGame />
    </main>
  )
}
