import React, { useRef, useState, useEffect } from 'react';
import { testimonials } from "../constants/index.jsx";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from 'react-icons/fa';

const FeedbackCard = ({ testimonial, name, designation, company, image, date }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative flex flex-col md:flex-row items-center gap-8 md:gap-10 p-6 md:p-10 w-[95%] md:w-auto mx-auto bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl md:rounded-4xl border border-[#2f2f2f]/10 shadow-lg hover:shadow-xl transition-all duration-500"
    >
      <motion.div
        variants={itemVariants}
        className="absolute top-6 left-6 text-pink-500 opacity-20"
      >
        <FaQuoteLeft size={40} className="md:w-12 md:h-12" />
      </motion.div>

      <motion.div variants={itemVariants} className="flex-shrink-0">
        <div className="relative">
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-xl"
          />
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-[#2f2f2f]/10 hover:border-pink-500 transition-all duration-500 shadow-lg"
          />
        </div>
      </motion.div>

      <div className="flex-1 text-start">
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-3xl font-bold text-[#2f2f2f] mb-2 md:mb-3 tracking-tight">{name}</h3>
          <p className="text-sm md:text-lg text-[#4a4a4a] font-medium mb-1 tracking-wide">{designation}</p>
          <p className="text-xs md:text-base text-[#4a4a4a]/80 font-light tracking-wide">{company}</p>
        </motion.div>
        <motion.p variants={itemVariants} className="text-sm md:text-lg text-[#4a4a4a] leading-relaxed mb-6 md:mb-8 font-light tracking-wide">{testimonial}</motion.p>
        <motion.p variants={itemVariants} className="text-xs md:text-base text-[#4a4a4a]/70 italic border-t border-gray-200/50 pt-4 md:pt-5 font-light tracking-wide">{date}</motion.p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-8 md:pb-12">
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
        className="pt-28 my-12 md:my-24 text-center text-4xl md:text-5xl text-[#2f2f2f] font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight"
      >
        What People Say
      </motion.h2>

      <div className="relative max-w-5xl mx-auto px-0">
        <AnimatePresence mode="wait">
          <FeedbackCard key={currentIndex} {...testimonials[currentIndex]} />
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center gap-4 mt-10"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.1 }
              }}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                opacity: index === currentIndex ? 1 : 0.5
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
              className={`h-2.5 rounded-full transition-all duration-500 ${index === currentIndex
                  ? 'w-10 bg-gradient-to-r from-pink-500 to-orange-500 shadow-lg shadow-pink-500/20'
                  : 'w-2.5 bg-[#2f2f2f]/20 hover:bg-[#4a4a4a]/30'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials; 