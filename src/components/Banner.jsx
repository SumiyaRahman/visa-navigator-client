import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-[500px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full object-cover"
          alt="Visa Simplification"
        />
        <div className="absolute flex items-center justify-center bg-black bg-opacity-50 w-full h-full text-white p-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Embark on Your Educational Journey
            </h1>
            <p className="text-lg md:text-xl">
            Discover student visa options tailored for aspiring learners. Start your global education journey today.
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
        <img
          src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full object-cover"
          alt="Global Visa Options"
        />
        <div className="absolute flex items-center justify-center bg-black bg-opacity-50 w-full h-full text-white p-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Your Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl">
            Unlock the world with our travel visa options. Whether it's leisure or adventure, we've got you covered.
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
        <img
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full object-cover"
          alt="Real-Time Tracking"
        />
        <div className="absolute flex items-center justify-center bg-black bg-opacity-50 w-full h-full text-white p-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Build Your Career Abroad
            </h1>
            <p className="text-lg md:text-xl">
            Explore global opportunities with our tailored work visa solutions. Start your journey toward success today.
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
