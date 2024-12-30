import React, { useRef } from 'react';
import { EXPERIENCES } from '../constants';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
    const animationVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl text-[#2f2f2f]">Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true });

                    return (
                        <motion.div
                            className="mb-8 flex flex-wrap lg:justify-center"
                            key={index}
                            ref={ref}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            variants={animationVariants}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-[#4a4a4a]">
                                    {experience.year}
                                </p>
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h3 className="mb-2 font-semibold text-[#2f2f2f]">
                                    {experience.role} - {" "}
                                    <span className="text-sm text-[#6b6b6b]">
                                        {experience.company}
                                    </span>
                                </h3>
                                <div className="mb-4 text-[#4a4a4a]">
                                    {experience.description}
                                </div>
                                {experience.technologies.map((technology, techIndex) => (
                                    <span className="mr-2 mt-4 rounded bg-[#2f2f2f] px-2 py-1 font-medium text-white" key={techIndex}>{technology}</span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;