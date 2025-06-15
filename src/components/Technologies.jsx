import React, { useEffect, useRef } from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiExpress, SiPython, SiLaravel, SiFigma, SiSupabase, SiSvelte, SiTypescript, SiJavascript, SiPhp, SiGithub, SiGit } from 'react-icons/si'
import { FaDatabase, FaPython, FaPhp } from 'react-icons/fa'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Tooltip } from 'react-tooltip'

const Technologies = () => {
    const technologies = [
        // Version Control
        { icon: <SiGithub className='text-4xl sm:text-5xl md:text-6xl text-gray-800' />, name: 'GitHub', category: 'Version Control', description: 'Tools for managing and tracking code changes' },
        { icon: <SiGit className='text-4xl sm:text-5xl md:text-6xl text-orange-600' />, name: 'Git', category: 'Version Control', description: 'Tools for managing and tracking code changes' },
        
        // Programming Languages
        { icon: <SiJavascript className='text-4xl sm:text-5xl md:text-6xl text-yellow-400' />, name: 'JavaScript', category: 'Programming Languages', description: 'Core languages for building applications' },
        { icon: <SiTypescript className='text-4xl sm:text-5xl md:text-6xl text-blue-600' />, name: 'TypeScript', category: 'Programming Languages', description: 'Core languages for building applications' },
        { icon: <FaPhp className='text-4xl sm:text-5xl md:text-6xl text-indigo-500' />, name: 'PHP', category: 'Programming Languages', description: 'Core languages for building applications' },
        { icon: <FaPython className='text-4xl sm:text-5xl md:text-6xl text-yellow-500' />, name: 'Python', category: 'Programming Languages', description: 'Core languages for building applications' },
        
        // Frontend Frameworks
        { icon: <RiReactjsLine className='text-4xl sm:text-5xl md:text-6xl text-cyan-500' />, name: 'React', category: 'Frontend', description: 'Modern frameworks for building user interfaces' },
        { icon: <SiSvelte className='text-4xl sm:text-5xl md:text-6xl text-orange-500' />, name: 'Svelte', category: 'Frontend', description: 'Modern frameworks for building user interfaces' },
        
        // Backend Frameworks
        { icon: <SiExpress className='text-4xl sm:text-5xl md:text-6xl text-gray-500' />, name: 'Express', category: 'Backend', description: 'Server-side frameworks and platforms' },
        { icon: <SiLaravel className='text-4xl sm:text-5xl md:text-6xl text-red-500' />, name: 'Laravel', category: 'Backend', description: 'Server-side frameworks and platforms' },
        { icon: <SiSupabase className='text-4xl sm:text-5xl md:text-6xl text-emerald-500' />, name: 'Supabase', category: 'Backend', description: 'Server-side frameworks and platforms' },
        
        // Databases
        { icon: <SiMongodb className='text-4xl sm:text-5xl md:text-6xl text-green-500' />, name: 'MongoDB', category: 'Database', description: 'Data storage and management solutions' },
        { icon: <FaDatabase className='text-4xl sm:text-5xl md:text-6xl text-blue-500' />, name: 'SQL', category: 'Database', description: 'Data storage and management solutions' },
        
        // Design & Tools
        { icon: <SiFigma className='text-4xl sm:text-5xl md:text-6xl text-purple-500' />, name: 'Figma', category: 'Design', description: 'Design and development tools' },
    ]

    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });
    const groupedTechs = technologies.reduce((acc, tech) => {
        if (!acc[tech.category]) {
            acc[tech.category] = {
                techs: [],
                description: tech.description
            };
        }
        acc[tech.category].techs.push(tech);
        return acc;
    }, {});

    return (
        <div className="pb-0 sm:pb-0 md:pb-0 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            
            <motion.h2
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="pt-16 sm:pt-20 md:pt-24 my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight"
            >
                Technologies
            </motion.h2>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {Object.entries(groupedTechs).map(([category, { techs, description }], categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-16 sm:mb-20"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
                                {category}
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                {description}
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 cursor-pointer">
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
                                                duration: 0.5,
                                                delay: index * 0.08,
                                                ease: [0.22, 1, 0.36, 1]
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
                                        className="relative group"
                                        data-tooltip-id={`tooltip-${category}-${index}`}
                                        data-tooltip-content={tech.name}
                                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                        animate={controls}
                                        ref={ref}
                                        whileHover={{
                                            scale: 1.15,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 15
                                            }
                                        }}
                                    >
                                        <div className="relative p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500">
                                            {tech.icon}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-25 rounded-xl sm:rounded-2xl transition-all duration-500"
                                                initial={false}
                                                animate={{ opacity: 0 }}
                                                whileHover={{
                                                    opacity: 0.25,
                                                    scale: 1.15,
                                                    transition: { duration: 0.4, ease: "easeOut" }
                                                }}
                                            />
                                            <motion.div
                                                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 rounded-xl sm:rounded-2xl blur-sm"
                                                initial={false}
                                                animate={{ opacity: 0 }}
                                                whileHover={{
                                                    opacity: 0.15,
                                                    scale: 1.1,
                                                    transition: { duration: 0.4, ease: "easeOut" }
                                                }}
                                            />
                                        </div>
                                        <motion.div
                                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-500"
                                            initial={false}
                                            animate={{ width: 0, opacity: 0 }}
                                            whileHover={{
                                                width: "50%",
                                                opacity: 1,
                                                transition: { duration: 0.4, ease: "easeOut" }
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