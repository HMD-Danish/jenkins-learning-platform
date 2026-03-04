import { useState } from 'react';
import { CheckCircle2, Circle, Zap } from 'lucide-react';
import { Card, Alert } from './Card';
import { CodeBlock } from './CodeBlock';

export interface LabStep {
  id: number;
  title: string;
  description: string;
  instructions: string[];
  code?: string;
  codeLanguage?: string;
  expectedOutput?: string;
  hint?: string;
}

interface LabProps {
  title: string;
  description: string;
  steps: LabStep[];
  onComplete?: () => void;
}

export const Lab = ({ title, description, steps, onComplete }: LabProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showHints, setShowHints] = useState<number[]>([]);

  const step = steps[currentStep];
  const isCompleted = completedSteps.includes(step.id);
  const allCompleted = completedSteps.length === steps.length;

  const handleCompleteStep = () => {
    if (!completedSteps.includes(step.id)) {
      setCompletedSteps([...completedSteps, step.id]);
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete?.();
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setCompletedSteps([]);
    setShowHints([]);
  };

  const toggleHint = (stepId: number) => {
    if (showHints.includes(stepId)) {
      setShowHints(showHints.filter(id => id !== stepId));
    } else {
      setShowHints([...showHints, stepId]);
    }
  };

  if (allCompleted) {
    return (
      <Card className="p-8 max-w-3xl mx-auto">
        <div className="text-center space-y-6">
          <div className="text-6xl">🎉</div>
          <h3 className="text-2xl font-bold">Lab Complete!</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            You've successfully completed all {steps.length} steps of "{title}"
          </p>
          
          <Alert
            type="success"
            title="Congratulations!"
            message="You've gained hands-on experience with this topic. Move on to the next lab or take a quiz to test your knowledge!"
          />

          <button
            onClick={handleRestart}
            className="px-6 py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors"
          >
            Restart Lab
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Lab header */}
      <Card className="p-6 bg-gradient-to-r from-jenkins-50 to-jenkins-100 dark:from-jenkins-900 dark:to-jenkins-800">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex items-center gap-2">
          <Zap className="text-jenkins-600" size={20} />
          <span className="text-sm font-semibold">{completedSteps.length}/{steps.length} steps completed</span>
        </div>
      </Card>

      {/* Steps sidebar */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-2">
          <h3 className="font-bold text-sm uppercase text-gray-600 dark:text-gray-400">Steps</h3>
          {steps.map((s, idx) => {
            const stepCompleted = completedSteps.includes(s.id);
            const isCurrent = currentStep === idx;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentStep(idx)}
                className={`w-full text-left p-3 rounded-lg transition-all border flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-jenkins-100 dark:bg-jenkins-900 border-jenkins-300 dark:border-jenkins-700'
                    : stepCompleted
                    ? 'bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800'
                    : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300'
                }`}
              >
                {stepCompleted ? (
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={18} />
                ) : (
                  <Circle className={`flex-shrink-0 ${isCurrent ? 'text-jenkins-600' : 'text-gray-400'}`} size={18} />
                )}
                <span className="text-sm font-semibold">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* Step content */}
        <div className="md:col-span-3 space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Step {currentStep + 1}: {step.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">{step.description}</p>

            <div className="space-y-4 mb-6">
              <h3 className="font-semibold">Instructions:</h3>
              <ol className="space-y-2">
                {step.instructions.map((instruction, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-jenkins-100 dark:bg-jenkins-900 text-jenkins-700 dark:text-jenkins-300 flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 pt-0.5">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {step.code && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Code:</h3>
                <CodeBlock
                  code={step.code}
                  language={step.codeLanguage || 'bash'}
                  title={`${step.codeLanguage || 'bash'} code`}
                />
              </div>
            )}

            {step.expectedOutput && (
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Expected Output:</h3>
                <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-800">
                  {step.expectedOutput}
                </div>
              </div>
            )}

            {step.hint && (
              <div className="mb-6">
                <button
                  onClick={() => toggleHint(step.id)}
                  className="text-jenkins-600 hover:text-jenkins-700 font-semibold text-sm"
                >
                  {showHints.includes(step.id) ? '▼ Hide Hint' : '▶ Show Hint'}
                </button>
                {showHints.includes(step.id) && (
                  <Alert
                    type="info"
                    title="Hint"
                    message={step.hint}
                    className="mt-3"
                  />
                )}
              </div>
            )}

            <button
              onClick={handleCompleteStep}
              className="w-full py-3 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors"
            >
              {isCompleted ? '✓ Mark as Complete' : 'Mark as Complete'}
              {currentStep < steps.length - 1 && ' & Next Step'}
              {currentStep === steps.length - 1 && ' & Finish Lab'}
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};
