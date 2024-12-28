import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl text-[#2f2f2f]">
                Projects
            </h2>

            <div>
                {PROJECTS.map((project, index) => {
                    return (
                        <div className="mb-8 flex flex-wrap lg:justify-center " key={index}>
                            <div className="w-full lg:w-1/4 md:mr-10 ">
                                <img src={project.image} alt={project.title} width={340} className='mb-6 rounded border border-[#2f2f2f] w-full ' />
                            </div>
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h3 className="mb-2 font-semibold text-2xl text-[#2f2f2f]">
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-[#4a4a4a]">
                                    {project.description}
                                </p>
                                {project.technologies.map((technology, techIndex) => {
                                    return (
                                        <span className="mr-2 rounded bg-[#2f2f2f] p-2 text-sm font-medium text-white" key={techIndex}>
                                            {technology}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects