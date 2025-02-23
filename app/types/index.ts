export interface Word {
  id: string;
  cebuano: string;
  english: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  example?: string;
}

export interface UserProgress {
  userId: string;
  wordId: string;
  proficiency: number; // 0-100
  lastReviewed: Date;
  nextReview: Date;
}

export interface DailyGoal {
  userId: string;
  date: Date;
  wordsLearned: number;
  targetWords: number;
  streak: number;
}
