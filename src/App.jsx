import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { FaFacebookMessenger, FaChevronUp } from 'react-icons/fa';

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
          {/* background */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <div id="hero"><Hero /></div>
                <div id="technologies"><Technologies /></div>
                <div id="projects"><Projects /></div>
                <div id="experience"><Experience /></div>
                <div id="contact"><Contact /></div>
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <AnimatePresence>
          {showButton && (
            <motion.a
              href="https://m.me/elirbautista"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 flex items-center bg-[#2f2f2f] text-white p-2 md:p-3 md:px-5 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
              aria-label="Message me on Messenger"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <span className="hidden md:inline">Message me</span>
              <FaFacebookMessenger className="text-2xl md:ml-2" />
            </motion.a>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showButton && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-16 md:bottom-20 right-4 flex items-center bg-[#2f2f2f] text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
              aria-label="Back to Top"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronUp className="text-2xl" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;