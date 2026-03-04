import { Layout } from '../components/Layout';
import { Card, Alert } from '../components/Card';

export const Installation = () => {
  return (
    <Layout sidebar currentPath="/installation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Installation & Setup</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Get Jenkins up and running on your system
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Windows</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Install Jenkins on Windows with the MSI installer</p>
            <button className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors">
              Go to Windows Lab
            </button>
          </Card>

          <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Linux</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Install Jenkins on Linux using package managers</p>
            <button className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors">
              Go to Linux Lab
            </button>
          </Card>

          <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">Docker</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Run Jenkins in Docker containers</p>
            <button className="w-full py-2 bg-jenkins-600 hover:bg-jenkins-700 text-white rounded-lg font-semibold transition-colors">
              Go to Docker Lab
            </button>
          </Card>
        </div>

        <Alert
          type="info"
          title="Prerequisites"
          message="Jenkins requires Java 8 or higher (Java 11+ recommended) and at least 256MB of RAM (512MB+ recommended)"
        />
      </div>
    </Layout>
  );
};
