import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Quiz } from '../components/Quiz';
import { useState } from 'react';
import { quizzes } from '../data/quizzes';
import { Trophy } from 'lucide-react';

export const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [scores, setScores] = useState<{ [key: string]: { score: number; total: number } }>({});

  const quizList = [
    { id: 'beginner', label: 'Beginner Quiz', questions: quizzes.beginner },
    { id: 'intermediate', label: 'Intermediate Quiz', questions: quizzes.intermediate },
    { id: 'expert', label: 'Expert Quiz', questions: quizzes.expert }
  ];

  const handleQuizComplete = (quizId: string, score: number, total: number) => {
    setScores({ ...scores, [quizId]: { score, total } });
    setTimeout(() => setSelectedQuiz(null), 3000);
  };

  if (selectedQuiz) {
    const quiz = quizList.find(q => q.id === selectedQuiz);
    return (
      <Layout sidebar currentPath="/quizzes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedQuiz(null)}
            className="mb-6 text-jenkins-600 hover:text-jenkins-700 font-semibold"
          >
            ← Back to Quizzes
          </button>
          {quiz && (
            <Quiz
              questions={quiz.questions}
              title={quiz.label}
              onComplete={(score, total) => handleQuizComplete(selectedQuiz, score, total)}
            />
          )}
        </div>
      </Layout>
    );
  }

  return (
    <Layout sidebar currentPath="/quizzes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Jenkins Quizzes</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Test your knowledge at different levels
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {quizList.map(quiz => {
            const score = scores[quiz.id];
            const difficulty = quiz.id === 'beginner' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                             quiz.id === 'intermediate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
                             'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300';

            return (
              <Card key={quiz.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{quiz.label}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded mt-2 inline-block ${difficulty}`}>
                      {quiz.id.charAt(0).toUpperCase() + quiz.id.slice(1)}
                    </span>
                  </div>
                  <Trophy className="text-jenkins-600" size={24} />
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {quiz.questions.length} questions
                </p>

                {score && (
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Last Score:</strong> {score.score}/{score.total} ({Math.round((score.score/score.total)*100)}%)
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setSelectedQuiz(quiz.id)}
                  className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors"
                >
                  {score ? 'Retake Quiz' : 'Start Quiz'}
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
