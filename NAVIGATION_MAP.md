# 🗺️ Jenkins Learning Platform - Navigation Map

## Site Structure

```
Jenkins Learning Platform
│
├── 🏠 HOME (/)
│   ├── What is Jenkins?
│   ├── Why Learn Jenkins?
│   ├── How This Platform Works
│   └── Quick Start Buttons
│
├── 📚 BASICS (/basics)
│   └── Tabbed Content:
│       ├── CI/CD Concepts
│       │   ├── What is Continuous Integration?
│       │   ├── What is Continuous Delivery?
│       │   └── CI/CD Pipeline Example
│       ├── Jobs & Pipelines
│       │   ├── What is a Jenkins Job?
│       │   ├── Job Types (Freestyle, Pipeline, etc.)
│       │   └── What is a Pipeline?
│       └── Architecture
│           ├── Master-Agent Architecture
│           ├── Agent Labels
│           └── Jenkins Plugins
│
├── 💾 INSTALLATION (/installation)
│   ├── Windows Installation
│   ├── Linux Installation
│   └── Docker Installation
│
├── 🔬 LABS (/labs)
│   ├── Installation Labs
│   │   ├── Install Jenkins on Windows (4 steps)
│   │   └── Install Jenkins with Docker (4 steps)
│   └── Hands-On Labs
│       ├── Create Your First Freestyle Job (5 steps)
│       ├── GitHub Integration (5 steps)
│       └── Jenkinsfile and Pipeline Basics (5 steps)
│
├── 🎯 QUIZZES (/quizzes)
│   ├── Beginner Quiz (5 questions)
│   │   ├── What is Jenkins?
│   │   ├── What is CI/CD?
│   │   ├── What is a Jenkins Job?
│   │   ├── What is a Pipeline?
│   │   └── What file defines a Pipeline?
│   ├── Intermediate Quiz (5 questions)
│   │   ├── Master-Agent Architecture
│   │   ├── Plugins
│   │   ├── Declarative vs Scripted
│   │   ├── Webhooks
│   │   └── Blue Ocean
│   └── Expert Quiz (5 questions)
│       ├── Shared Libraries
│       ├── Multibranch Pipelines
│       ├── Agent Labels
│       ├── Configuration as Code
│       └── Security & Credentials
│
├── 🚀 ADVANCED (/advanced)
│   ├── Shared Libraries
│   │   ├── What are Shared Libraries?
│   │   ├── Directory Structure
│   │   ├── Creating Global Variables
│   │   └── Using Shared Libraries
│   ├── Blue Ocean
│   │   ├── What is Blue Ocean?
│   │   ├── Key Features
│   │   └── Installation
│   ├── Pipeline Patterns
│   │   ├── Parallel Execution
│   │   ├── Conditional Execution
│   │   ├── Approval Gates
│   │   └── Error Handling
│   └── Best Practices
│       ├── Pipeline Best Practices
│       ├── Performance Optimization
│       ├── Security Hardening
│       └── Maintenance Checklist
│
├── 🔨 PIPELINE BUILDER (/builder)
│   ├── Interactive Stage Creation
│   ├── Stage Types (Build, Test, Deploy)
│   ├── Visual Pipeline Flow
│   ├── Run Simulation
│   └── Status Tracking
│
├── 🧪 SANDBOX (/sandbox)
│   ├── Job Simulator
│   ├── Pipeline Simulator
│   ├── Configuration Sandbox
│   └── Integration Simulator
│
└── 🐛 TROUBLESHOOTING (/troubleshooting)
    ├── Common Issues
    │   ├── Jenkins Won't Start
    │   ├── Build Failed with No Error
    │   ├── Out of Memory Error
    │   └── GitHub Webhook Not Triggering
    └── Best Practices & Maintenance
        ├── Pipeline Best Practices
        ├── Resource Management
        ├── Security Hardening
        └── Maintenance Checklist
```

---

## 🧭 Navigation Features

### Top Navigation (Navbar)
```
[Jenkins Pro Logo] | Home | Basics | Installation | Labs | Advanced | Quizzes | [Moon/Sun Theme] [Menu]
```

### Side Navigation (Desktop Only)
```
Learning
├── Home
├── Basics
└── Installation

Practice
├── Hands-on Labs
├── Interactive Sandbox
└── Pipeline Builder

Assessment
├── Quizzes
└── Troubleshooting
```

### Mobile Navigation
- Hamburger menu (3 lines icon)
- Slide-out mobile menu
- All navigation links accessible
- Dark mode toggle in navbar

---

## 📊 Content Types on Each Page

### Home
- Hero Section
- 6 Feature Cards
- Why Learn Jenkins (3 reasons)
- How It Works (4 steps)
- Call-to-Action Buttons

### Basics
- Tabbed Interface
- Multiple Content Sections
- Code Examples
- Alert Boxes
- Explanations

### Installation
- Overview Cards
- 3 Installation Options
- Prerequisites Alert

### Labs
- Lab Selection Grid
- Progress Tracking
- Step-by-Step Interface
- Code Examples
- Hints System

### Quizzes
- 3 Quiz Cards
- Difficulty Levels
- Score Tracking
- Question Interface
- Instant Feedback

### Advanced
- Tabbed Navigation
- Code Blocks
- Best Practices Lists
- Alerts & Warnings

### Pipeline Builder
- Visual Designer
- Stage Controls
- Live Simulation
- Status Indicators

### Sandbox
- 4 Simulator Cards
- Call-to-Action Buttons

### Troubleshooting
- Tabbed Content
- Problem/Solution Format
- Checklists
- Code Examples

---

## 🎯 User Journey Examples

### Beginner Learning Path
```
1. Home → Learn what Jenkins is
2. Basics → Understand CI/CD concepts
3. Labs → Create first freestyle job
4. Quizzes → Take beginner quiz
5. Installation → Setup Jenkins locally
```

### Intermediate Path
```
1. Basics → Review concepts
2. Labs → GitHub integration
3. Labs → Jenkinsfile basics
4. Advanced → Study patterns
5. Quizzes → Take intermediate quiz
```

### Expert Path
```
1. Advanced → Shared Libraries
2. Advanced → Blue Ocean
3. Advanced → Pipeline Patterns
4. Advanced → Security & Best Practices
5. Quizzes → Take expert quiz
```

---

## 🔄 Internal Navigation

### Links Between Pages
- Home has buttons to → Basics, Labs, Quizzes
- Basics links to → Labs, Advanced
- Labs links back to → Quizzes
- Quizzes links to → Troubleshooting
- Advanced links to → Builder
- All pages have navbar and sidebar navigation

### Breadcrumb Navigation
- Back buttons on labs
- Clear page titles
- Context-aware sidebar highlighting

---

## 📱 Responsive Behavior

### Mobile (< 768px)
```
[Logo] [Menu Icon] [Dark Mode]
Menu slides from left
Single column layout
Full-width cards
Stacked buttons
```

### Tablet (768px - 1024px)
```
[Logo] [Nav Links] [Dark Mode] [Menu]
Sidebar shows on left
Two-column grid
Adjusted spacing
```

### Desktop (> 1024px)
```
[Logo] [Nav Links...] [Dark Mode]
Sidebar always visible
Multi-column layout
Full spacing
Optimal readability
```

---

## 🎨 Visual Elements on Each Page

### Consistent Elements
- Navbar (all pages)
- Sidebar (desktop, except home)
- Footer spacing
- Consistent color scheme
- Dark/light mode support

### Page-Specific Elements
- **Home:** Hero section, feature cards
- **Basics:** Tabs, code blocks, alerts
- **Labs:** Step progress, hints
- **Quizzes:** Question interface, scoring
- **Advanced:** Tabs, code examples
- **Builder:** Visual pipeline, controls
- **Sandbox:** Simulator cards
- **Troubleshooting:** Problem/solution layout

---

## ⌨️ Keyboard Navigation

- Tab: Navigate through interactive elements
- Enter: Activate buttons and links
- Escape: Close mobile menu
- Arrow keys: Navigate through options (quizzes, etc.)

---

## 🔍 Quick Access

### From Home
- Featured Topics (6 cards)
- CTA Buttons (Start Learning, Jump to Labs, Take Quizzes)
- Navbar Links

### From Any Page
- Navbar: Jump to any main section
- Sidebar: Quick navigation
- Back buttons: Return to previous page
- Mobile menu: All sections accessible

---

## 📊 Page Statistics

| Page | Sections | Interactive | Content Type |
|------|----------|-------------|--------------|
| Home | 5 | 4 | Overview |
| Basics | 3 | 3 | Educational |
| Installation | 1 | 0 | Overview |
| Labs | 2 | 6 | Interactive |
| Quizzes | 3 | 3 | Interactive |
| Advanced | 4 | 4 | Educational |
| Builder | 1 | 1 | Interactive |
| Sandbox | 4 | 4 | Interactive |
| Troubleshooting | 2 | 2 | Reference |

---

## 🎓 Learning Path Indicators

- Progress bars on labs
- Score displays on quizzes
- Completion checkmarks
- Difficulty badges on quizzes
- Category labels on labs

---

## 🚀 Call-to-Action Elements

- Start Learning buttons
- Take Quiz buttons
- Start Lab buttons
- Build Pipeline buttons
- Explore buttons

---

**Navigation is intuitive, consistent, and user-friendly!** ✨
