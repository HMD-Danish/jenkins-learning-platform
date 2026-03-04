import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  sidebar?: boolean;
  currentPath?: string;
}

export const Layout = ({ children, sidebar = false, currentPath = '' }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <div className="flex">
        {sidebar && <Sidebar currentPath={currentPath} />}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};
