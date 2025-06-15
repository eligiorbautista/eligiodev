import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const navigate = useNavigate();

    const handleBackToPortfolio = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="max-w-4xl w-full">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-8"
                    >
                        <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                            404
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f2f2f] mb-4">
                            Oops! Page Not Found
                        </h2>
                        <p className="text-lg md:text-xl text-[#4a4a4a] max-w-md mx-auto">
                            The page you're looking for doesn't exist. Let's get you back to my portfolio.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex justify-center"
                    >
                        <button
                            onClick={handleBackToPortfolio}
                            className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
                            <span>Back to Portfolio</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;