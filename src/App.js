import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router";

import './App.css';
import './styles.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Dashboard from './components/Dashboard/Dashboard';

function AppContent() {
  const location = useLocation();
  const compactHeaderRoutes = ["/resume", "/dashboard"];
  const headerVariant = compactHeaderRoutes.includes(location.pathname)
    ? "compact"
    : "hero";

  return (
    <>
      <Header variant={headerVariant} />
      <main className={`page-shell page-shell-${headerVariant}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
