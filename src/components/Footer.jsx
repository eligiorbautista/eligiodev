import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/elirbautista', label: 'Facebook' },
    { icon: <FaGithub />, url: 'https://github.com/eligiorbautista', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/eligio-bautista-iii-50473127b', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-transparent to-gray-50/50 backdrop-blur-sm border-t border-gray-200/50">
      <div className="w-full max-w-[2000px] mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Brand Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Eligiodev</h3>
                <p className="text-sm text-gray-600 max-w-xs">
                  Building innovative solutions and creating meaningful digital experiences.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleScroll(link.href.substring(1))}
                        className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-300"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Connect</h3>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <p className="text-center text-sm text-gray-600">
                © {currentYear} Eli Bautista. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 