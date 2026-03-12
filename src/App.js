import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router";

import './App.css';
import './styles.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import ThemeLanding from './components/ThemeLanding/ThemeLanding';
import Resume from './components/Resume/Resume';

function AppContent({ setTheme, theme }) {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  function handleSelectTheme(themeId) {
    setTheme(themeId);
    localStorage.setItem('theme', themeId);
  }

  return (
    <>
      {!isLanding && <Header theme={theme} />}
      <Routes>
        <Route path="/" element={<ThemeLanding onSelectTheme={handleSelectTheme} />} />
        <Route path="/home" element={<Home theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'professional'
  );

  return (
    <div className="App" data-theme={theme}>
      <BrowserRouter>
        <AppContent setTheme={setTheme} theme={theme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
