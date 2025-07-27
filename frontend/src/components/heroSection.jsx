import React from "react";
import img from "../assets/girlImg.png"

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-r from-orange-50 via-white to-yellow-50">
      
      {/* Left Section: Image and Labels */}
      <div className="relative md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
        {/* Food Labels */}
      

        {/* Main Image */}
        <img
          src={img}
          alt="Happy Customer"
          className="w-[300px] md:w-[400px] rounded-bl-[80px] p-2 "
        />
      </div>

      {/* Right Section: Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Food from your <br /> favorite restaurants <br /> to your table
        </h1>
        <p className="text-gray-500 text-lg mb-10">
        Craving something delicious? We bring freshly prepared meals from your favorite local restaurants straight to your doorstep—hot, fast, and just the way you love it.
        </p>
        <div>
        <a className="no-underline bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition duration-300" href="#menu">
          ORDER NOW
        </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
