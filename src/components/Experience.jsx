import React, { useRef } from 'react';
import { EXPERIENCES } from '../constants';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });

    const animationVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <div className="pb-0">
            <motion.h2 
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-24 my-20 text-center text-4xl text-[#2f2f2f] font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight"
            >
                Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true });

                    return (
                        <motion.div
                            className="mb-8 flex flex-wrap lg:justify-center"
                            key={index}
                            ref={ref}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            variants={animationVariants}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                        >
                            <motion.div 
                                className="w-full lg:w-1/4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                            >
                                <p className="mb-2 text-sm text-[#4a4a4a]">
                                    {experience.year}
                                </p>
                            </motion.div>
                            <motion.div 
                                className="w-full max-w-xl lg:w-3/4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                            >
                                <h3 className="mb-2 font-semibold text-[#2f2f2f]">
                                    {experience.role} <span className="text-xs">|</span> {" "}
                                    <span className="text-sm text-[#6b6b6b]">
                                        {experience.company}
                                    </span>
                                </h3>
                                <motion.div 
                                    className="mb-4 text-[#4a4a4a]"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                >
                                    {experience.description}
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                                >
                                    {experience.technologies.map((technology, techIndex) => (
                                        <motion.span 
                                            key={techIndex}
                                            className="mr-2 mt-4 rounded bg-[#2f2f2f] px-2 py-1 font-medium text-white"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3, delay: index * 0.2 + 0.5 + techIndex * 0.1 }}
                                        >
                                            {technology}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;