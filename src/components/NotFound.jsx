import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#2f2f2f]">
            <div className="flex items-center mb-8">
                <h1 className="text-6xl font-bold">404</h1>
                <div className="mx-4 h-16 border-l-2 border-[#2f2f2f]"></div>
                <div className="text-2xl">Not Found</div>
            </div>
            <Link to="/" className="px-4 py-2 bg-[#2f2f2f] text-white rounded-md hover:bg-gray-800 transition-colors">
                Go Back
            </Link>
        </div>
    );
};

export default NotFound;