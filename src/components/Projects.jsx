import React, { useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const animationVariants = {
        initial: { opacity: 0, y: 20 },
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
            <h2 className="my-20 text-center text-4xl text-[#2f2f2f]">
                Projects
            </h2>

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
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="w-full lg:w-1/4 md:mr-10">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        width={340}
                                        className='mb-6 rounded border border-[#2f2f2f] w-full cursor-pointer'
                                        onClick={() => handleImageClick(project.image)}
                                    />
                                </div>
                                <div className="w-full max-w-xl lg:w-3/4">
                                    <h3 className="mb-2 font-semibold text-2xl text-[#2f2f2f]">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 text-[#4a4a4a]">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap">
                                        {project.technologies.map((technology, techIndex) => (
                                            <span className="mr-2 mb-2 rounded bg-[#2f2f2f] p-2 text-sm font-medium text-white" key={techIndex}>
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap mt-4">
                                        {project.livePage && (
                                            <a
                                                href={project.livePage}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mr-4 mb-2 text-[#2f2f2f] flex items-center border border-[#2f2f2f] px-2 py-1 rounded hover:bg-gradient-to-r hover:border-none hover:from-pink-500 hover:to-orange-500 hover:text-white transition-colors"
                                            >
                                                <FaExternalLinkAlt size={14} className="mr-2" /> View Live Page
                                            </a>
                                        )}
                                        {project.githubRepo && (
                                            <a
                                                href={project.githubRepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mr-4 mb-2 text-[#2f2f2f] flex items-center border border-[#2f2f2f] px-2 py-1 rounded hover:bg-gradient-to-r  hover:border-none hover:from-pink-500 hover:to-orange-500 hover:text-white transition-colors"
                                            >
                                                <FaExternalLinkAlt size={14} className="mr-2" /> GitHub Repository
                                            </a>
                                        )}
                                    </div>
                                </div>
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