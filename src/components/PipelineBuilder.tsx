import { useState } from 'react';
import { Plus, Trash2, Play } from 'lucide-react';
import { Card, Alert } from './Card';

export interface PipelineStage {
  id: string;
  name: string;
  type: 'build' | 'test' | 'deploy';
  status: 'pending' | 'running' | 'success' | 'failed';
}

export const PipelineBuilder = () => {
  const [stages, setStages] = useState<PipelineStage[]>([
    { id: '1', name: 'Checkout', type: 'build', status: 'pending' },
    { id: '2', name: 'Build', type: 'build', status: 'pending' },
  ]);
  const [isRunning, setIsRunning] = useState(false);

  const addStage = (type: 'build' | 'test' | 'deploy') => {
    const newStage: PipelineStage = {
      id: Date.now().toString(),
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} Stage`,
      type,
      status: 'pending'
    };
    setStages([...stages, newStage]);
  };

  const removeStage = (id: string) => {
    setStages(stages.filter(s => s.id !== id));
  };

  const runPipeline = async () => {
    setIsRunning(true);
    for (let i = 0; i < stages.length; i++) {
      setStages(prev => {
        const newStages = [...prev];
        newStages[i].status = 'running';
        return newStages;
      });

      await new Promise(resolve => setTimeout(resolve, 2000));

      setStages(prev => {
        const newStages = [...prev];
        newStages[i].status = Math.random() > 0.2 ? 'success' : 'failed';
        return newStages;
      });
    }
    setIsRunning(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200';
      case 'failed': return 'bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200';
      case 'running': return 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200 animate-pulse';
      default: return 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  const typeColors = {
    build: 'bg-jenkins-100 dark:bg-jenkins-900 text-jenkins-700 dark:text-jenkins-300',
    test: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    deploy: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Pipeline Builder</h2>
        
        <Alert
          type="info"
          title="Interactive Pipeline Designer"
          message="Build a CI/CD pipeline by adding stages. Click 'Run' to simulate execution."
          className="mb-6"
        />

        {/* Pipeline visualization */}
        <div className="mb-8 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Pipeline Flow:</h3>
          <div className="flex flex-wrap gap-4 items-center">
            {stages.map((stage, idx) => (
              <div key={stage.id} className="flex items-center gap-4">
                <div className={`px-4 py-2 rounded-lg border-2 font-semibold ${getStatusColor(stage.status)}`}>
                  {stage.name}
                </div>
                {idx < stages.length - 1 && (
                  <div className="text-2xl text-gray-400">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => addStage('build')}
              className="flex items-center gap-2 px-3 py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg text-sm font-semibold"
            >
              <Plus size={16} /> Build
            </button>
            <button
              onClick={() => addStage('test')}
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold"
            >
              <Plus size={16} /> Test
            </button>
            <button
              onClick={() => addStage('deploy')}
              className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold"
            >
              <Plus size={16} /> Deploy
            </button>
          </div>

          <button
            onClick={runPipeline}
            disabled={isRunning || stages.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-jenkins-500 hover:bg-jenkins-600 disabled:bg-gray-400 text-white rounded-lg font-semibold"
          >
            <Play size={16} /> {isRunning ? 'Running...' : 'Run Pipeline'}
          </button>
        </div>

        {/* Stages list */}
        <div className="space-y-2">
          <h3 className="font-semibold">Stages:</h3>
          {stages.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-sm">No stages added yet. Add stages using the buttons above.</p>
          ) : (
            stages.map(stage => (
              <div key={stage.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${typeColors[stage.type]}`}>
                    {stage.type}
                  </span>
                  <span className="font-semibold">{stage.name}</span>
                </div>
                <button
                  onClick={() => removeStage(stage.id)}
                  className="p-2 hover:bg-red-100 dark:hover:bg-red-900 text-red-600 rounded transition-colors"
                  disabled={isRunning}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
};
