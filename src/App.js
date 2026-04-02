import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router";

import './App.css';
import './styles.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Dashboard from './components/Dashboard/Dashboard';
import headerImage from './res/header-image.jpg';

function AppContent() {
  const location = useLocation();
  const compactHeaderRoutes = ["/resume", "/about-me"];
  const headerVariant = compactHeaderRoutes.includes(location.pathname)
    ? "compact"
    : "hero";

  const appStyle =
    headerVariant === "compact"
      ? {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.42)), url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 30%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }
      : undefined;

  return (
    <div className="App" style={appStyle}>
      <Header variant={headerVariant} />
      <main className={`page-shell page-shell-${headerVariant}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about-me" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
