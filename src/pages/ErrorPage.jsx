import React, { useEffect } from 'react';

const ErrorPage = () => {

    useEffect(() => {
        document.title = "Gadget Heaven | Page not Found";
      }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#00CC99] to-[#EDF2F5] text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <h2 className="text-4xl mb-6">Page Not Found</h2>
                <p className="text-lg mb-8">
                    Oops! The page you are looking for doesn't exist or has been moved.
                </p>
                <a href="/" className="px-6 py-3 rounded-lg bg-white text-[#00CC99] font-semibold hover:bg-gray-200 transition">
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
