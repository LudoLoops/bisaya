import { Word } from "./types"

interface WordCardProps {
  // word: Word
  onLearn: () => void
}

export default function WordCard({ word, onLearn }: WordCardProps) {
  if (!word) return null
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-2xl font-bold mb-2">{word.cebuano}</div>
      <div className="text-gray-600 mb-4">{word.english}</div>
      {word.example && (
        <div className="text-sm text-gray-500 italic mb-4">{word.example}</div>
      )}
      <button
        onClick={onLearn}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Learn This Word
      </button>
    </div>
  )
}
