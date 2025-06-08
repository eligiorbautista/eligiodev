import React, { useRef, useState, useEffect } from 'react';
import { testimonials } from "../constants/index.jsx";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FeedbackCard = ({ testimonial, name, designation, company, image }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-3xl border border-[#2f2f2f] shadow-lg"
  >
    <div className="flex-shrink-0">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-lg opacity-50"></div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="relative w-24 h-24 rounded-full object-cover border-2 border-[#2f2f2f]"
        />
      </div>
    </div>
    
    <div className="flex-1 text-center md:text-left">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-[#2f2f2f] mb-1">{name}</h3>
        <p className="text-[#4a4a4a] font-medium">{designation}</p>
        <p className="text-[#4a4a4a] text-sm">{company}</p>
      </div>
      <p className="text-[#4a4a4a] text-lg leading-relaxed">{testimonial}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  const animationVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-4">
      <motion.h2 
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-24 my-20 text-center text-4xl text-[#2f2f2f]"
      >
        Testimonials
      </motion.h2>

      <div className="relative max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <FeedbackCard key={currentIndex} {...testimonials[currentIndex]} />
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-pink-500 to-orange-500' 
                  : 'w-2 bg-[#2f2f2f] hover:bg-[#4a4a4a]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 