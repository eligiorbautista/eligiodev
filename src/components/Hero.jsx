import React from 'react'
import profilePicture from '../assets/ebProfile.png'
import { HERO_CONTENT } from '../constants'
import { Toaster, toast } from 'sonner'
const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img src={profilePicture} alt="Eli Bautista Profile Picture" className='border border-[#2f2f2f] rounded-full' />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl text-[#2f2f2f]">Eligio Bautista</h2>
                        <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-3xl tracking-tight text-transparent">IT Student</span>
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-[#2f2f2f]">
                            {HERO_CONTENT}
                        </p>
                        {/* <a href="./cv.pdf" target='_blank' rel='noopener noreferrer' download className='bg-black rounded-full px-4 py-2 text-sm text-white mb-10'>Download CV</a> */}

                        <button onClick={() => {toast.info('CV is not uploaded yet.') }} className='bg-black rounded-full px-4 py-2 text-sm text-white mb-10'>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero