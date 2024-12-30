import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Modal = ({ imageUrl, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
            onClick={onClose}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
        >
            <motion.div
                className="relative max-w-4xl mx-4 p-4 bg-white rounded-md overflow-hidden shadow-xl"
                onClick={(e) => e.stopPropagation()}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalVariants}
                transition={{ duration: 0.3 }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 bg-white text-gray-800 rounded-md opacity-90 hover:opacity-100 hover:bg-gray-200 transition-all transform hover:scale-110 z-10"
                    aria-label="Close image modal"
                >
                    <AiOutlineClose className="w-4 h-4" />
                </button>

                {/* Image */}
                <img
                    src={imageUrl}
                    alt="Full View"
                    className="w-full h-auto max-h-[50vh] object-contain rounded-md shadow-lg"
                />
            </motion.div>
        </motion.div>
    );
};

export default Modal;