"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, Zap, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock data for flashcards
const flashcards = [
  {
    word: "Maayong buntag!",
    definition: "Good morning!",
  },
  {
    word: "Maayong adlaw!",
    definition: "Good day!",
  },
  {
    word: "Maayong hapon!",
    definition: "Good afternoon!",
  },
  {
    word: "Amping",
    definition: "Goodbye",
  },
  {
    word: "Oo",
    definition: "Yes",
  },
  { word: "Dili", definition: "No" },
]

export default function FlashcardGame() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress((currentCardIndex / flashcards.length) * 100)
  }, [currentCardIndex])

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleNext = (known: boolean) => {
    if (known) {
      setScore(score + 10)
      setStreak(streak + 1)
    } else {
      setStreak(0)
    }

    setIsFlipped(false)
    setCurrentCardIndex(prevIndex => (prevIndex + 1) % flashcards.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Badge variant="secondary" className="text-lg px-3 py-1">
              <Trophy className="text-yellow-400 mr-2" />
              <span>{score}</span>
            </Badge>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              <Zap className="text-orange-400 mr-2" />
              <span>{streak}</span>
            </Badge>
          </div>
          <Progress value={progress} className="mb-6" />
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-6 h-64 flex items-center justify-center cursor-pointer shadow-lg"
            onClick={handleFlip}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`text-white text-center ${
                isFlipped ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              <h2 className="text-3xl font-bold mb-2">
                {isFlipped
                  ? flashcards[currentCardIndex].definition
                  : flashcards[currentCardIndex].word}
              </h2>
              {/* <p className="text-sm">{isFlipped ? "Definition" : "Word"}</p> */}
            </div>
          </motion.div>
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => handleNext(false)}
              className="flex-1 mr-2"
            >
              Still Learning
            </Button>
            <Button onClick={() => handleNext(true)} className="flex-1 ml-2">
              I Know It!
            </Button>
          </div>
          <Separator className="my-6" />
          <div className="text-center text-muted-foreground">
            <p className="text-sm mb-2">
              Keep learning to unlock achievements!
            </p>
            <div className="flex justify-center">
              <Sparkles className="text-yellow-300 mr-2" />
              <Sparkles className="text-yellow-300 mr-2" />
              <Sparkles className="text-yellow-300" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
