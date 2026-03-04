import { Layout } from '../components/Layout';
import { Card, Alert } from '../components/Card';
import { Tabs, TabItem } from '../components/Tabs';
import { CodeBlock } from '../components/CodeBlock';

export const Advanced = () => {
  const tabs: TabItem[] = [
    {
      id: 'shared-lib',
      label: 'Shared Libraries',
      content: (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">What are Shared Libraries?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Shared Libraries are reusable Groovy code that can be used across multiple Jenkins pipelines and organizations.
              They promote code reuse, standardization, and maintainability.
            </p>
            <Alert
              type="info"
              title="Benefits"
              message="Code reuse, standardized patterns, easier maintenance, centralized updates, organizational best practices"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Directory Structure</h3>
            <CodeBlock
              code={`shared-library/
├── src/
│   └── com/
│       └── example/
│           └── SharedUtils.groovy
├── vars/
│   ├── greet.groovy
│   ├── notify.groovy
│   └── deploy.groovy
└── resources/
    └── config.json`}
              language="bash"
              title="Shared Library Structure"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Creating Global Variables</h3>
            <CodeBlock
              code={`// vars/notify.groovy
def call(String message) {
  echo "Notification: ${message}"
  // Send to Slack, email, etc.
}

// Usage in pipeline:
// notify("Build completed")`}
              language="groovy"
              title="Global Variable Example"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Using Shared Libraries</h3>
            <CodeBlock
              code={`@Library('my-shared-library') _

pipeline {
  agent any
  
  stages {
    stage('Deploy') {
      steps {
        script {
          // Use shared library variable
          deploy('staging')
          notify("Deployment successful")
        }
      }
    }
  }
}`}
              language="groovy"
              title="Using Shared Library in Pipeline"
            />
          </Card>
        </div>
      )
    },
    {
      id: 'blue-ocean',
      label: 'Blue Ocean',
      content: (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">What is Blue Ocean?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Blue Ocean is a modern UI and UX experience for Jenkins that visualizes CI/CD pipelines more intuitively.
              It provides better visualization of parallel builds, cleaner navigation, and integrated source control.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Pipeline Visualization</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clear visualization of pipeline stages and steps</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Visual Pipeline Editor</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Build pipelines through the visual editor</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Run Details</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Detailed view of each run with status and logs</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Git Integration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Integrated Git/GitHub experience</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Installing Blue Ocean</h3>
            <CodeBlock
              code={`// In Jenkins:
1. Go to Manage Jenkins → Plugin Manager
2. Search for "Blue Ocean"
3. Select the Blue Ocean plugin
4. Click "Install without restart"
5. Restart Jenkins or wait for background installation

// Access Blue Ocean:
// Go to http://jenkins-url/blue`}
              language="bash"
              title="Blue Ocean Installation"
            />
          </Card>
        </div>
      )
    },
    {
      id: 'pipeline-patterns',
      label: 'Pipeline Patterns',
      content: (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Parallel Execution</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Run multiple stages or steps in parallel to reduce total pipeline execution time.
            </p>
            <CodeBlock
              code={`pipeline {
  agent any
  
  stages {
    stage('Test') {
      parallel {
        stage('Unit Tests') {
          steps {
            echo 'Running unit tests...'
          }
        }
        stage('Integration Tests') {
          steps {
            echo 'Running integration tests...'
          }
        }
        stage('Lint') {
          steps {
            echo 'Running linting...'
          }
        }
      }
    }
  }
}`}
              language="groovy"
              title="Parallel Stages Example"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Conditional Execution</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Execute steps only when certain conditions are met.
            </p>
            <CodeBlock
              code={`pipeline {
  agent any
  
  stages {
    stage('Deploy') {
      when {
        branch 'main'
      }
      steps {
        echo 'Deploying to production...'
      }
    }
    
    stage('Notify on Failure') {
      when {
        buildingTag()
      }
      steps {
        echo 'Running on tag...'
      }
    }
  }
}`}
              language="groovy"
              title="Conditional Execution Example"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Input and Approval Gates</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pause the pipeline and wait for manual approval before proceeding.
            </p>
            <CodeBlock
              code={`pipeline {
  agent any
  
  stages {
    stage('Build') {
      steps {
        echo 'Building application...'
      }
    }
    
    stage('Approval') {
      steps {
        input 'Deploy to production?'
      }
    }
    
    stage('Deploy') {
      steps {
        echo 'Deploying to production...'
      }
    }
  }
}`}
              language="groovy"
              title="Approval Gate Example"
            />
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Error Handling</h3>
            <CodeBlock
              code={`pipeline {
  agent any
  
  stages {
    stage('Deploy') {
      steps {
        script {
          try {
            sh 'deploy.sh'
          } catch (Exception e) {
            echo "Deployment failed: ${e.message}"
            currentBuild.result = 'FAILURE'
          }
        }
      }
    }
  }
  
  post {
    always {
      echo 'Cleanup'
    }
    success {
      echo 'Pipeline succeeded!'
    }
    failure {
      echo 'Pipeline failed!'
    }
  }
}`}
              language="groovy"
              title="Error Handling Example"
            />
          </Card>
        </div>
      )
    },
    {
      id: 'best-practices',
      label: 'Best Practices',
      content: (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Pipeline Best Practices</h3>
            <div className="space-y-4">
              <Alert type="success" title="Keep Pipelines Simple" message="Break down complex pipelines into smaller, reusable components using shared libraries." />
              <Alert type="success" title="Use Version Control" message="Store your Jenkinsfile in Git alongside your application code." />
              <Alert type="success" title="Secure Credentials" message="Use Jenkins Credentials Store and credential binding to protect sensitive data. Never hardcode secrets." />
              <Alert type="success" title="Log Everything" message="Add descriptive logging to help debug issues. Archive artifacts and test results." />
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Parallel Execution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Run independent stages in parallel to reduce execution time</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Cache Dependencies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cache build dependencies and libraries to speed up builds</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Fail Fast</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Run fast tests first to fail quickly if there are issues</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Use Agents</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Distribute work across agents to utilize resources efficiently</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Security Best Practices</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold mb-1">⚠️ Never Hardcode Secrets</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Always use Jenkins Credentials Store for passwords, tokens, and keys</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold mb-1">Credential Binding</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Use withCredentials() to safely inject secrets without exposing in logs</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold mb-1">Access Control</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Implement role-based access control (RBAC) for Jenkins</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold mb-1">Audit Logging</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Enable audit logging to track who did what and when</p>
              </div>
            </div>
          </Card>
        </div>
      )
    }
  ];

  return (
    <Layout sidebar currentPath="/advanced">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Advanced Jenkins Topics</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Master advanced concepts for enterprise-scale Jenkins deployments
          </p>
        </div>

        <Tabs items={tabs} defaultTab="shared-lib" />
      </div>
    </Layout>
  );
};
