
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full bg-white selection:bg-red-600 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <div key="content" className="relative">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Schedule />
              <Tracks />
              <Prizes />
              <Sponsors />
              <FAQ />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
