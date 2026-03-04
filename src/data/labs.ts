export const labs = {
  installation: [
    {
      id: 1,
      title: 'Install Jenkins on Windows',
      description: 'Learn how to install Jenkins on a Windows machine.',
      steps: [
        {
          id: 1,
          title: 'Download Jenkins',
          description: 'First, download the Jenkins installer for Windows.',
          instructions: [
            'Visit jenkins.io in your web browser',
            'Click on the "Download" button',
            'Select "Windows" as your operating system',
            'Download the LTS (Long Term Support) version',
            'Note the download location'
          ],
          hint: 'Jenkins requires Java to be installed first. Ensure you have Java 8 or higher.'
        },
        {
          id: 2,
          title: 'Install Java',
          description: 'Jenkins requires Java to run. Install it first.',
          instructions: [
            'Visit java.com',
            'Download Java SE Development Kit (JDK)',
            'Run the installer and follow the wizard',
            'Accept the license agreement',
            'Choose the default installation path',
            'Complete the installation'
          ],
          code: 'java -version',
          codeLanguage: 'bash',
          expectedOutput: 'java version "11.0.x" or higher\nJava(TM) SE Runtime Environment...',
          hint: 'You can verify Java installation by opening Command Prompt and running "java -version"'
        },
        {
          id: 3,
          title: 'Run Jenkins Installer',
          description: 'Execute the Jenkins installer that you downloaded.',
          instructions: [
            'Locate the downloaded Jenkins.msi file',
            'Double-click to run the installer',
            'Follow the installation wizard',
            'Choose the default destination folder (C:\\Program Files\\Jenkins)',
            'Select "Run service as LocalSystem" or specify a user account',
            'Ensure port 8080 is available (or choose a different port)',
            'Complete the installation'
          ],
          hint: 'If you encounter port conflicts, you can change the Jenkins port during installation.'
        },
        {
          id: 4,
          title: 'Access Jenkins Web Interface',
          description: 'Open Jenkins in your web browser and complete initial setup.',
          instructions: [
            'Open your web browser',
            'Navigate to http://localhost:8080',
            'Copy the temporary password from C:\\Program Files\\Jenkins\\secrets\\initialAdminPassword',
            'Paste the password in the web interface',
            'Click "Continue"',
            'Choose "Install suggested plugins" or "Select plugins to install"',
            'Wait for plugins to install',
            'Create your first admin user'
          ],
          code: 'type "C:\\Program Files\\Jenkins\\secrets\\initialAdminPassword"',
          codeLanguage: 'bash',
          hint: 'The initial password is also displayed in the Jenkins console when the service starts.'
        }
      ]
    },
    {
      id: 2,
      title: 'Install Jenkins with Docker',
      description: 'Install Jenkins using Docker for a containerized experience.',
      steps: [
        {
          id: 1,
          title: 'Install Docker',
          description: 'Ensure Docker is installed on your system.',
          instructions: [
            'Visit docker.com and download Docker Desktop',
            'Install Docker following the platform-specific instructions',
            'Verify installation by opening a terminal/command prompt',
            'Run "docker --version" to confirm'
          ],
          code: 'docker --version',
          codeLanguage: 'bash',
          expectedOutput: 'Docker version 20.x.x or higher'
        },
        {
          id: 2,
          title: 'Pull Jenkins Image',
          description: 'Download the official Jenkins Docker image.',
          instructions: [
            'Open a terminal or command prompt',
            'Run the docker pull command',
            'Wait for the image to download',
            'Verify the image is available'
          ],
          code: 'docker pull jenkins/jenkins:lts',
          codeLanguage: 'bash'
        },
        {
          id: 3,
          title: 'Run Jenkins Container',
          description: 'Start a Jenkins container.',
          instructions: [
            'Run the docker run command with port mappings',
            'The container will start in the background',
            'Jenkins will initialize on first run'
          ],
          code: 'docker run -d -p 8080:8080 -p 50000:50000 --name jenkins jenkins/jenkins:lts',
          codeLanguage: 'bash'
        },
        {
          id: 4,
          title: 'Get Initial Admin Password',
          description: 'Retrieve the initial password from the container logs.',
          instructions: [
            'Check the container logs for the initial password',
            'Look for the line starting with "Please use the following password"',
            'Copy the password',
            'Access Jenkins at http://localhost:8080'
          ],
          code: 'docker logs jenkins',
          codeLanguage: 'bash'
        }
      ]
    }
  ],
  handson: [
    {
      id: 1,
      title: 'Create Your First Freestyle Job',
      description: 'Build your first Jenkins job using the Freestyle project type.',
      steps: [
        {
          id: 1,
          title: 'Navigate to Job Creation',
          description: 'Start creating a new job in Jenkins.',
          instructions: [
            'Log in to Jenkins web interface (http://localhost:8080)',
            'Click "New Item" or "Create a job"',
            'Enter a job name (e.g., "My First Job")',
            'Select "Freestyle job"',
            'Click "OK"'
          ]
        },
        {
          id: 2,
          title: 'Configure Job Settings',
          description: 'Set up basic job configuration.',
          instructions: [
            'Add a description (e.g., "My first Jenkins job for testing")',
            'Under "General", keep default settings for now',
            'Leave "Source Code Management" as "None" for this first job',
            'Scroll down to "Build"'
          ]
        },
        {
          id: 3,
          title: 'Add Build Step',
          description: 'Add a simple build step that executes a command.',
          instructions: [
            'Click "Add build step"',
            'Select "Execute shell" (Linux/Mac) or "Execute Windows batch command" (Windows)',
            'In the command box, enter: echo "Hello from Jenkins!"',
            'Optionally add another command: date'
          ],
          code: 'echo "Hello from Jenkins!"\ndate',
          codeLanguage: 'bash'
        },
        {
          id: 4,
          title: 'Save and Run',
          description: 'Save the job and execute it.',
          instructions: [
            'Click "Save" at the bottom',
            'You\'ll be redirected to the job page',
            'Click "Build Now"',
            'Wait for the build to complete',
            'Click on the build number to see detailed logs'
          ]
        },
        {
          id: 5,
          title: 'View Build Results',
          description: 'Examine the build output and logs.',
          instructions: [
            'View the "Console Output" section',
            'Look for your "Hello from Jenkins!" message',
            'Check the build timestamp',
            'Note the "Build took X ms" at the end',
            'Celebrate your first successful Jenkins build!'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'GitHub Integration',
      description: 'Connect Jenkins to a GitHub repository and trigger builds on pushes.',
      steps: [
        {
          id: 1,
          title: 'Prepare GitHub Repository',
          description: 'Create or use an existing GitHub repository.',
          instructions: [
            'Go to github.com and log in',
            'Create a new repository or use an existing one',
            'Note the repository URL (e.g., https://github.com/username/repo.git)',
            'Ensure you have write access to the repository'
          ]
        },
        {
          id: 2,
          title: 'Generate GitHub Personal Access Token',
          description: 'Create a token for Jenkins to authenticate with GitHub.',
          instructions: [
            'Go to GitHub Settings → Developer settings → Personal access tokens',
            'Click "Generate new token"',
            'Give it a descriptive name (e.g., "Jenkins CI")',
            'Select scopes: repo, admin:repo_hook',
            'Click "Generate token"',
            'Copy and save the token securely'
          ],
          hint: 'Keep this token safe! You\'ll only see it once.'
        },
        {
          id: 3,
          title: 'Add GitHub Credentials to Jenkins',
          description: 'Store your GitHub credentials in Jenkins.',
          instructions: [
            'Log in to Jenkins',
            'Go to "Manage Jenkins" → "Manage Credentials"',
            'Click "Add Credentials"',
            'Select Kind: "Username with password"',
            'Username: Your GitHub username',
            'Password: Paste your personal access token',
            'ID: github-token',
            'Click "Create"'
          ]
        },
        {
          id: 4,
          title: 'Create Jenkins Job with GitHub',
          description: 'Create a new job that pulls from GitHub.',
          instructions: [
            'Click "New Item"',
            'Enter job name (e.g., "GitHub-Build")',
            'Select "Freestyle job" and click "OK"',
            'Under "Source Code Management", select "Git"',
            'Paste your GitHub repository URL',
            'In Credentials, select "github-token"',
            'Set Branches to build to "*/main" or "*/master"'
          ]
        },
        {
          id: 5,
          title: 'Set Up Webhook Trigger',
          description: 'Configure GitHub to trigger Jenkins builds on code push.',
          instructions: [
            'In Jenkins job, check "GitHub hook trigger for GITScm polling"',
            'Click "Save"',
            'Go to your GitHub repository',
            'Settings → Webhooks → Add webhook',
            'Payload URL: http://your-jenkins-url:8080/github-webhook/',
            'Content type: application/json',
            'Select "Just the push event"',
            'Click "Add webhook"'
          ],
          hint: 'Make sure your Jenkins URL is publicly accessible or use ngrok for local testing.'
        }
      ]
    },
    {
      id: 3,
      title: 'Jenkinsfile and Pipeline Basics',
      description: 'Create and run your first Declarative Pipeline using a Jenkinsfile.',
      steps: [
        {
          id: 1,
          title: 'Understand Jenkinsfile Basics',
          description: 'Learn the structure of a Jenkinsfile.',
          instructions: [
            'A Jenkinsfile is a text file that defines your entire CI/CD pipeline',
            'It uses Groovy syntax (or Declarative Syntax)',
            'It should be placed in your repository root or specified in Jenkins',
            'It enables "Pipeline as Code" - version control for your pipeline'
          ],
          code: 'pipeline {\n  agent any\n  stages {\n    stage("Build") {\n      steps {\n        echo "Building..."\n      }\n    }\n  }\n}',
          codeLanguage: 'groovy'
        },
        {
          id: 2,
          title: 'Create a Basic Jenkinsfile',
          description: 'Create a Jenkinsfile in your GitHub repository.',
          instructions: [
            'Clone your GitHub repository locally or edit online',
            'Create a new file named "Jenkinsfile"',
            'Paste the basic pipeline structure shown in the code block',
            'Commit and push to your repository'
          ],
          code: 'pipeline {\n  agent any\n  \n  stages {\n    stage("Checkout") {\n      steps {\n        echo "Checking out code..."\n      }\n    }\n    \n    stage("Build") {\n      steps {\n        echo "Building application..."\n        sh "echo Build output here"\n      }\n    }\n    \n    stage("Test") {\n      steps {\n        echo "Running tests..."\n        sh "echo Test output here"\n      }\n    }\n  }\n  \n  post {\n    always {\n      echo "Pipeline completed!"\n    }\n  }\n}',
          codeLanguage: 'groovy'
        },
        {
          id: 3,
          title: 'Create Pipeline Job in Jenkins',
          description: 'Create a job that uses your Jenkinsfile.',
          instructions: [
            'Click "New Item"',
            'Enter job name (e.g., "MyPipeline")',
            'Select "Pipeline" project type',
            'Click "OK"',
            'Under "Pipeline", select "Pipeline script from SCM"',
            'Select SCM: "Git"',
            'Enter repository URL',
            'Set Script Path to "Jenkinsfile"'
          ]
        },
        {
          id: 4,
          title: 'Run Your Pipeline',
          description: 'Execute your first pipeline job.',
          instructions: [
            'Click "Save"',
            'Click "Build Now"',
            'Navigate to the build and click "Console Output"',
            'Watch the pipeline execute stages in sequence',
            'See the echo statements from each stage'
          ]
        },
        {
          id: 5,
          title: 'Enhance Your Pipeline',
          description: 'Add more realistic stages to your pipeline.',
          instructions: [
            'Edit your Jenkinsfile with more stages',
            'Add a Deploy stage that creates build artifacts',
            'Add environment variables at the pipeline level',
            'Use parameters to make your pipeline dynamic',
            'Commit changes and trigger a new build'
          ],
          code: 'pipeline {\n  agent any\n  \n  parameters {\n    string(name: "VERSION", defaultValue: "1.0.0", description: "Build version")\n  }\n  \n  environment {\n    BUILD_ENV = "production"\n  }\n  \n  stages {\n    stage("Prepare") {\n      steps {\n        echo "Version: ${params.VERSION}"\n        echo "Environment: ${BUILD_ENV}"\n      }\n    }\n  }\n}',
          codeLanguage: 'groovy'
        }
      ]
    }
  ]
};
