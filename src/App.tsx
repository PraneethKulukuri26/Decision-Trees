import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import Home from './pages/Home';
import InteractiveTree from './pages/InteractiveTree';
import Quiz from './pages/Quiz';
import RealLifeExamples from './pages/RealLifeExamples';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interactive-tree" element={<InteractiveTree />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/real-life" element={<RealLifeExamples />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 