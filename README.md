# Jenkins Learning Platform

A comprehensive, interactive learning platform for mastering Jenkins from zero to expert level.

## Features

- ✅ **Interactive Learning Modules** - Structured lessons covering Jenkins fundamentals
- ✅ **Hands-On Labs** - Step-by-step guides for real-world Jenkins tasks
- ✅ **Interactive Quizzes** - Test your knowledge at beginner, intermediate, and expert levels
- ✅ **Visual Pipeline Builder** - Design CI/CD pipelines interactively
- ✅ **Code Examples** - Syntax-highlighted Jenkinsfile and Groovy samples
- ✅ **Dark/Light Mode** - Beautiful UI with theme switching
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Advanced Topics** - Shared Libraries, Blue Ocean, pipeline patterns
- ✅ **Troubleshooting Guides** - Solutions for common issues and best practices

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **TailwindCSS** - Styling and responsive design
- **React Router** - Client-side routing
- **Syntax Highlighter** - Code highlighting
- **Lucide Icons** - Beautiful icons

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:3000`

## Project Structure

```
jenkins-learning-platform/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Layout.tsx
│   │   ├── Card.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── Quiz.tsx
│   │   ├── Lab.tsx
│   │   ├── PipelineBuilder.tsx
│   │   ├── Tabs.tsx
│   │   ├── FeatureCard.tsx
│   │   └── Hero.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Basics.tsx
│   │   ├── Installation.tsx
│   │   ├── Labs.tsx
│   │   ├── Quizzes.tsx
│   │   ├── Advanced.tsx
│   │   ├── Builder.tsx
│   │   ├── Sandbox.tsx
│   │   └── Troubleshooting.tsx
│   ├── data/
│   │   ├── quizzes.ts
│   │   └── labs.ts
│   ├── hooks/
│   │   └── useTheme.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Content

### Learning Paths

1. **Jenkins Basics**
   - CI/CD Concepts
   - Jobs and Pipelines
   - Master/Agent Architecture

2. **Installation Labs**
   - Windows Installation
   - Linux Installation
   - Docker Deployment

3. **Hands-On Labs**
   - First Freestyle Job
   - GitHub Integration
   - Jenkinsfile and Pipelines

4. **Advanced Topics**
   - Shared Libraries
   - Blue Ocean UI
   - Pipeline Patterns
   - Best Practices

5. **Quizzes**
   - Beginner Level
   - Intermediate Level
   - Expert Level

6. **Interactive Tools**
   - Pipeline Builder
   - Sandbox Environment

## Features Breakdown

### Interactive Quiz System
- Multiple choice questions
- Instant feedback with explanations
- Score tracking
- Progress visualization

### Hands-On Labs
- Step-by-step instructions
- Code examples
- Expected outputs
- Hints and guidance
- Lab completion tracking

### Pipeline Builder
- Visual stage creation
- Type-based stages (Build, Test, Deploy)
- Simulation execution
- Status visualization

### Code Highlighting
- Syntax highlighting for multiple languages
- Expandable code blocks
- Copy-friendly code blocks

### Theme System
- Dark/Light mode toggle
- System preference detection
- Persistent theme selection

## Customization

### Adding New Quizzes

Edit `src/data/quizzes.ts`:

```typescript
export const quizzes = {
  expert: [
    {
      id: 1,
      question: 'Your question?',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      correct: 1,
      explanation: 'Why this answer is correct'
    }
  ]
};
```

### Adding New Labs

Edit `src/data/labs.ts`:

```typescript
export const labs = {
  handson: [
    {
      id: 1,
      title: 'Lab Title',
      description: 'Lab description',
      steps: [
        {
          id: 1,
          title: 'Step 1',
          description: 'Description',
          instructions: ['Instruction 1', 'Instruction 2'],
          code: 'optional code',
          codeLanguage: 'bash',
          hint: 'optional hint'
        }
      ]
    }
  ]
};
```

## Deployment

### Netlify

```bash
# Build
npm run build

# Deploy the 'dist' folder to Netlify
```

### Vercel

```bash
# Vercel automatically detects the project
# Just push to GitHub and connect to Vercel
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size (~200KB gzipped)
- Lazy loading for images and code
- Efficient re-renders with React best practices
- CSS in Tailwind for minimal overhead

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast mode compatible
- Mobile-friendly touch targets

## Contributing

To add more content:

1. Create new component in `src/components/`
2. Add quiz questions in `src/data/quizzes.ts`
3. Add lab steps in `src/data/labs.ts`
4. Create page in `src/pages/`
5. Update `App.tsx` routes

## License

MIT License - Feel free to use this for learning and teaching.

## Support

For issues, questions, or contributions, please open an issue or submit a pull request.

---

**Happy Learning!** 🚀 Master Jenkins and become an expert in CI/CD automation!
