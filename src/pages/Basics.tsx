import { Layout } from '../components/Layout';
import { Card, Alert } from '../components/Card';
import { CodeBlock } from '../components/CodeBlock';
import { Tabs, TabItem } from '../components/Tabs';

export const Basics = () => {
  const tabs: TabItem[] = [
    {
      id: 'ci-cd',
      label: 'CI/CD Concepts',
      content: (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">What is Continuous Integration?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Continuous Integration (CI) is a development practice where developers frequently integrate their code changes into a central repository. 
              Each integration is automatically built and tested to detect integration errors as quickly as possible.
            </p>
            <Alert type="info" title="Key Benefits" message="Catch bugs early, reduce integration issues, faster development cycles, improved code quality" />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">What is Continuous Delivery?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Continuous Delivery (CD) extends CI by automatically preparing code changes for release to production. 
              Builds are automatically tested and deployed to staging environments, ready for production deployment at any time.
            </p>
            <Alert type="info" title="Key Benefits" message="Faster releases, reduced risk, reliable deployments, automated testing, staging environments" />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Continuous Deployment</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Continuous Deployment (also CD) takes it one step further - every change that passes all tests is automatically deployed to production.
              No manual approval needed (though many organizations require manual gates for safety).
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">CI/CD Pipeline Example</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">A typical pipeline flow:</p>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm space-y-2">
              <div>Code Push → Trigger Pipeline</div>
              <div>↓</div>
              <div>Build (Compile Code)</div>
              <div>↓</div>
              <div>Unit Tests</div>
              <div>↓</div>
              <div>Integration Tests</div>
              <div>↓</div>
              <div>Deploy to Staging</div>
              <div>↓</div>
              <div>Smoke Tests</div>
              <div>↓</div>
              <div>Deploy to Production</div>
            </div>
          </Card>
        </div>
      )
    },
    {
      id: 'jobs',
      label: 'Jobs & Pipelines',
      content: (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">What is a Jenkins Job?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Jenkins Job is a repeatable build project or task. Jobs define what work needs to be done, how it's triggered, and what happens during and after execution.
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Job Components:</h4>
                <ul className="list-disc list-inside text-blue-900 dark:text-blue-100 space-y-1">
                  <li>Source Code Management (where code comes from)</li>
                  <li>Build Triggers (when the job runs)</li>
                  <li>Build Steps (what the job does)</li>
                  <li>Post-build Actions (actions after completion)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Job Types</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Freestyle Job</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Most flexible, supports any build step. Good for getting started.</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Pipeline Job</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Defined as code, more structured, supports complex workflows.</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Multibranch Pipeline</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Automatically creates pipelines for each branch in a repository.</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Parametrized Job</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Accepts parameters to customize job execution.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">What is a Jenkins Pipeline?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Pipeline is a suite of plugins that supports implementing and integrating continuous delivery pipelines into Jenkins. 
              It allows defining a complete build process as code, called a Jenkinsfile.
            </p>
            <CodeBlock
              code={`pipeline {
  agent any
  
  stages {
    stage('Build') {
      steps {
        echo 'Building...'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying...'
      }
    }
  }
}`}
              language="groovy"
              title="Example Declarative Pipeline"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Pipeline Advantages</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Code-based: Pipeline definition can be versioned and reviewed</li>
              <li>Durable: Pipelines survive Jenkins restarts</li>
              <li>Pausable: Pipelines can pause and wait for input</li>
              <li>Complex orchestration: Supports complex build requirements and parallelization</li>
            </ul>
          </Card>
        </div>
      )
    },
    {
      id: 'architecture',
      label: 'Architecture',
      content: (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Master-Agent Architecture</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Jenkins uses a Master-Agent architecture (also called Controller-Node) for distributed builds. 
              The Master schedules jobs while Agents execute them.
            </p>
            <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto mb-4">
              <div className="mb-4">┌─────────────────────────┐</div>
              <div className="mb-4">│   Jenkins Master        │</div>
              <div className="mb-4">│  (Web UI, Scheduling)   │</div>
              <div className="mb-4">└──────────┬──────────────┘</div>
              <div className="mb-4">           │</div>
              <div className="mb-4">   ┌───────┼───────┐</div>
              <div className="mb-4">   ↓       ↓       ↓</div>
              <div className="mb-4">┌─────┐ ┌─────┐ ┌─────┐</div>
              <div className="mb-4">│Agent│ │Agent│ │Agent│</div>
              <div>└─────┘ └─────┘ └─────┘</div>
            </div>
            <Alert
              type="info"
              title="Key Concept"
              message="Master (Controller) manages the system, Agents execute jobs. Agents can be physical machines, VMs, or containers."
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Agent Labels</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Agents can be tagged with labels to indicate their capabilities (OS, tools installed, hardware resources).
              Jobs can be configured to run only on agents with specific labels.
            </p>
            <CodeBlock
              code={`// Configure which agent to run on
pipeline {
  agent {
    label 'docker-enabled'
  }
  
  stages {
    stage('Build in Docker') {
      steps {
        sh 'docker --version'
      }
    }
  }
}`}
              language="groovy"
              title="Agent Label Example"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Jenkins Plugins</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Jenkins functionality is extended through plugins. Plugins provide integration with other tools, 
              additional UI features, authentication mechanisms, and build steps.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold mb-2">Popular Plugins:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-jenkins-50 dark:bg-jenkins-900 p-3 rounded">Git</div>
                <div className="bg-jenkins-50 dark:bg-jenkins-900 p-3 rounded">Docker</div>
                <div className="bg-jenkins-50 dark:bg-jenkins-900 p-3 rounded">Pipeline</div>
                <div className="bg-jenkins-50 dark:bg-jenkins-900 p-3 rounded">Kubernetes</div>
                <div className="bg-jenkins-50 dark:bg-jenkins-900 p-3 rounded">Blue Ocean</div>
                <div className="bg-jenkins-50 dark:bg-jenkins-900 p-3 rounded">Email</div>
                <div className="bg-jenkins-50 dark:bg-jenkins-900 p-3 rounded">GitHub</div>
                <div className="bg-jenkins-50 dark:bg-jenkins-900 p-3 rounded">Slack</div>
              </div>
            </div>
          </Card>
        </div>
      )
    }
  ];

  return (
    <Layout sidebar currentPath="/basics">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Jenkins Basics</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Learn the fundamental concepts of Jenkins and CI/CD automation
          </p>
        </div>

        <Tabs items={tabs} defaultTab="ci-cd" />
      </div>
    </Layout>
  );
};
