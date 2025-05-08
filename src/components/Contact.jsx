import React, { useRef } from 'react';
import { CONTACT } from '../constants';
import { motion, useInView } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });

    const animationVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.info('This feature is not functional yet.');
    };

    return (
        <div className="pb-20">
            <motion.h2 
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-24 my-10 text-center text-4xl text-[#2f2f2f]"
            >
                Get in Touch
            </motion.h2>
            <motion.div
                className="text-center tracking-tighter"
                ref={ref}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={animationVariants}
                transition={{ duration: 0.6 }}
            >
                <motion.p 
                    className="mb-4 text-[#4a4a4a]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p 
                    className="mb-4 text-[#4a4a4a]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.p 
                    className="mb-4 text-[#4a4a4a]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {CONTACT.email}
                </motion.p>
            </motion.div>
            <motion.div
                className="mt-10 mx-auto max-w-md p-6"
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <motion.h3 
                    className="text-2xl mb-4 text-[#2f2f2f]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Contact Us
                </motion.h3>
                <form onSubmit={handleSubmit}>
                    <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <label className="block text-[#4a4a4a] mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f2f2f]"
                        />
                    </motion.div>
                    <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <label className="block text-[#4a4a4a] mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f2f2f]"
                        />
                    </motion.div>
                    <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <label className="block text-[#4a4a4a] mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f2f2f]"
                            rows="4"
                        ></textarea>
                    </motion.div>
                    <motion.button
                        type="submit"
                        className="w-full px-4 py-2 bg-[#2f2f2f] text-white rounded-md hover:bg-[#4a4a4a] transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;