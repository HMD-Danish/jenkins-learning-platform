import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  cta?: {
    text: string;
    onClick: () => void;
  };
  children?: ReactNode;
}

export const Hero = ({ title, subtitle, description, cta, children }: HeroProps) => {
  return (
    <div className="bg-gradient-to-r from-jenkins-600 to-jenkins-700 dark:from-jenkins-800 dark:to-jenkins-900 text-white py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-jenkins-100">{subtitle}</h2>
          {description && <p className="text-lg text-jenkins-100 mb-8">{description}</p>}
          
          {cta && (
            <button
              onClick={cta.onClick}
              className="px-8 py-3 bg-white text-jenkins-700 rounded-lg font-bold hover:bg-jenkins-50 transition-colors"
            >
              {cta.text}
            </button>
          )}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </div>
  );
};
