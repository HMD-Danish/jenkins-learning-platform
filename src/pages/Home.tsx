import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { FeatureCard } from '../components/FeatureCard';
import { BookOpen, Zap, Trophy, Code2, Users, Lightbulb } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BookOpen size={32} />,
      title: 'Learn Jenkins Fundamentals',
      description: 'Master CI/CD concepts, job types, and pipeline architecture from the ground up.',
      to: '/basics'
    },
    {
      icon: <Zap size={32} />,
      title: 'Hands-On Labs',
      description: 'Get practical experience with real-world Jenkins setups and configurations.',
      to: '/labs'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Test Your Knowledge',
      description: 'Take quizzes at different levels: beginner, intermediate, and expert.',
      to: '/quizzes'
    },
    {
      icon: <Code2 size={32} />,
      title: 'Pipeline Builder',
      description: 'Visually design and simulate CI/CD pipelines with our interactive tool.',
      to: '/builder'
    },
    {
      icon: <Users size={32} />,
      title: 'Interactive Sandbox',
      description: 'Practice Jenkins concepts in a safe, simulation-based environment.',
      to: '/sandbox'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Advanced Topics',
      description: 'Dive deep into Shared Libraries, Blue Ocean, and enterprise patterns.',
      to: '/advanced'
    }
  ];

  return (
    <Layout>
      <Hero
        title="Master Jenkins - From Zero to Expert"
        subtitle="The Complete Learning Platform for CI/CD Automation"
        description="Learn Jenkins through interactive lessons, hands-on labs, real-world examples, and comprehensive assessments. Whether you're just starting or scaling to enterprise, we've got you covered."
        cta={{
          text: 'Start Learning Now',
          onClick: () => navigate('/basics')
        }}
      />

      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Learning Path</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Everything you need to become a Jenkins expert</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-jenkins-50 to-jenkins-100 dark:from-jenkins-900 dark:to-jenkins-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Learn Jenkins?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-3">Industry Standard</h3>
              <p className="text-gray-700 dark:text-gray-300">Jenkins is used by millions of developers worldwide for automation and CI/CD pipelines.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">In-Demand Skill</h3>
              <p className="text-gray-700 dark:text-gray-300">Jenkins expertise is highly valued in DevOps, platform engineering, and cloud roles.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p className="text-gray-700 dark:text-gray-300">Master CI/CD to advance your career in DevOps and site reliability engineering.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How This Platform Works</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-jenkins-600 text-white text-xl font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Learn at Your Pace</h3>
                <p className="text-gray-600 dark:text-gray-400">Start with fundamentals and progress through structured modules with clear explanations and visual aids.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-jenkins-600 text-white text-xl font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Practice with Labs</h3>
                <p className="text-gray-600 dark:text-gray-400">Follow step-by-step instructions to set up Jenkins, create jobs, pipelines, and integrations.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-jenkins-600 text-white text-xl font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Test Your Knowledge</h3>
                <p className="text-gray-600 dark:text-gray-400">Take interactive quizzes with instant feedback to track your progress and identify gaps.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-jenkins-600 text-white text-xl font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Become an Expert</h3>
                <p className="text-gray-600 dark:text-gray-400">Master advanced concepts and real-world patterns used by thousands of organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Choose your learning path:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/basics')}
              className="px-6 py-3 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors"
            >
              Start with Basics
            </button>
            <button
              onClick={() => navigate('/labs')}
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
            >
              Jump to Labs
            </button>
            <button
              onClick={() => navigate('/quizzes')}
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
            >
              Take Quizzes
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
