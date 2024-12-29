import React, { useEffect, useRef } from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiExpress, SiPython } from 'react-icons/si'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Tooltip } from 'react-tooltip'

const Technologies = () => {
    const technologies = [
        { icon: <RiReactjsLine className='text-6xl text-cyan-500' />, name: 'React' },
        { icon: <SiExpress className='text-6xl text-gray-500' />, name: 'Express' },
        { icon: <SiMongodb className='text-6xl text-green-500' />, name: 'MongoDB' },
        { icon: <SiPython className='text-6xl text-yellow-500' />, name: 'Python' },
    ]

    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl text-[#2f2f2f]">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {technologies.map((tech, index) => {
                    const controls = useAnimation()
                    const ref = useRef(null)
                    const isInView = useInView(ref, { once: true })

                    useEffect(() => {
                        if (isInView) {
                            controls.start({
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, delay: 0.1 },
                            }).then(() => {
                                controls.start({
                                    y: [0, -5, 0],
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: 'loop',
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
                            initial={{ opacity: 0, y: 20 }}
                            animate={controls}
                            ref={ref}
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