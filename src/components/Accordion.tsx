import { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      if (!allowMultiple) {
        newOpen.clear();
      }
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  return (
    <div className="space-y-2 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className={`border-b border-gray-200 dark:border-gray-800 last:border-0 ${
            idx === 0 ? '' : ''
          }`}
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-left font-semibold"
          >
            <span>{item.title}</span>
            {openItems.has(item.id) ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {openItems.has(item.id) && (
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
