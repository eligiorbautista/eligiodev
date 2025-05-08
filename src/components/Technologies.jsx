import React, { useEffect, useRef } from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiExpress, SiPython, SiLaravel } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Tooltip } from 'react-tooltip'

const Technologies = () => {
    const technologies = [
        { icon: <RiReactjsLine className='text-6xl text-cyan-500' />, name: 'React' },
        { icon: <SiExpress className='text-6xl text-gray-500' />, name: 'Express' },
        { icon: <SiMongodb className='text-6xl text-green-500' />, name: 'MongoDB' },
        { icon: <SiPython className='text-6xl text-yellow-500' />, name: 'Python' },
        { icon: <SiLaravel className='text-6xl text-red-500' />, name: 'Laravel' },
        { icon: <FaDatabase className='text-6xl text-blue-500' />, name: 'SQL' },
    ]

    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });

    return (
        <div className="pb-24">
            <motion.h2
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-24 my-20 text-center text-4xl text-[#2f2f2f]"
            >
                Technologies
            </motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
                {technologies.map((tech, index) => {
                    const controls = useAnimation()
                    const ref = useRef(null)
                    const isInView = useInView(ref, { once: true })

                    useEffect(() => {
                        if (isInView) {
                            controls.start({
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.2,
                                    ease: "easeOut"
                                },
                            }).then(() => {
                                controls.start({
                                    y: [0, -8, 0],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: 'loop',
                                        ease: "easeInOut"
                                    },
                                })
                            })
                        }
                    }, [controls, isInView])

                    return (
                        <motion.div
                            key={index}
                            className="relative"
                            data-tooltip-id={`tooltip-${index}`}
                            data-tooltip-content={tech.name}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={controls}
                            ref={ref}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            {tech.icon}
                            <Tooltip id={`tooltip-${index}`} place="top" type="dark" effect="solid" />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Technologies