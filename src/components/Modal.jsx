import React, { useEffect } from 'react';
import { AiOutlineClose, AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Modal = ({ imageUrl, isOpen, onClose }) => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, [isOpen]);

    const handleZoomIn = () => {
        setScale(prev => Math.min(prev + 0.25, 2));
    };

    const handleZoomOut = () => {
        setScale(prev => Math.max(prev - 0.25, 0.5));
    };

    const handleReset = () => {
        setScale(1);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="relative max-w-5xl w-full mx-4"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Controls */}
                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                        <button
                            onClick={handleZoomIn}
                            className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all"
                            aria-label="Zoom in"
                        >
                            <AiOutlineZoomIn className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleZoomOut}
                            className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all"
                            aria-label="Zoom out"
                        >
                            <AiOutlineZoomOut className="w-5 h-5" />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all"
                            aria-label="Close image modal"
                        >
                            <AiOutlineClose className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full h-[85vh] flex items-center justify-center">
                        <motion.img
                            src={imageUrl}
                            alt="Enlarged view"
                            className="max-w-full max-h-full object-contain"
                            style={{ scale }}
                            onClick={handleReset}
                            whileHover={{ cursor: scale > 1 ? 'zoom-out' : 'default' }}
                        />
                    </div>

                    {/* Zoom Level Indicator */}
                    {scale !== 1 && (
                        <motion.div
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >
                            {Math.round(scale * 100)}%
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Modal;