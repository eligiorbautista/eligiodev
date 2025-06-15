import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setIsScrolled(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
            setActiveSection(id);
            document.body.style.overflow = 'unset';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projects', 'technologies', 'experience', 'certificates', 'testimonials', 'contact'];
            const scrollPosition = window.scrollY + 100;
            const heroSection = document.getElementById('hero');
            
            if (heroSection && scrollPosition < heroSection.offsetHeight) {
                setActiveSection('');
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClass = (section) => `
        relative block py-2 md:py-0 transition-all duration-300 text-base md:text-lg
        ${activeSection === section ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 font-medium' : 'text-[#2f2f2f]'}
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
        after:bg-gradient-to-r after:from-pink-500 after:to-orange-500 after:transition-all after:duration-300
        hover:after:w-full hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500
    `;

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between py-3 md:py-4 px-4 md:px-8">
                <div className="flex items-center">
                    <a href="/" aria-label="Home" className="text-2xl md:text-4xl font-bold text-[#2f2f2f] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                        EB
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu" className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                        {isOpen ? <FaTimes className="text-xl md:text-2xl text-[#2f2f2f]" /> : <FaBars className="text-xl md:text-2xl text-[#2f2f2f]" />}
                    </button>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => handleScroll('about')} className={navLinkClass('about')}>About</button>
                    <button onClick={() => handleScroll('technologies')} className={navLinkClass('technologies')}>Technologies</button>
                    <button onClick={() => handleScroll('certificates')} className={navLinkClass('certificates')}>Certificates</button>
                    <button onClick={() => handleScroll('projects')} className={navLinkClass('projects')}>Projects</button>
                    <button onClick={() => handleScroll('experience')} className={navLinkClass('experience')}>Experience</button>
                    <button onClick={() => handleScroll('testimonials')} className={navLinkClass('testimonials')}>Testimonials</button>
                    <button onClick={() => handleScroll('contact')} className={navLinkClass('contact')}>Contact</button>
                </div>
                <div className="hidden md:flex gap-6 text-xl">
                    <a href="https://www.facebook.com/elirbautista" target='_blank' rel='noopener noreferrer' aria-label="Facebook" 
                       className="text-[#2f2f2f] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                        <FaFacebook className="text-lg md:text-xl" />
                    </a>
                    <a href="https://github.com/eligiorbautista" target='_blank' rel='noopener noreferrer' aria-label="GitHub"
                       className="text-[#2f2f2f] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                        <FaGithub className="text-lg md:text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/eligio-bautista-iii-50473127b" target='_blank' rel='noopener noreferrer' aria-label="LinkedIn"
                       className="text-[#2f2f2f] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                        <FaLinkedin className="text-lg md:text-xl" />
                    </a>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="fixed top-0 left-0 right-0 h-screen bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 text-xl md:hidden z-[100]"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button onClick={toggleMenu} aria-label="Close Menu" 
                                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                                <FaTimes className="text-2xl text-[#2f2f2f]" />
                            </button>
                            <div className="flex flex-col items-center gap-6">
                                <button onClick={() => handleScroll('about')} aria-label="About" className={navLinkClass('about')}>About</button>
                                <button onClick={() => handleScroll('technologies')} aria-label="Technologies" className={navLinkClass('technologies')}>Technologies</button>
                                <button onClick={() => handleScroll('certificates')} aria-label="Certificates" className={navLinkClass('certificates')}>Certificates</button>
                                <button onClick={() => handleScroll('projects')} aria-label="Projects" className={navLinkClass('projects')}>Projects</button>
                                <button onClick={() => handleScroll('experience')} aria-label="Experience" className={navLinkClass('experience')}>Experience</button>
                                <button onClick={() => handleScroll('testimonials')} aria-label="Testimonials" className={navLinkClass('testimonials')}>Testimonials</button>
                                <button onClick={() => handleScroll('contact')} aria-label="Contact" className={navLinkClass('contact')}>Contact</button>
                            </div>
                            <div className="flex gap-4 md:gap-6 mt-4 md:mt-6">
                                <a href="https://www.facebook.com/elirbautista" target='_blank' rel='noopener noreferrer' aria-label="Facebook"
                                   className="text-[#2f2f2f] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                                    <FaFacebook className="text-lg md:text-xl" />
                                </a>
                                <a href="https://github.com/eligiorbautista" target='_blank' rel='noopener noreferrer' aria-label="GitHub"
                                   className="text-[#2f2f2f] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                                    <FaGithub className="text-lg md:text-xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/eligio-bautista-iii-50473127b" target='_blank' rel='noopener noreferrer' aria-label="LinkedIn"
                                   className="text-[#2f2f2f] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300">
                                    <FaLinkedin className="text-lg md:text-xl" />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;