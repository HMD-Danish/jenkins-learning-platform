import { Layout } from '../components/Layout';
import { PipelineBuilder } from '../components/PipelineBuilder';

export const Builder = () => {
  return (
    <Layout sidebar currentPath="/builder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Interactive Pipeline Builder</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Design and simulate CI/CD pipelines visually
          </p>
        </div>

        <PipelineBuilder />
      </div>
    </Layout>
  );
};
