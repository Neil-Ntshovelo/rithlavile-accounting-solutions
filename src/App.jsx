import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy load components for better performance
const FirstPage = lazy(() => import('./components/FirstPage'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-700"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="bg-zinc-100 min-h-screen flex flex-col">
        <NavBar />
        <ScrollToTop />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<About />} />
              <Route path="/services-items" element={<Services />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;