import React, { useRef } from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const About = () => {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });
    const contentInView = useInView(contentRef, { once: true });

    const features = [
        {
            icon: <FaCode className="w-6 h-6" />,
            title: "Web Development",
            description: "Specializing in creating responsive and user-friendly web applications"
        },
        {
            icon: <FaGraduationCap className="w-6 h-6" />,
            title: "BSIT Graduate",
            description: "Bachelor of Science in Information Technology from Manuel S. Enverga University"
        },
        {
            icon: <FaLaptopCode className="w-6 h-6" />,
            title: "Modern Technologies",
            description: "Proficient in using the latest web development technologies and frameworks"
        }
    ];

    return (
        <div className="pb-0 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            
            <motion.h2
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-16 my-12 text-center text-4xl text-[#2f2f2f] font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight"
            >
                About Me
            </motion.h2>

            <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto px-0"
            >
                <p className="text-lg md:text-xl leading-relaxed text-[#4a4a4a] mb-12">
                    {ABOUT_TEXT}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        >
                            <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-3 rounded-full text-white mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-[#2f2f2f] mb-2">{feature.title}</h3>
                            <p className="text-[#4a4a4a] text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About; 