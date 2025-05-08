import React, { useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });

    const animationVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="pb-4">
            <motion.h2 
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-24 my-20 text-center text-4xl text-[#2f2f2f]"
            >
                Projects
            </motion.h2>

            <div>
                {PROJECTS.map((project, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true });

                    return (
                        <div key={index}>
                            <motion.div
                                className="mb-8 lg:mb-4 flex flex-wrap lg:justify-center"
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
                                    className="w-full lg:w-1/4 md:mr-10"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        width={340}
                                        className='mb-6 rounded border border-[#2f2f2f] w-full cursor-pointer'
                                        onClick={() => handleImageClick(project.image)}
                                    />
                                </motion.div>
                                <motion.div 
                                    className="w-full max-w-xl lg:w-3/4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                >
                                    <h3 className="mb-2 font-semibold text-2xl text-[#2f2f2f]">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 text-[#4a4a4a]">
                                        {project.description}
                                    </p>
                                    <motion.div 
                                        className="flex flex-wrap"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                    >
                                        {project.technologies.map((technology, techIndex) => (
                                            <motion.span 
                                                key={techIndex}
                                                className="mr-2 mb-2 rounded bg-[#2f2f2f] p-2 text-sm font-medium text-white"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3, delay: index * 0.2 + 0.4 + techIndex * 0.1 }}
                                            >
                                                {technology}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                    <motion.div 
                                        className="flex flex-wrap mt-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                                    >
                                        {project.livePage && (
                                            <motion.a
                                                href={project.livePage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mr-4 mb-2 text-[#2f2f2f] flex items-center border border-[#2f2f2f] px-2 py-1 rounded hover:bg-gradient-to-r hover:border-none hover:from-pink-500 hover:to-orange-500 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <FaExternalLinkAlt size={14} className="mr-2" /> View Live Page
                                            </motion.a>
                                        )}
                                        {project.githubRepo && (
                                            <motion.a
                                                href={project.githubRepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mr-4 mb-2 text-[#2f2f2f] flex items-center border border-[#2f2f2f] px-2 py-1 rounded hover:bg-gradient-to-r hover:border-none hover:from-pink-500 hover:to-orange-500 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <FaExternalLinkAlt size={14} className="mr-2" /> GitHub Repository
                                            </motion.a>
                                        )}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            {index !== PROJECTS.length - 1 && <hr className="my-5 border-t border-transparent hidden lg:block" />}
                            {index !== PROJECTS.length - 1 && <hr className="my-5 border-t border-gray-300 lg:hidden" />}
                        </div>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <Modal imageUrl={selectedImage} isOpen={!!selectedImage} onClose={closeModal} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;