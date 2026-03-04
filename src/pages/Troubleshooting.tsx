import { Layout } from '../components/Layout';
import { Card, Alert } from '../components/Card';
import { Tabs, TabItem } from '../components/Tabs';
import { CodeBlock } from '../components/CodeBlock';

export const Troubleshooting = () => {
  const tabs: TabItem[] = [
    {
      id: 'common-issues',
      label: 'Common Issues',
      content: (
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Jenkins Won't Start</h3>
            <Alert type="error" title="Issue" message="Jenkins service fails to start or crashes immediately" />
            <div className="mt-4 space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Possible Causes:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Java not installed or wrong version</li>
                  <li>Port 8080 already in use</li>
                  <li>Insufficient disk space</li>
                  <li>Corrupted Jenkins configuration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Check Java: java -version</li>
                  <li>Change port in jenkins.yaml or jenkins.xml</li>
                  <li>Check disk space and cleanup if needed</li>
                  <li>Delete JENKINS_HOME/war directory and restart</li>
                </ol>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Build Failed with No Error</h3>
            <Alert type="error" title="Issue" message="Job failed but error messages are unclear" />
            <div className="mt-4 space-y-3">
              <h4 className="font-semibold mb-2">Debugging Steps:</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Check Console Output for full logs</li>
                <li>Enable verbose logging with -v or --debug flags</li>
                <li>Check Jenkins logs: JENKINS_HOME/logs/</li>
                <li>Run the build step manually to isolate issues</li>
                <li>Check system resources (CPU, memory, disk)</li>
              </ol>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Out of Memory Error</h3>
            <Alert type="error" title="Issue" message="Jenkins running out of memory: java.lang.OutOfMemoryError" />
            <div className="mt-4 space-y-3">
              <h4 className="font-semibold mb-2">Solution:</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Increase Jenkins heap memory:</p>
              <CodeBlock
                code={`# Linux/Mac - Edit jenkins.sh or jenkins
export JENKINS_JAVA_OPTIONS="-Xmx2048m -Xms512m"

# Windows - Edit jenkins.xml
<arguments>-Xmx2048m -Xms512m -jar "%BASE%\\jenkins.war" --httpPort=8080</arguments>`}
                language="bash"
                title="Increase Heap Memory"
              />
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">GitHub Webhook Not Triggering</h3>
            <Alert type="error" title="Issue" message="GitHub pushes don't trigger Jenkins builds" />
            <div className="mt-4 space-y-3">
              <h4 className="font-semibold mb-2">Debugging:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Verify webhook URL is publicly accessible</li>
                <li>Check GitHub webhook deliveries: Repository → Settings → Webhooks</li>
                <li>Verify Jenkins has GitHub credentials configured</li>
                <li>Check job has "GitHub hook trigger for GITScm polling" enabled</li>
                <li>Verify branch name matches (main vs master)</li>
              </ol>
            </div>
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
              <Alert
                type="success"
                title="Keep Stages Fast"
                message="Long running stages slow down feedback. Parallelize tests and use caching."
              />
              <Alert
                type="success"
                title="Fail Fast"
                message="Run fast checks first to provide quick feedback on obvious failures."
              />
              <Alert
                type="success"
                title="Minimal Logging"
                message="Too much logging makes logs hard to read. Log what matters."
              />
              <Alert
                type="success"
                title="Proper Error Handling"
                message="Use try-catch blocks and proper error handling in groovy scripts."
              />
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Resource Management</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Disk Space</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor and clean old builds regularly. Configure build history</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Memory</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor heap usage and increase if needed. Disable unused plugins</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Network</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Limit concurrent builds to prevent resource exhaustion</p>
              </div>
              <div className="border-l-4 border-jenkins-600 pl-4">
                <h4 className="font-bold mb-1">Scalability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Use agents to distribute work as load increases</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Security Hardening</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold mb-1">⚠️ Enable Security Realm</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Configure authentication (LDAP, GitHub, etc.)</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold mb-1">Authorization Strategy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Implement role-based access control (RBAC)</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold mb-1">CSRF Protection</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Enable CSRF token protection in Jenkins</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-bold mb-1">Secrets Management</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Use Jenkins Credentials Store and vault for secrets</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-4">Maintenance Checklist</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="c1" />
                <label htmlFor="c1" className="text-gray-700 dark:text-gray-300">Backup JENKINS_HOME regularly</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="c2" />
                <label htmlFor="c2" className="text-gray-700 dark:text-gray-300">Update Jenkins and plugins regularly</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="c3" />
                <label htmlFor="c3" className="text-gray-700 dark:text-gray-300">Review and remove old jobs</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="c4" />
                <label htmlFor="c4" className="text-gray-700 dark:text-gray-300">Monitor disk space and logs</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="c5" />
                <label htmlFor="c5" className="text-gray-700 dark:text-gray-300">Test disaster recovery procedures</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="c6" />
                <label htmlFor="c6" className="text-gray-700 dark:text-gray-300">Review security configurations</label>
              </div>
            </div>
          </Card>
        </div>
      )
    }
  ];

  return (
    <Layout sidebar currentPath="/troubleshooting">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Troubleshooting & Best Practices</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Solutions for common issues and guidance for production Jenkins
          </p>
        </div>

        <Tabs items={tabs} defaultTab="common-issues" />
      </div>
    </Layout>
  );
};
