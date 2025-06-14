import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Certificates from './components/Certificates';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { FaFacebookMessenger, FaChevronUp, FaEnvelope } from 'react-icons/fa';

const AppContent = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

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
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        {/* background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-8">
        {location.pathname === '/' && <Navbar />}
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero"><Hero /></div>
              <div id="about"><About /></div>
              <div id="technologies"><Technologies /></div>
              <div id="certificates"><Certificates /></div>
              <div id="projects"><Projects /></div>
              <div id="experience"><Experience /></div>
              <div id="testimonials"><Testimonials /></div>
              <div id="contact"><Contact /></div>
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <div className="w-full">
        <Footer />
      </div>

      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="fixed bottom-4 right-4 flex items-center justify-center bg-white/90 backdrop-blur-md text-[#2f2f2f] p-3 md:p-4 rounded-lg shadow-md transition-all duration-300 group overflow-hidden border border-gray-200/50"
            aria-label="Go to Contact Section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ 
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderColor: "rgba(236, 72, 153, 0.2)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative flex items-center gap-2">
              <span className="relative hidden md:inline text-sm font-medium text-[#2f2f2f] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-orange-500 transition-all duration-300 tracking-wider">Contact Me</span>
              <FaEnvelope className="relative text-xl md:text-2xl text-[#2f2f2f] group-hover:text-orange-500 transition-all duration-300" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-16 md:bottom-20 right-4 flex items-center justify-center bg-white/90 backdrop-blur-md text-[#2f2f2f] p-3 md:p-4 rounded-lg shadow-md transition-all duration-300 group overflow-hidden border border-gray-200/50"
            aria-label="Back to Top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ 
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              borderColor: "rgba(236, 72, 153, 0.2)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <FaChevronUp className="relative text-xl md:text-2xl text-[#2f2f2f] group-hover:text-orange-500 transition-all duration-300" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;