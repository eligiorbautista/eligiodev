import React, { useRef, useState, useEffect } from 'react';
import { CONTACT } from '../constants';
import { motion, useInView } from 'framer-motion';
import { toast } from 'sonner';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });
    const formRef = useRef();
    const captchaRef = useRef();
    const [loading, setLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const animationVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!showCaptcha) {
            // First click - show captcha and store form data
            setFormData({
                from_name: formRef.current.user_name.value,
                from_email: formRef.current.user_email.value,
                message: formRef.current.message.value,
            });
            setShowCaptcha(true);
            return;
        }

        if (!captchaToken) {
            toast.error('Please complete the verification');
            return;
        }

        setLoading(true);
        const to_email = import.meta.env.VITE_EMAILJS_TO_EMAIL;
        const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        
        try {
            const templateParams = {
                ...formData,
                email: to_email,
                'h-captcha-response': captchaToken
            };

            const result = await emailjs.send(
                service_id,
                template_id,
                templateParams
            );

            if (result.text === 'OK') {
                toast.success('Message sent successfully!');
                formRef.current.reset();
                captchaRef.current.resetCaptcha();
                setCaptchaToken(null);
                setShowCaptcha(false);
                setFormData(null);
            }
        } catch (error) {
            console.error('Error details:', error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCaptchaVerify = (token) => {
        setCaptchaToken(token);
        // Automatically submit the form after successful verification
        handleSubmit(new Event('submit'));
    };

    const handleCaptchaError = (error) => {
        console.error('Captcha error:', error);
        toast.error('Verification failed. Please try again.');
    };

    const handleCaptchaExpire = () => {
        setCaptchaToken(null);
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
                        className="relative flex flex-col p-8 md:p-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl md:rounded-4xl border border-[#2f2f2f]/10 shadow-lg hover:shadow-xl transition-all duration-500"
                        ref={ref}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        variants={animationVariants}
                        transition={{ duration: 0.6 }}
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                    >
                        <motion.div 
                            className="absolute top-6 left-6 text-pink-500 opacity-20"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <FaMapMarkerAlt size={40} className="md:w-12 md:h-12" />
                        </motion.div>
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
                        className="relative flex flex-col p-8 md:p-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl md:rounded-4xl border border-[#2f2f2f]/10 shadow-lg hover:shadow-xl transition-all duration-500"
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                    >
                        <motion.div 
                            className="absolute top-6 left-6 text-pink-500 opacity-20"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <FaPaperPlane size={40} className="md:w-12 md:h-12" />
                        </motion.div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#2f2f2f] mb-6 md:mb-8">Send Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                <label className="block text-[#4a4a4a] mb-2 font-medium text-sm md:text-base" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="name"
                                    required
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-sm md:text-base bg-white text-gray-800 placeholder-gray-500"
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
                                    name="user_email"
                                    id="email"
                                    required
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-sm md:text-base bg-white text-gray-800 placeholder-gray-500"
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
                                    name="message"
                                    id="message"
                                    required
                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-sm md:text-base bg-white text-gray-800 placeholder-gray-500"
                                    rows="4"
                                    placeholder="Your message"
                                ></textarea>
                            </motion.div>
                            
                            {showCaptcha && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex justify-center mb-4"
                                >
                                    <HCaptcha
                                        ref={captchaRef}
                                        sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
                                        onVerify={handleCaptchaVerify}
                                        onError={handleCaptchaError}
                                        onExpire={handleCaptchaExpire}
                                        theme="light"
                                    />
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="w-full px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg hover:from-pink-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>{loading ? 'Sending...' : showCaptcha ? 'Verify & Send' : 'Send Message'}</span>
                                {!loading && <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5" />}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;