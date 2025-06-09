import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { certificates } from "../constants";
import { FaExternalLinkAlt } from 'react-icons/fa';
import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';

const Certificates = () => {
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
                className="pt-24 my-20 text-center text-4xl text-[#2f2f2f] font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight"
            >
                Certificates
            </motion.h2>

            <div>
                {certificates.map((certificate, index) => {
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
                                        src={certificate.image}
                                        alt={certificate.title}
                                        width={340}
                                        className='mb-6 rounded border border-[#2f2f2f] w-full cursor-pointer'
                                        onClick={() => handleImageClick(certificate.image)}
                                    />
                                </motion.div>
                                <motion.div 
                                    className="w-full max-w-xl lg:w-3/4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                >
                                    <h3 className="mb-2 font-semibold text-2xl text-[#2f2f2f]">
                                        {certificate.title}
                                    </h3>
                                    <p className="mb-4 text-[#4a4a4a]">
                                        {certificate.organization}
                                    </p>
                                    <p className="mb-4 text-[#4a4a4a]">
                                        {certificate.date}
                                    </p>
                                    {
                                        certificate.credentialUrl && (
                                            <motion.div 
                                                className="flex flex-wrap mt-4"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <a
                                                    href={certificate.credentialUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="mr-4 mb-2 text-[#2f2f2f] flex items-center border border-[#2f2f2f] px-2 py-1 rounded hover:bg-gradient-to-r hover:border-none hover:from-pink-500 hover:to-orange-500 hover:text-white transition-colors"
                                                >
                                                    <FaExternalLinkAlt size={14} className="mr-2" /> View Certificate
                                                </a>
                                            </motion.div>
                                        )
                                    }
                                </motion.div>
                            </motion.div>
                            {index !== certificates.length - 1 && <hr className="my-5 border-t border-transparent hidden lg:block" />}
                            {index !== certificates.length - 1 && <hr className="my-5 border-t border-gray-300 lg:hidden" />}
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

export default Certificates; 