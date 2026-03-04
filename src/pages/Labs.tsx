import { Layout } from '../components/Layout';
import { Card } from '../components/Card';
import { Lab } from '../components/Lab';
import { useState } from 'react';
import { labs } from '../data/labs';

export const Labs = () => {
  const [selectedLab, setSelectedLab] = useState<string | null>(null);
  const [completedLabs, setCompletedLabs] = useState<string[]>([]);

  const allLabs = [
    ...labs.installation.map(lab => ({ ...lab, category: 'Installation' })),
    ...labs.handson.map(lab => ({ ...lab, category: 'Hands-On' }))
  ];

  const handleComplete = () => {
    if (selectedLab) {
      setCompletedLabs([...completedLabs, selectedLab]);
      setSelectedLab(null);
    }
  };

  if (selectedLab) {
    const lab = allLabs.find(l => `${l.id}-${l.category}` === selectedLab);
    return (
      <Layout sidebar currentPath="/labs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setSelectedLab(null)}
            className="mb-6 text-jenkins-600 hover:text-jenkins-700 font-semibold"
          >
            ← Back to Labs
          </button>
          {lab && <Lab {...lab} onComplete={handleComplete} />}
        </div>
      </Layout>
    );
  }

  return (
    <Layout sidebar currentPath="/labs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Hands-On Labs</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Get practical experience with Jenkins through step-by-step labs
        </p>

        {['Installation', 'Hands-On'].map(category => {
          const categoryLabs = allLabs.filter(lab => lab.category === category);
          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {categoryLabs.map(lab => {
                  const labId = `${lab.id}-${lab.category}`;
                  const isCompleted = completedLabs.includes(labId);
                  return (
                    <Card
                      key={labId}
                      className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                      variant={isCompleted ? 'highlight' : 'default'}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{lab.title}</h3>
                        {isCompleted && <span className="text-2xl">✓</span>}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{lab.description}</p>
                      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                        {(lab.steps || []).length} steps
                      </div>
                      <button
                        onClick={() => setSelectedLab(labId)}
                        className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors"
                      >
                        {isCompleted ? 'Redo Lab' : 'Start Lab'}
                      </button>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
