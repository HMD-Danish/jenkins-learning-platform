import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '../hooks/useTheme';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/basics', label: 'Basics' },
    { path: '/installation', label: 'Installation' },
    { path: '/labs', label: 'Labs' },
    { path: '/advanced', label: 'Advanced' },
    { path: '/quizzes', label: 'Quizzes' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-jenkins-500 rounded-lg flex items-center justify-center text-white font-bold">J</div>
            <span className="text-xl font-bold text-jenkins-600 dark:text-jenkins-400">Jenkins Pro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
