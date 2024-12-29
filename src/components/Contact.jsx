import React, { useRef } from 'react'
import { CONTACT } from '../constants'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const animationVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    }

    return (
        <div className="border-top border-[#2f2f2f] pb-20">
            <h2 className="my-10 text-center text-4xl text-[#2f2f2f]">Get in Touch</h2>
            <motion.div
                className="text-center tracking-tighter"
                ref={ref}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={animationVariants}
                transition={{ duration: 0.5 }}
            >
                <p className="mb-4 text-[#4a4a4a]">
                    {CONTACT.address}
                </p>
                <p className="mb-4 text-[#4a4a4a]">
                    {CONTACT.phoneNo}
                </p>
                <p className="mb-4 text-[#4a4a4a]">
                    {CONTACT.email}
                </p>
            </motion.div>
        </div>
    )
}

export default Contact