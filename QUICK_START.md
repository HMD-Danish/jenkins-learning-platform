# ⚡ Quick Reference Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd c:\Users\2472582\Downloads\project
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
Visit: http://localhost:3000
```

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.tsx` | Routes & main app |
| `src/pages/*` | 9 main pages |
| `src/components/*` | 12 reusable components |
| `src/data/quizzes.ts` | Quiz questions |
| `src/data/labs.ts` | Lab content |
| `tailwind.config.js` | Colors & styling |
| `package.json` | Dependencies |

---

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
jenkins: {
  500: '#0b90ff',  // Change these
  600: '#0070e6',  // to your colors
}
```

### Add Quiz Questions
Edit `src/data/quizzes.ts`:
```typescript
{
  id: 1,
  question: "Your question?",
  options: ["A", "B", "C", "D"],
  correct: 1,
  explanation: "Why this is correct"
}
```

### Add Labs
Edit `src/data/labs.ts`:
```typescript
{
  id: 1,
  title: "Lab Title",
  description: "Description",
  steps: [
    {
      id: 1,
      title: "Step 1",
      instructions: ["Do this", "Then this"],
      code: "optional code"
    }
  ]
}
```

### Add Pages
1. Create `src/pages/MyPage.tsx`
2. Add route in `src/App.tsx`:
```typescript
<Route path="/my-page" element={<MyPage />} />
```
3. Add nav link in `src/components/Navbar.tsx`

---

## 🔨 Useful Commands

```bash
# Install packages
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code (if eslint added)
npm run lint
```

---

## 📦 Project Structure

```
project/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── data/           # Quiz & lab data
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Helper functions
│   ├── config/         # Configuration
│   ├── App.tsx         # Main app
│   ├── index.css       # Styles
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML file
├── package.json        # Dependencies
├── vite.config.ts      # Build config
├── tailwind.config.js  # Styling
├── README.md           # Full docs
└── DEPLOYMENT.md       # Deploy guide
```

---

## 🎯 Component Usage Examples

### Card Component
```typescript
<Card className="p-6">
  <h3>Title</h3>
  <p>Content here</p>
</Card>
```

### Alert Component
```typescript
<Alert 
  type="success"
  title="Success!"
  message="Operation completed"
/>
```

### Code Block
```typescript
<CodeBlock
  code="echo 'Hello World'"
  language="bash"
  title="Example"
/>
```

### Quiz Component
```typescript
<Quiz
  questions={quizzes.beginner}
  title="Beginner Quiz"
  onComplete={(score, total) => console.log(score)}
/>
```

### Lab Component
```typescript
<Lab
  title="My Lab"
  description="Lab description"
  steps={steps}
  onComplete={() => console.log("Done!")}
/>
```

---

## 🌈 Tailwind Color Classes

```
Jenkins Blue:    bg-jenkins-500, text-jenkins-600
Success (Green): bg-green-500, text-green-600
Warning (Yellow): bg-yellow-500, text-yellow-600
Error (Red):     bg-red-500, text-red-600
Info (Blue):     bg-blue-500, text-blue-600
Gray:            bg-gray-100 to bg-gray-900
```

---

## 🎨 Theme System

### Dark Mode Toggle
Users can click moon/sun icon in navbar
Theme saved to localStorage
System preference auto-detected

### Apply Dark Class
```html
<div className="dark:bg-gray-900">
  Light: white background
  Dark: gray-900 background
</div>
```

---

## 📱 Responsive Breakpoints

```typescript
// Tailwind breakpoints
sm: 640px   (phones)
md: 768px   (tablets)
lg: 1024px  (desktops)
xl: 1280px  (large screens)

// Usage:
<div className="hidden md:block"> {/* Hidden on mobile */}
<div className="md:grid-cols-2"> {/* 2 cols on tablet+ */}
```

---

## 🔐 Environment Variables

Create `.env.local`:
```
VITE_APP_TITLE=Jenkins Learning Platform
VITE_APP_VERSION=1.0.0
```

Access in code:
```typescript
const title = import.meta.env.VITE_APP_TITLE
```

---

## 📊 Data Structure Examples

### Quiz Question Format
```typescript
{
  id: number,
  question: string,
  options: string[],
  correct: number,  // Index of correct answer
  explanation: string
}
```

### Lab Step Format
```typescript
{
  id: number,
  title: string,
  description: string,
  instructions: string[],
  code?: string,
  codeLanguage?: string,
  hint?: string,
  expectedOutput?: string
}
```

---

## 🚀 Deployment Quick Links

### Netlify (Easiest)
1. Push to GitHub
2. Connect repo at netlify.com
3. Auto-deploy on push!

### Vercel
1. Connect GitHub repo
2. Auto-setup Vite config
3. Deploy in 1 click!

### GitHub Pages
```bash
npm run deploy
```

See `DEPLOYMENT.md` for full details

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Build Fails
```bash
rm -rf node_modules
npm install
npm run build
```

### Styles Not Loading
```bash
# Rebuild Tailwind
npm run dev
```

### Can't Find Module
Check import path matches file location (case-sensitive on Linux/Mac)

---

## 💡 Pro Tips

1. **Use TypeScript** - IDE autocomplete helps
2. **Test Locally** - Always test before deploying
3. **Check Responsive** - Test on mobile size
4. **Dark Mode** - Test both themes
5. **Browser Compat** - Test on Chrome, Firefox, Safari
6. **Accessibility** - Use keyboard navigation
7. **Performance** - Check dev tools throttling

---

## 📚 Quick Links

- **Full Docs:** See `README.md`
- **Deployment:** See `DEPLOYMENT.md`
- **Navigation:** See `NAVIGATION_MAP.md`
- **File List:** See `FILE_INVENTORY.md`
- **Build Info:** See `BUILD_SUMMARY.md`

---

## 🎯 Content Editing

### To Add New Topic
1. Create component in `src/components/`
2. Create page in `src/pages/`
3. Add route in `src/App.tsx`
4. Add nav link
5. Add content/data as needed

### To Modify Existing Content
1. Edit quiz questions: `src/data/quizzes.ts`
2. Edit labs: `src/data/labs.ts`
3. Edit pages directly: `src/pages/*.tsx`
4. Edit components: `src/components/*.tsx`

---

## ✨ Feature Highlights

- ✅ Full React + TypeScript
- ✅ Dark/Light Mode
- ✅ Mobile Responsive
- ✅ Quiz System
- ✅ Labs with Steps
- ✅ Code Highlighting
- ✅ Pipeline Builder
- ✅ 9 Pages
- ✅ 12 Components
- ✅ 100+ Code Examples
- ✅ Production Ready

---

## 🎓 Learning Resources

Inside the app:
- Basics module: Learn fundamentals
- Labs module: Hands-on practice
- Quizzes: Test knowledge
- Advanced: Deep dive topics
- Troubleshooting: Common issues

---

## 📞 Support

**Having issues?**
1. Check `README.md` for setup
2. Review `BUILD_SUMMARY.md` for overview
3. See `DEPLOYMENT.md` for deploy issues
4. Check component code (well-commented)
5. Check browser console for errors

---

## 🚀 Next Steps

1. **Run the project:**
   ```bash
   npm install && npm run dev
   ```

2. **Explore the app** at http://localhost:3000

3. **Customize as needed:**
   - Add your content
   - Change colors
   - Add more pages

4. **Deploy to web:**
   - See DEPLOYMENT.md
   - Choose platform (Netlify recommended)

5. **Share & Enjoy!**
   - Share with team
   - Use for training
   - Teach Jenkins to others

---

**You're all set!** 🎉 Everything is ready to run.

Start with: `npm install && npm run dev`
