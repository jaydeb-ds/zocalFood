import { useEffect, useState } from "react";


const steps = ["Food Processing", "Out for delivery", "Delivered"];

export default function OrderTracker({ status, setShowTrackOrder }) {
    const [currentStep, setCurrentStep] = useState(0); // 0 to 2


    const changeStep = () => {
        if (status == steps[0]) {
            setCurrentStep(0)
        }
        else if (status == steps[1]) {
            setCurrentStep(1)
        }
        else if (status == steps[2]) {
            setCurrentStep(2)
        }
    }

    useEffect(() => {
        changeStep()
    },)

    return (
        <div className="w-full max-w-2xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 h-[300px] max-md:h-[500px]">
            <div className="flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:ml-10 sm:mb-10 text-center text-gray-800">
                    Track Your Order
                </h2>

                <button
                    type="button"
                    onClick={() => setShowTrackOrder(false)}
                    className="text-gray-400 hover:text-red-500 text-[40px] font-bold transition-colors duration-200 mb-20 hover:scale-125 active:scale-95"
                >
                    ×
                </button>
            </div>

            {/* Step Tracker */}
            <div className="relative flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-8 sm:gap-0 mb-12 px-4 sm:px-6">
                {/* Horizontal Progress Line (Desktop) */}
                <div className="hidden sm:block absolute top-5 left-[6%] right-[6%] h-1 bg-gray-200 z-0">
                    <div
                        className="h-1 bg-green-500 transition-all duration-500"
                        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                    />
                </div>

                {/* Vertical Progress Line Inside Circles (Mobile) */}
                <div className="sm:hidden absolute left-[40px] top-6 bottom-8 w-1 bg-gray-200 z-0">
                    <div
                        className="w-1 bg-green-500 transition-all duration-500 origin-top"
                        style={{
                            height: `${(currentStep / (steps.length - 1)) * 100}%`,
                        }}
                    />
                </div>

                {/* Step Circles + Labels */}
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="relative z-10 flex sm:flex-col items-center sm:items-center w-full"
                    >
                        {/* Circle with Tick */}
                        <div
                            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-lg font-bold transition-all duration-300
                ${currentStep >= index
                                    ? "bg-green-500 border-green-500 text-white scale-110"
                                    : "bg-white border-gray-300 text-gray-500"
                                }`}
                        >
                            {currentStep >= index ? "✓" : ""}
                        </div>

                        {/* Text beside circle on mobile, below on desktop */}
                        <span
                            className={`ml-4 sm:ml-0 sm:mt-2 text-sm sm:text-center font-medium ${currentStep >= index ? "text-green-600" : "text-gray-500"
                                }`}
                        >
                            {step}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
