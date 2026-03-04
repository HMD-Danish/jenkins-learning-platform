export const quizzes = {
  beginner: [
    {
      id: 1,
      question: 'What is Jenkins?',
      options: [
        'A web server',
        'A continuous integration and continuous delivery automation server',
        'A programming language',
        'A database management tool'
      ],
      correct: 1,
      explanation: 'Jenkins is an open-source automation server commonly used for continuous integration and continuous delivery (CI/CD).'
    },
    {
      id: 2,
      question: 'What is CI/CD?',
      options: [
        'Computer and Internet Design',
        'Continuous Integration and Continuous Deployment',
        'Code Integration Database',
        'Client-side Interactive Design'
      ],
      correct: 1,
      explanation: 'CI/CD stands for Continuous Integration and Continuous Deployment, which automates testing and deployment of code.'
    },
    {
      id: 3,
      question: 'What is a Jenkins Job?',
      options: [
        'A scheduled task that performs a specific project-related task',
        'An employment position at Jenkins Inc.',
        'A manual code review process',
        'A database query'
      ],
      correct: 0,
      explanation: 'A Jenkins Job is a repeatable build project or task that Jenkins orchestrates, such as building, testing, or deploying code.'
    },
    {
      id: 4,
      question: 'What is a Jenkins Pipeline?',
      options: [
        'A physical infrastructure component',
        'A series of events or jobs that are chained together',
        'A database query language',
        'A version control system'
      ],
      correct: 1,
      explanation: 'A Jenkins Pipeline is a series of events or jobs that are chained together to achieve a specific outcome, like building and deploying an application.'
    },
    {
      id: 5,
      question: 'What file defines a Jenkins Pipeline as code?',
      options: [
        'Jenkinsconfig',
        'Jenkinsfile',
        'Pipeline.xml',
        'jenkins.json'
      ],
      correct: 1,
      explanation: 'A Jenkinsfile is a text file that defines the entire Jenkins Pipeline as code, allowing version control and easy sharing.'
    }
  ],
  intermediate: [
    {
      id: 1,
      question: 'What is the Master-Agent architecture in Jenkins?',
      options: [
        'A primary server and remote machines used for executing jobs',
        'A customer-server relationship',
        'Two Jenkins instances running on the same machine',
        'A backup system configuration'
      ],
      correct: 0,
      explanation: 'Jenkins Master-Agent (or Controller-Node) architecture allows the master Jenkins server to delegate work to remote agents/nodes for distributed builds.'
    },
    {
      id: 2,
      question: 'What is a Jenkins Plugin?',
      options: [
        'A physical connection interface',
        'A software component that extends Jenkins functionality',
        'A security certificate',
        'A logging mechanism'
      ],
      correct: 1,
      explanation: 'A Jenkins Plugin is a software component that extends the functionality of Jenkins, such as adding new build steps, credentials providers, or integrations.'
    },
    {
      id: 3,
      question: 'What are Declarative and Scripted Pipelines?',
      options: [
        'The same thing with different names',
        'Declarative is more structured with limited flexibility, Scripted offers more flexibility using Groovy scripting',
        'Scripted is for servers, Declarative is for agents',
        'They are for different programming languages'
      ],
      correct: 1,
      explanation: 'Declarative Pipeline is a structured, domain-specific language (DSL) for defining pipelines, while Scripted Pipeline offers more flexibility using Groovy scripting.'
    },
    {
      id: 4,
      question: 'What is a webhook in Jenkins?',
      options: [
        'A physical cable connection',
        'An automated trigger from external systems like GitHub to run Jenkins jobs',
        'A Jenkins plugin for webhooks',
        'A communication protocol'
      ],
      correct: 1,
      explanation: 'A webhook is an automated trigger mechanism where external systems (like GitHub) can notify Jenkins to start a job when certain events occur.'
    },
    {
      id: 5,
      question: 'What is Blue Ocean in Jenkins?',
      options: [
        'A data visualization tool',
        'A modern UI and UX experience for Jenkins that visualizes CI/CD pipelines',
        'A cloud service',
        'A plugin for email notifications'
      ],
      correct: 1,
      explanation: 'Blue Ocean is a modern UI and visualization platform for Jenkins that provides a more intuitive experience for CI/CD pipelines, with better visualizations and UX.'
    }
  ],
  expert: [
    {
      id: 1,
      question: 'What are Jenkins Shared Libraries?',
      options: [
        'A local file storage system',
        'Reusable code that can be shared across multiple pipelines and organizations',
        'A database library',
        'A security feature'
      ],
      correct: 1,
      explanation: 'Jenkins Shared Libraries are reusable Groovy code that can be shared across multiple pipelines and organizations, promoting code reuse and standardization.'
    },
    {
      id: 2,
      question: 'How do you implement multi-branch pipelines in Jenkins?',
      options: [
        'Create separate jobs for each branch',
        'Use the Multibranch Pipeline project type to automatically create jobs based on branches in your repo',
        'Use a single Jenkinsfile for all branches',
        'Configure each agent differently'
      ],
      correct: 1,
      explanation: 'Multibranch Pipeline automatically creates and manages pipelines for each branch in your repository, allowing CI/CD for multiple branches seamlessly.'
    },
    {
      id: 3,
      question: 'What are Jenkins Agent Labels and why use them?',
      options: [
        'Tags for naming jobs',
        'Labels that identify agent capabilities, allowing jobs to run only on agents with required resources/software',
        'A security mechanism',
        'A reporting feature'
      ],
      correct: 1,
      explanation: 'Agent Labels allow you to tag agents with specific capabilities (OS, tools, resources) and configure jobs to run only on agents matching those labels.'
    },
    {
      id: 4,
      question: 'What is Jenkins Configuration as Code (JCasC)?',
      options: [
        'Manual configuration through the UI',
        'A way to define Jenkins configuration in YAML files for version control and reproducible setups',
        'A security framework',
        'A backup mechanism'
      ],
      correct: 1,
      explanation: 'Jenkins Configuration as Code (JCasC) allows you to define Jenkins configuration using YAML files, enabling version control, reproducibility, and infrastructure as code practices.'
    },
    {
      id: 5,
      question: 'How do you secure Jenkins credentials and secrets?',
      options: [
        'Store them in plain text in Jenkinsfile',
        'Use Jenkins Credentials Store with encryption and credential binding to protect sensitive data',
        'Use environment variables openly',
        'Store them in version control'
      ],
      correct: 1,
      explanation: 'Jenkins provides a Credentials Store with encryption capabilities. Use credential binding in pipelines to safely inject secrets without exposing them in logs or files.'
    }
  ]
};
