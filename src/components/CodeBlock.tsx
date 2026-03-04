import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { atomLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  isDark?: boolean;
}

export const CodeBlock = ({ code, language, title, isDark = false }: CodeBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 dark:bg-gray-950 border border-gray-800">
      {title && (
        <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-300">{title}</span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            <ChevronDown size={18} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      )}
      
      {(isExpanded || !title) && (
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={language}
            style={isDark ? atomDark : atomLight}
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.875rem',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};
