import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Services from './pages/Services';
import Caregiver from './pages/Caregiver';
import Contact from './pages/Contact';
import Resources from './pages/Resources';

// Helper component to scroll to top on route change
const ScrollToTopHelper = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopHelper />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/services" element={<Services />} />
          <Route path="/caregiver" element={<Caregiver />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;