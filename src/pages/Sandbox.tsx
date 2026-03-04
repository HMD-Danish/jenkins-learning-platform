import { Layout } from '../components/Layout';
import { Card, Alert } from '../components/Card';

export const Sandbox = () => {
  return (
    <Layout sidebar currentPath="/sandbox">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Interactive Sandbox</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Practice Jenkins concepts in a safe, simulated environment
        </p>

        <Alert
          type="info"
          title="Sandbox Environment"
          message="This is a simulated Jenkins environment. Use it to practice without affecting a real instance."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Job Simulator</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create and run simulated Jenkins jobs. See how jobs are triggered, executed, and produce results.
            </p>
            <button className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors">
              Open Job Simulator
            </button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Pipeline Simulator</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Build and visualize pipelines with different stages, parallel execution, and conditional logic.
            </p>
            <button className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors">
              Open Pipeline Simulator
            </button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Configuration Sandbox</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Experiment with Jenkins configuration, plugin installation, and system settings safely.
            </p>
            <button className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors">
              Open Config Sandbox
            </button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Integration Simulator</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Practice integrations with Git, Slack, Docker, and other external systems.
            </p>
            <button className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors">
              Open Integration Simulator
            </button>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
