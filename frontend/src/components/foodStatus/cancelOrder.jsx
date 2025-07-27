import React from "react";

export default function OrderCancelled({setShowTrackOrder}) {
  return (
    <div className="">
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl max-w-md w-full text-center animate-fade-in relative">
        <button
                    type="button"
                    onClick={() => setShowTrackOrder(false)}
                    className="text-gray-400 hover:text-red-500 text-[40px] font-bold transition-colors duration-200 mb-20 hover:scale-125 active:scale-95 absolute top-1 right-5"
                >
                    ×
                </button>
        {/* Cancel Icon */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-4xl shadow-inner">
            ✖
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Order Cancelled</h2>

        {/* Message */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your order has been cancelled. If this was a mistake, you can place a new order anytime.
        </p>

        {/* Button */}
        
      </div>
    </div>
  );
}
