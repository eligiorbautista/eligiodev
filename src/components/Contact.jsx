import React, { useRef } from 'react';
import { CONTACT } from '../constants';
import { motion, useInView } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast('This feature is not functional yet.');
    };

    return (
        <div className="pb-20">
            <h2 className="my-10 text-center text-4xl text-[#2f2f2f]">Get in Touch</h2>
            <motion.div
                className="text-center tracking-tighter"
                ref={ref}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={animationVariants}
                transition={{ duration: 0.5 }}
            >
                <p className="mb-4 text-[#4a4a4a]">
                    {CONTACT.address}
                </p>
                <p className="mb-4 text-[#4a4a4a]">
                    {CONTACT.phoneNo}
                </p>
                <p className="mb-4 text-[#4a4a4a]">
                    {CONTACT.email}
                </p>
            </motion.div>
            <motion.div
                className="mt-10 mx-auto max-w-md p-6"
                ref={ref}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={animationVariants}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h3 className="text-2xl mb-4 text-[#2f2f2f]">Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-[#4a4a4a] mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f2f2f]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#4a4a4a] mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f2f2f]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#4a4a4a] mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f2f2f]"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-[#2f2f2f] text-white rounded-md hover:bg-[#4a4a4a] transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;