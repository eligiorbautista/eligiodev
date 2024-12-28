import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
    return (
        <div className="border-top border-[#2f2f2f] pb-20">
            <h2 className="my-10 text-center text-4xl text-[#2f2f2f]">Get in Touch</h2>
            <div className="text-center tracking-tighter">
                <p className="mb-4 text-[#4a4a4a]">
                    {CONTACT.address}
                </p>
                <p className="mb-4 text-[#4a4a4a]">
                    {CONTACT.phoneNo}
                </p>
                <p className="mb-4 text-[#4a4a4a]">
                    {CONTACT.email}
                </p>
            </div>
        </div>
    )
}

export default Contact