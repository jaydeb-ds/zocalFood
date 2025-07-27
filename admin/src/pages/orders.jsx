import axios from 'axios';
import React from 'react'
// import { useEffect } from 'react';
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

function Order() {
  const [orders, setOrder] = useState([]);
  const url = "http://localhost:5000"


  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list")

    if (response.data.success) {
      setOrder(response.data.data)
      console.log(response.data.data);
    }
    else {
      toast.error("error")
    }
  }

  // Update Status
  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status : event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
      toast.success("Order Status is Updated",{closeOnClick:true,autoClose:2000,theme:"colored"})
    }
    else{
      console.log("error in update status function");
      
      toast.error("ERROR",{closeOnClick:true,autoClose:2000,theme:"colored"})
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (

    <>
      
      <br />
      <div className=' flex flex-wrap-reverse gap-7 max-md:w-[350px] absolute md:top-[100px] md:left-[240px] top:[30px] left-[50px]'>
        {
          orders.map((order, index) => {
            if (order.typeofPayment == "online" && order.payment == false) {
              return null
            }
   
            return (
              <div
              key={index}
              className="bg-gradient-to-br from-gray-50 via-purple-100 to-indigo-200 rounded-2xl shadow-xl p-5 mb-8 flex flex-col gap-3 max-w-xl mx-auto border border-indigo-200 hover:shadow-indigo-300 transition-all duration-300 hover:scale-[1.02] md:h-[300px]"
              >
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="relative">
                <img
                  src={assets.parcel_icon}
                  alt=""
                  className="w-14 h-14 object-contain border-2 border-indigo-400 rounded-full shadow bg-white"
                />
                </div>
                <div className="flex flex-wrap gap-2 flex-1">
                {order.items.map((item, idx) => (
                  <span
                  key={idx}
                  className="inline-block bg-gradient-to-r from-indigo-200/80 to-purple-300/80 text-indigo-900 px-3 py-1 rounded-full text-xs font-semibold shadow border border-indigo-300"
                  >
                  {item.name} <span className="font-bold">x {item.quantity}</span>
                  </span>
                ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <p className="font-extrabold text-lg text-indigo-900 tracking-tight">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <p className="text-gray-700 font-medium text-sm">{order.address.addres}</p>
                <p className="text-gray-700 text-sm">{order.address.street}</p>
                <p className="text-gray-700 text-sm">
                  {order.address.city}, {order.address.state}, {order.address.pincode}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Phone:</span>{" "}
                  <span className="font-medium">{order.address.phone}</span>
                </p>
                </div>
                <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-indigo-700 text-sm">Total:</span>
                  <span className="text-green-700 font-extrabold text-lg drop-shadow">₹{order.amount}</span>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700 text-sm">Payment Type:</span>{" "}
                  <span className="text-gray-800 font-medium text-sm">{order.typeofPayment}</span>
                </div>
                </div>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2">
                <span className="font-semibold text-indigo-700 text-sm">Order Status:</span>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="border border-indigo-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-400 bg-fuchsia-300 shadow text-indigo-900 font-semibold text-xs">
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                </div>
                <span className="font-semibold text-indigo-700 text-sm">
                {new Date(order.date).toLocaleDateString()} {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              </div>                                                                                       
            )

          })
        }
      </div>
    </>
  )
}

export default Order
