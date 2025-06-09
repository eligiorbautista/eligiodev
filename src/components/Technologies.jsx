import React, { useEffect, useRef } from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiExpress, SiPython, SiLaravel, SiFigma, SiSupabase, SiSvelte, SiTypescript, SiJavascript, SiPhp } from 'react-icons/si'
import { FaDatabase, FaPython, FaPhp } from 'react-icons/fa'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Tooltip } from 'react-tooltip'

const Technologies = () => {
    const technologies = [
        // Programming Languages
        { icon: <SiJavascript className='text-4xl sm:text-5xl md:text-6xl text-yellow-400' />, name: 'JavaScript', category: 'Programming Languages' },
        { icon: <SiTypescript className='text-4xl sm:text-5xl md:text-6xl text-blue-600' />, name: 'TypeScript', category: 'Programming Languages' },
        { icon: <FaPhp className='text-4xl sm:text-5xl md:text-6xl text-indigo-500' />, name: 'PHP', category: 'Programming Languages' },
        { icon: <FaPython className='text-4xl sm:text-5xl md:text-6xl text-yellow-500' />, name: 'Python', category: 'Programming Languages' },
        // Frontend Frameworks
        { icon: <RiReactjsLine className='text-4xl sm:text-5xl md:text-6xl text-cyan-500' />, name: 'React', category: 'Frontend' },
        { icon: <SiSvelte className='text-4xl sm:text-5xl md:text-6xl text-orange-500' />, name: 'Svelte', category: 'Frontend' },
        // Backend Frameworks
        { icon: <SiExpress className='text-4xl sm:text-5xl md:text-6xl text-gray-500' />, name: 'Express', category: 'Backend' },
        { icon: <SiLaravel className='text-4xl sm:text-5xl md:text-6xl text-red-500' />, name: 'Laravel', category: 'Backend' },
        { icon: <SiSupabase className='text-4xl sm:text-5xl md:text-6xl text-emerald-500' />, name: 'Supabase', category: 'Backend' },
        // Databases
        { icon: <SiMongodb className='text-4xl sm:text-5xl md:text-6xl text-green-500' />, name: 'MongoDB', category: 'Database' },
        { icon: <FaDatabase className='text-4xl sm:text-5xl md:text-6xl text-blue-500' />, name: 'SQL', category: 'Database' },
        // Design
        { icon: <SiFigma className='text-4xl sm:text-5xl md:text-6xl text-purple-500' />, name: 'Figma', category: 'Design' },
    ]

    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });
    const groupedTechs = technologies.reduce((acc, tech) => {
        if (!acc[tech.category]) {
            acc[tech.category] = [];
        }
        acc[tech.category].push(tech);
        return acc;
    }, {});

    return (
        <div className="pb-12 sm:pb-16 md:pb-24">
            <motion.h2
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-16 sm:pt-20 md:pt-24 my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight"
            >
                Technologies
            </motion.h2>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {Object.entries(groupedTechs).map(([category, techs], categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                        className="mb-12 sm:mb-16"
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 sm:mb-8 text-center">
                            {category}
                        </h3>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
                            {techs.map((tech, index) => {
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
                                                duration: 0.3,
                                                delay: index * 0.05,
                                                ease: "easeOut"
                                            },
                                        }).then(() => {
                                            controls.start({
                                                y: [0, -5, 0],
                                                transition: {
                                                    duration: 1.5,
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
                                        className="relative group"
                                        data-tooltip-id={`tooltip-${category}-${index}`}
                                        data-tooltip-content={tech.name}
                                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                        animate={controls}
                                        ref={ref}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 10
                                            }
                                        }}
                                    >
                                        <div className="relative p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                            {tech.icon}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-20 rounded-xl sm:rounded-2xl transition-all duration-300"
                                                initial={false}
                                                animate={{ opacity: 0 }}
                                                whileHover={{
                                                    opacity: 0.2,
                                                    scale: 1.2,
                                                    transition: { duration: 0.3 }
                                                }}
                                            />
                                            <motion.div
                                                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl sm:rounded-2xl blur-sm"
                                                initial={false}
                                                animate={{ opacity: 0 }}
                                                whileHover={{
                                                    opacity: 0.1,
                                                    scale: 1.1,
                                                    transition: { duration: 0.3 }
                                                }}
                                            />
                                        </div>
                                        <motion.div
                                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-300"
                                            initial={false}
                                            animate={{ width: 0, opacity: 0 }}
                                            whileHover={{
                                                width: "50%",
                                                opacity: 1,
                                                transition: { duration: 0.3 }
                                            }}
                                        />
                                        <Tooltip
                                            id={`tooltip-${category}-${index}`}
                                            place="top"
                                            type="dark"
                                            effect="solid"
                                            className="z-50"
                                        />
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Technologies