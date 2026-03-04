export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
}

export const Tabs = ({ items, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab || items[0]?.id);
  const active = items.find(item => item.id === activeTab);

  return (
    <div className="space-y-4">
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 font-semibold transition-colors border-b-2 -mb-px whitespace-nowrap ${
              activeTab === item.id
                ? 'border-jenkins-600 text-jenkins-600'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">
        {active?.content}
      </div>
    </div>
  );
};

import React from 'react';
