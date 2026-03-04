import { Link } from 'react-router-dom';
import { BookOpen, Zap, Trophy, HelpCircle } from 'lucide-react';

interface SidebarProps {
  currentPath?: string;
}

export const Sidebar = ({ currentPath = '' }: SidebarProps) => {
  const sections = [
    {
      title: 'Learning',
      items: [
        { path: '/', label: 'Home', icon: BookOpen },
        { path: '/basics', label: 'Basics', icon: BookOpen },
        { path: '/installation', label: 'Installation', icon: Zap },
      ]
    },
    {
      title: 'Practice',
      items: [
        { path: '/labs', label: 'Hands-on Labs', icon: Trophy },
        { path: '/sandbox', label: 'Interactive Sandbox', icon: Zap },
        { path: '/builder', label: 'Pipeline Builder', icon: Zap },
      ]
    },
    {
      title: 'Assessment',
      items: [
        { path: '/quizzes', label: 'Quizzes', icon: Trophy },
        { path: '/troubleshooting', label: 'Troubleshooting', icon: HelpCircle },
      ]
    }
  ];

  return (
    <aside className="hidden lg:block w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 min-h-screen">
      <div className="p-6 space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <nav className="space-y-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-jenkins-100 dark:bg-jenkins-900 text-jenkins-700 dark:text-jenkins-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
};
