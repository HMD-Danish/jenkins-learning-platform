import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { Card, Alert } from './Card';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title?: string;
  onComplete?: (score: number, total: number) => void;
}

export const Quiz = ({ questions, title = 'Quiz', onComplete }: QuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const current = questions[currentIndex];
  const isAnswered = answers[currentIndex] !== null;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
      const score = answers.reduce((acc, answer, idx) => 
        answer === questions[idx].correct ? acc + 1 : acc, 0);
      onComplete?.(score, questions.length);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
  };

  if (showResults) {
    const score = answers.reduce((acc, answer, idx) => 
      answer === questions[idx].correct ? acc + 1 : acc, 0);
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <Card className="p-8 max-w-2xl mx-auto">
        <div className="text-center space-y-6">
          <div className="text-6xl font-bold text-jenkins-600">{percentage}%</div>
          <h3 className="text-2xl font-bold">Quiz Complete!</h3>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            You scored <span className="font-bold">{score}</span> out of <span className="font-bold">{questions.length}</span>
          </p>
          
          <Alert
            type={percentage >= 80 ? 'success' : 'info'}
            title={percentage >= 80 ? 'Great job!' : 'Keep practicing'}
            message={percentage >= 80 
              ? 'You have a solid understanding of the material.'
              : 'Review the topics and try again to improve your score.'}
          />

          <button
            onClick={handleRestart}
            className="px-6 py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold mb-1">{title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Question {currentIndex + 1} of {questions.length}</p>
          </div>
          <div className="text-right text-sm font-semibold text-jenkins-600">
            {answers.filter(a => a !== null).length}/{questions.length} answered
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1 mb-6">
          <div 
            className="bg-jenkins-600 h-1 rounded-full transition-all"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h3 className="text-lg font-semibold mb-6">{current.question}</h3>

        <div className="space-y-3 mb-6">
          {current.options.map((option, idx) => {
            const isSelected = answers[currentIndex] === idx;
            const isCorrect = idx === current.correct;
            const showAnswer = isAnswered && idx === current.correct;

            return (
              <button
                key={idx}
                onClick={() => !isAnswered && handleAnswer(idx)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all flex items-center gap-3 ${
                  isSelected
                    ? 'border-jenkins-600 bg-jenkins-50 dark:bg-jenkins-900'
                    : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
                disabled={isAnswered}
              >
                {isAnswered && isCorrect ? (
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                ) : isAnswered && isSelected && !isCorrect ? (
                  <Circle className="text-red-500 flex-shrink-0" size={20} />
                ) : (
                  <Circle className={`flex-shrink-0 ${isSelected ? 'text-jenkins-600' : 'text-gray-400'}`} size={20} />
                )}
                <span className={isSelected ? 'font-semibold' : ''}>{option}</span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <Alert
            type={answers[currentIndex] === current.correct ? 'success' : 'error'}
            title={answers[currentIndex] === current.correct ? 'Correct!' : 'Incorrect'}
            message={current.explanation}
            className="mb-6"
          />
        )}

        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-colors"
        >
          {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </Card>
    </div>
  );
};
