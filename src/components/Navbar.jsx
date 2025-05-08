import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="flex items-center justify-between py-6 px-4 md:px-8">
            <div className="flex items-center">
                <a href="/" aria-label="Home" className="text-4xl font-bold text-[#2f2f2f]">
                    EB
                </a>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <FaTimes className="text-2xl text-[#2f2f2f]" /> : <FaBars className="text-2xl text-[#2f2f2f]" />}
                </button>
            </div>
            <div className="hidden md:flex gap-4 text-[#2f2f2f] text-xl">
                <button onClick={() => handleScroll('technologies')} aria-label="Technologies" className="block py-2 md:py-0">Technologies</button>
                <button onClick={() => handleScroll('certificates')} aria-label="Certificates" className="block py-2 md:py-0">Certificates</button>
                <button onClick={() => handleScroll('projects')} aria-label="Projects" className="block py-2 md:py-0">Projects</button>
                <button onClick={() => handleScroll('experience')} aria-label="Experience" className="block py-2 md:py-0">Experience</button>
                <button onClick={() => handleScroll('contact')} aria-label="Contact" className="block py-2 md:py-0">Contact</button>
            </div>
            <div className="hidden md:flex gap-4 text-[#2f2f2f] text-xl">
                <a href="https://www.facebook.com/elirbautista" target='_blank' rel='noopener noreferrer' aria-label="Facebook" className="block py-2 md:py-0 text-center">
                    <FaFacebook />
                </a>
                <a href="https://github.com/eligiorbautista" target='_blank' rel='noopener noreferrer' aria-label="GitHub" className="block py-2 md:py-0 text-center">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/eligio-bautista-iii-50473127b" target='_blank' rel='noopener noreferrer' aria-label="LinkedIn" className="block py-2 md:py-0 text-center">
                    <FaLinkedin />
                </a>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-4 text-xl text-[#2f2f2f] md:hidden"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button onClick={toggleMenu} aria-label="Close Menu" className="absolute top-4 right-4">
                            <FaTimes className="text-2xl text-[#2f2f2f]" />
                        </button>
                        <div className="flex flex-col items-center gap-4">
                            <button onClick={() => handleScroll('technologies')} aria-label="Technologies" className="block py-2">Technologies</button>
                            <button onClick={() => handleScroll('certificates')} aria-label="Certificates" className="block py-2">Certificates</button>
                            <button onClick={() => handleScroll('projects')} aria-label="Projects" className="block py-2">Projects</button>
                            <button onClick={() => handleScroll('experience')} aria-label="Experience" className="block py-2">Experience</button>
                            <button onClick={() => handleScroll('contact')} aria-label="Contact" className="block py-2">Contact</button>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a href="https://www.facebook.com/elirbautista" target='_blank' rel='noopener noreferrer' aria-label="Facebook" className="text-center">
                                <FaFacebook />
                            </a>
                            <a href="https://github.com/eligiorbautista" target='_blank' rel='noopener noreferrer' aria-label="GitHub" className="text-center">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/eligio-bautista-iii-50473127b" target='_blank' rel='noopener noreferrer' aria-label="LinkedIn" className="text-center">
                                <FaLinkedin />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;