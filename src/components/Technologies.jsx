import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiPython } from 'react-icons/si'

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl text-[#2f2f2f]">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <RiReactjsLine className='text-6xl text-cyan-500' />
                </div>
                <div>
                    <SiExpress className='text-6xl text-gray-500' />
                </div>
                <div>
                    <SiMongodb className='text-6xl text-green-500' />
                </div>
                <div>
                    <SiPython className='text-6xl text-yellow-500' />
                </div>
            </div>
        </div>
    )
}

export default Technologies