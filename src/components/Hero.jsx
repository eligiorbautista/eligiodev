import React, { useRef } from 'react';
import profilePicture from '../assets/ebProfileNew.png';
import { HERO_CONTENT } from '../constants';
import { Toaster, toast } from 'sonner';
import { motion, useInView } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });

    return (
        <div className="pt-24 pb-4 lg:mb-36 flex justify-center items-center">
            <div className="flex flex-wrap lg:flex-row-reverse justify-center items-center ">
                <motion.div
                    className="w-full lg:w-1/2"
                    ref={ref1}
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center lg:p-8">
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 1, 0, -1, 0],
                                scale: [1, 1.02, 1],
                                x: [0, 4, 0, -4, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: [0.4, 0, 0.2, 1],
                                times: [0, 0.25, 0.5, 0.75, 1]
                            }}
                            whileHover={{
                                scale: 1.03,
                                rotate: 0,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="relative">
                                <div className="profile-container">
                                    <div className="profile-gradient"></div>
                                    <div className="profile-image">
                                        <img 
                                            src={profilePicture} 
                                            alt="Eli Bautista Profile Picture" 
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2"
                    ref={ref2}
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-7xl text-[#2f2f2f]">Eligio Bautista III</h2>
                        <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-3xl tracking-tight text-transparent">Programmer</span>
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-[#2f2f2f]">
                            {HERO_CONTENT}
                        </p>
                        <a href='./BautistaEligio_CV.pdf' target='_blank' rel='noopener noreferrer' download="BautistaEligio_CV.pdf" className='text-[#2f2f2f] flex items-center border border-[#2f2f2f] px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:border-none hover:from-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300 mb-10'>
                            <FaDownload className="mr-2" />
                            Download CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

const styles = `
    .profile-container {
        position: relative;
        padding: 0.5rem;
        transition: all 0.3s ease;
    }

    .profile-gradient {
        position: absolute;
        inset: -2px;
        background: linear-gradient(45deg, #ec4899, #f97316);
        border-radius: 1rem;
        z-index: -1;
        opacity: 0;
        filter: blur(8px);
        transition: all 0.3s ease;
    }

    .profile-image {
        position: relative;
        border-radius: 0.75rem;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .profile-container:hover {
        transform: scale(1.02);
    }

    .profile-container:hover .profile-gradient {
        opacity: 0.7;
        filter: blur(12px);
    }

    .profile-container:hover .profile-image {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

export default Hero;