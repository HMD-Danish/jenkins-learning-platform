import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Home } from './pages/Home';
import { Basics } from './pages/Basics';
import { Installation } from './pages/Installation';
import { Labs } from './pages/Labs';
import { Quizzes } from './pages/Quizzes';
import { Advanced } from './pages/Advanced';
import { Builder } from './pages/Builder';
import { Sandbox } from './pages/Sandbox';
import { Troubleshooting } from './pages/Troubleshooting';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
