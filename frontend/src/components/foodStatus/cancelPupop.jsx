import React from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContex";

export default function CancelConfirmation({ setShowCanelPopup, orderID }) {

    const cancelOrderYes = async (event, orderId) => {
        const { URL } = useContext(StoreContext)

    const response = await axios.post(URL+"/api/order/status",{
      orderId:orderID,
      status : "Cancelled"
    })
    if (response.data.success) {
      toast.success("Order Cancelled",{closeOnClick:true,autoClose:2000,theme:"colored"})
      setShowCanelPopup(false)
      setTimeout(() => {
        location.reload()
      }, 2000);
    }
    else{
      console.log("error in update status function");
      
      toast.error("ERROR",{closeOnClick:true,autoClose:2000,theme:"colored"})
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-red-400 via-red-200 to-red-50 p-8 sm:p-10 rounded-2xl shadow-2xl max-w-md w-full text-center animate-fade-in border border-red-200">
        {/* Warning Icon */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-yellow-500 text-4xl shadow-inner border border-yellow-200">
            ⚠️
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Cancel Order?</h2>

        {/* Message */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          Are you sure you want to cancel your order? This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={()=>setShowCanelPopup(false)}
            className="px-5 py-2 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all duration-200"
          >
            No
          </button>
          <button
            onClick={() => cancelOrderYes()}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200"
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
