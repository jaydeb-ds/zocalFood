import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContex'
import axios from 'axios';
import OrderTracker from '../../components/foodStatus/foodStatus';
import OrderCancelled from '../../components/foodStatus/cancelOrder';
import CancelConfirmation from '../../components/foodStatus/cancelPupop';

function Myorder() {

  const { URL, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [showTrackOrder, setShowTrackOrder] = useState(false)
  const [status, setStatus] = useState()
  const [showCancelPopup, setShowCanelPopup] = useState(false)
  const [orderID,setOrderId] = useState()

  const fetchMyOrders = async () => {
    const response = await axios.post(URL + "/api/order/userorder", {}, { headers: { token } });
    setData(response.data.data);
    console.log(response.data.data);
  }

  const cancelOrder = (orderStatus,order_id) => {
    setOrderId(order_id)
    setStatus(orderStatus)
    setShowCanelPopup(true)   
  }

  useEffect(() => {
    if (token) {
      fetchMyOrders();
    }
  }, [token,]);

  const trackOrder = (orderStatus) => {
    setShowTrackOrder(true)
    setStatus(orderStatus)
  }

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-white to-orange-300 py-10 px-2 sm:px-4 relative">

      {
        showTrackOrder ?
          <div className="flex justify-center  h-screen w-full fixed z-50">
            {

              status == "Cancelled" ? <OrderCancelled setShowTrackOrder={setShowTrackOrder} /> : <OrderTracker status={status} setShowTrackOrder={setShowTrackOrder} />
            }

          </div> : null
      }

      {
        showCancelPopup ?
          <div className="flex justify-center  h-screen w-full fixed z-50">

            
               <CancelConfirmation setShowCanelPopup={setShowCanelPopup} orderID={orderID}/>
            
          </div> : null

      }

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-800 via-orange-500 to-yellow-200 drop-shadow-xl  tracking-tight flex items-center justify-center">

          My Orders

        </h1>
        <div className="gap-y-8 flex flex-col-reverse">
          {data.length === 0 ? (
            <div className="text-center text-rose-500 text-lg py-20 bg-white/80 rounded-2xl border-2 border-dashed border-rose-400 shadow-inner flex flex-col items-center">
              <span className="inline-block text-7xl mb-4 animate-bounce">🍽️</span>
              <span className="inline-block text-6xl mb-2 animate-pulse">😕</span>
              <div className="font-semibold">No orders found.</div>
            </div>
          ) : (

            data.map((orders, index) => {
              if (orders.typeofPayment == "online" && orders.payment == false) {
                return null
              }
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-rose-200 via-rose-50 to-white rounded-2xl shadow-xl p-6 max-sm:p-2 border-2 border-rose-200 hover:scale-[1.02] hover:shadow-2xl transition-all duration-200 relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 opacity-20 text-[10rem] pointer-events-none select-none">
                    🍕
                  </div>
                  <ul className=" flex flex-wrap gap-x-16">

                    {orders.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center py-4 gap-2 md:gap-4"
                      >
                        <div className="relative">
                          <img
                            src={`${URL}/images/` + item.image}
                            alt={item.name}
                            className="w-32 h-20 object-cover rounded-xl border-2 border-rose-300 shadow-md"
                          />

                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-lg text-rose-800 flex items-center gap-2">
                            {item.name}

                          </p>
                          <div className="text-xs text-gray-500 flex gap-3 mt-1">
                            <span>
                              <span className="inline-block text-rose-400 text-lg"></span>
                              Qty: <span className="font-semibold text-rose-700 text-sm">{item.quantity}</span>
                            </span>
                            <span className="font-semibold text-pink-700 text-lg ">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between  text-base mb-3  font-medium max-sm:flex-col ">
                    <p>
                      <span className="text-rose-600">Product Total:</span> <span className="text-gray-600 ml-1 text-xl">₹{orders.amount - 40}</span>
                    </p>
                    <p>
                      <span className="text-rose-600">Delivery:</span> <span className="text-gray-600 ml-1 text-xl">₹40</span>
                    </p>
                    <p>
                      <span className="text-rose-600">Total amount:</span> <span className="text-gray-800 ml-1 text-xl"> ₹{orders.amount}</span>
                    </p>
                  </div>
                  <hr />
                  <div className="flex flex-wrap justify-between items-center gap-2">

                    <button
                      className= {orders.status == "Cancelled"? null: orders.status == "Delivered"?null: "px-4 py-2 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-white font-semibold shadow-md hover:from-rose-500 hover:to-rose-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 active:scale-95"}
                      onClick={() => cancelOrder(orders.status,orders._id)}

                    >
                    
                      {orders.status == "Cancelled" ? null : orders.status == "Delivered"? null : "Cancel Order"}
                      
                    </button>


                    <button
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-white font-semibold shadow-md hover:from-rose-500 hover:to-rose-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 active:scale-95"
                      onClick={() => trackOrder(orders.status)}
                    >
                      Track Order
                    </button>
                    <span className="text-xs text-rose-400 font-mono flex items-center gap-1">
                      <span className="inline-block text-pink-400 text-lg">📅</span>
                      {new Date(orders.date).toLocaleDateString()} {new Date(orders.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Myorder