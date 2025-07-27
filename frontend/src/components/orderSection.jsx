import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/Online-delivery-1.png"

const OrderSection = () => {
  let navigate = useNavigate()
  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white py-12 px-10 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Get Your Order 24/7 Right At Your Doorsteps
        </h1>
        <hr className="w-14 border-t-4 border-yellow-400" />
        <p className="text-gray-500 text-lg">
          Enjoy freshly prepared meals made with quality ingredients delivered straight to your door. Whether you're craving something healthy or indulging in comfort food, our 24/7 delivery service ensures you get what you love, anytime, anywhere.
        </p>
        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded shadow" onClick={()=>navigate("/cart")}>
            Order Food
          </button>
          <a className="bg-black no-underline hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded shadow " href="#menu">
            Explore Now
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={img}
          alt="Delivery Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default OrderSection;
