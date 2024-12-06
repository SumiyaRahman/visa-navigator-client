import React from 'react';

const Banner = () => {
  return (
    <div className="carousel w-full h-[400px] bg-gray-100 shadow-lg">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 w-full h-full text-white p-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Simplify Your Visa Applications
            </h1>
            <p className="text-lg md:text-xl">
              Check visa requirements, apply online, and track your application status all in one place.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 w-full h-full text-white p-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Explore Visa Options Globally
            </h1>
            <p className="text-lg md:text-xl">
              Find the right visa for your travel, education, or work needs from countries worldwide.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-full h-full text-white p-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Track Applications Effortlessly
            </h1>
            <p className="text-lg md:text-xl">
              Stay updated on the status of your visa application with real-time tracking.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
