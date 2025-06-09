import React, { useRef } from 'react';
import { CONTACT } from '../constants';
import { motion, useInView } from 'framer-motion';
import { toast } from 'sonner';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

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
                className="pt-24 my-10 md:my-20 text-center text-3xl md:text-4xl text-[#2f2f2f] font-bold px-4"
            >
                Let's Connect
            </motion.h2>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                    {/* Contact Information */}
                    <motion.div
                        className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#2f2f2f] shadow-lg"
                        ref={ref}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        variants={animationVariants}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-[#2f2f2f] mb-6 md:mb-8">Contact Information</h3>
                        <div className="space-y-4 md:space-y-6">
                            <motion.div 
                                className="flex items-center space-x-3 md:space-x-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-2 md:p-3 rounded-full text-white flex-shrink-0">
                                    <FaMapMarkerAlt size={18} className="md:w-5 md:h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#2f2f2f] text-sm md:text-base">Location</h4>
                                    <p className="text-[#4a4a4a] text-sm md:text-base">{CONTACT.address}</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-center space-x-3 md:space-x-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-2 md:p-3 rounded-full text-white flex-shrink-0">
                                    <FaPhone size={18} className="md:w-5 md:h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#2f2f2f] text-sm md:text-base">Phone</h4>
                                    <p className="text-[#4a4a4a] text-sm md:text-base">{CONTACT.phoneNo}</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="flex items-center space-x-3 md:space-x-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-2 md:p-3 rounded-full text-white flex-shrink-0">
                                    <FaEnvelope size={18} className="md:w-5 md:h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#2f2f2f] text-sm md:text-base">Email</h4>
                                    <p className="text-[#4a4a4a] text-sm md:text-base">{CONTACT.email}</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#2f2f2f] shadow-lg"
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-[#2f2f2f] mb-6 md:mb-8">Send Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                <label className="block text-[#4a4a4a] mb-2 font-medium text-sm md:text-base" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                                    placeholder="Your name"
                                />
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <label className="block text-[#4a4a4a] mb-2 font-medium text-sm md:text-base" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                                    placeholder="Your email"
                                />
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                            >
                                <label className="block text-[#4a4a4a] mb-2 font-medium text-sm md:text-base" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                                    rows="4"
                                    placeholder="Your message"
                                ></textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="w-full px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg hover:from-pink-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Send Message</span>
                                <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;