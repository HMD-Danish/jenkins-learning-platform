import { ReactNode } from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'primary';
}

export const Card = ({ children, className = '', variant = 'default' }: CardProps) => {
  const baseClass = 'rounded-lg border transition-all';
  const variants = {
    default: 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md',
    highlight: 'bg-jenkins-50 dark:bg-jenkins-900 border-jenkins-200 dark:border-jenkins-800 shadow-md',
    primary: 'bg-gradient-to-br from-jenkins-50 to-jenkins-100 dark:from-jenkins-900 dark:to-jenkins-800 border-jenkins-300 dark:border-jenkins-700'
  };

  return (
    <div className={`${baseClass} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  className?: string;
}

export const Alert = ({ type, title, message, className = '' }: AlertProps) => {
  const typeStyles = {
    info: 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800',
    success: 'bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-800',
    error: 'bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-800'
  };

  const iconStyles = {
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500'
  };

  const textStyles = {
    info: 'text-blue-800 dark:text-blue-200',
    success: 'text-green-800 dark:text-green-200',
    warning: 'text-yellow-800 dark:text-yellow-200',
    error: 'text-red-800 dark:text-red-200'
  };

  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle
  };

  const Icon = icons[type];

  return (
    <div className={`rounded-lg border p-4 ${typeStyles[type]} ${className}`}>
      <div className="flex gap-3">
        <Icon className={`${iconStyles[type]} flex-shrink-0 mt-0.5`} size={20} />
        <div>
          <h4 className={`font-semibold ${textStyles[type]}`}>{title}</h4>
          <p className={`text-sm ${textStyles[type]}`}>{message}</p>
        </div>
      </div>
    </div>
  );
};
