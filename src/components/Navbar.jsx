import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home" className="text-4xl font-bold text-[#2f2f2f]">
                    EB
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl text-[#2f2f2f]">
                <a href="https://www.facebook.com/elirbautista" target='_blank' rel='noopener noreferrer' aria-label="Facebook">
                    <FaFacebook />
                </a>
                <a href="https://github.com/eligiorbautista" target='_blank' rel='noopener noreferrer' aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/eligio-bautista-iii-50473127b" target='_blank' rel='noopener noreferrer' aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
            </div>
        </nav>
    )
}

export default Navbar