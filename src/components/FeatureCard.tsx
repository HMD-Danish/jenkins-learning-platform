import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to?: string;
}

export const FeatureCard = ({ icon, title, description, to }: FeatureCardProps) => {
  const content = (
    <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-lg hover:border-jenkins-300 dark:hover:border-jenkins-700 transition-all group">
      <div className="mb-4 text-jenkins-600 dark:text-jenkins-400">{icon}</div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-jenkins-600 transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{description}</p>
      {to && (
        <div className="flex items-center gap-2 text-jenkins-600 font-semibold text-sm group-hover:gap-3 transition-all">
          Learn more <ArrowRight size={16} />
        </div>
      )}
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
};
