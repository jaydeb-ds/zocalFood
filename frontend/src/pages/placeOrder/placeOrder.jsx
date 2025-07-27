import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContex'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PlaceOrderSuccess from '../../components/orderSucces/PlaceOrderSuccess';
import "./placeOrder.css"

function PlaceOrder() {

  const { getTotalAmount, token, food_list, cartItem, URL } = useContext(StoreContext)
  const DELIVERY_FEE = getTotalAmount() > 0 ? 40 : 0;

  const navigate = useNavigate()

  const [paymentType, setPaymnetType] = useState("")
  const [active, setActive] = useState(false)
  const [showSuccess, setShowSucces] = useState(false)
  const [bottonDisable,setBottonDisable] =useState(false)

  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    addres: "",
  })

  // online payment verify component
  const [searchParams,setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const success = searchParams.get("success");

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setdata(data => ({ ...data, [name]: value }))
  }


  const placeOrder = async (event) => {
    event.preventDefault();
    
    //____ order items_____
    let orderItems = [];
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        orderItems.push({
          name: item.name,
          price: item.price,
          quantity: cartItem[item._id],
          image: item.image
        });
      }
    })

// order data with address,item, amount and payment type
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalAmount() + DELIVERY_FEE,
      typeofPayment: paymentType
    }
    console.log("data ---------", data);

    //_________for online payment___________

    if (paymentType == "online") {
      setBottonDisable(true)
      let response = await axios.post(URL + "/api/order/place", orderData, {
        headers: { token }
      })
      if (response.data.success) {
        const { session_url } = response.data
        window.location.replace(session_url)
      }
      else {
        console.error("Error placing order:", response.data.message);
        alert("Failed to place order. Please try again.");
      }
    }
    // _________for cash on delivery___________

    else if (paymentType == "COD") {
      setBottonDisable(true)
      let response = await axios.post(URL + "/api/order/place", orderData, {
        headers: { token }
      })
      if (response.data.success) {
        toast.success("order placed")
        setShowSucces(true)
      }
      else {
        toast.error("order not places")
      }
    }

    // _________if payment type is not selected___________

    else {
      toast.info("please set the mode of payment", { autoClose: 2000,theme: "colored" });
    }
    
    // setBottonDisable(false)
  }

  //________ verify order after payment_______
  // this function is for when user choose online mode for the payment 
  const verifyOrder = async () => {
    const response = await axios.post(URL + "/api/order/verify", {orderId, success})
    
    if (response.data.success) {
      toast.success("Order placed successfully!");
      setShowSucces(true);
    } else {
      navigate("/");
      toast.error("Order payment failed");
    }
    
  }

  useEffect(() => {
    if (orderId && success) { 
      verifyOrder();
    }
  }, [orderId, success, URL]);

  return (
    <>
    {/* _____payment success animation popup_________ */}
      {
        showSuccess ? <PlaceOrderSuccess /> : null
      }

      {/* _____form of user information____ */}
      <form onSubmit={placeOrder} className='w-full h-screen md:flex justify-around md:p-4 p-2'>
        <div>
          <h1 className='my-3 font-serif'>Delivery <span className='text-rose-400'>Information </span></h1>
          <div className='flex flex-col gap-4 border-1 border-red-400 rounded-lg shadow-xl shadow-slate-600 p-10 md:w-[500px] max-md:px-2 cdw[360px] '>
            <div className='flex gap-2'>
              <input type="text" placeholder='first name' className='w-1/2 h-10 p-3 rounded-lg shadow-md shadow-rose-300 border-1 border-red-400' required name='firstName' value={data.firstName} onChange={onChangeHandler} />
              <input type="text" placeholder='last name' className='w-1/2 h-10 p-3  rounded-lg shadow-md shadow-rose-300 border-1 border-red-400' required name='lastName' value={data.lastName} onChange={onChangeHandler} />
            </div>
            <input type="email" placeholder='gmail' className='w-full h-10 p-3  rounded-lg shadow-md shadow-rose-300 border-1 border-red-400' required name='email' value={data.email} onChange={onChangeHandler} />
            <input type="number" placeholder='phone' className='w-full h-10 p-3  rounded-lg shadow-md shadow-rose-300 border-1 border-red-400' required name='phone' value={data.phone} onChange={onChangeHandler} />

            <div className='flex gap-2'>
              <input type="text" placeholder='city' className='w-1/2 h-10 p-3 rounded-lg shadow-md shadow-rose-300 border-1 border-red-400' required name='city' value={data.city} onChange={onChangeHandler} />
              <input type="text" placeholder='state' className='w-1/2 h-10 p-3  rounded-lg shadow-md shadow-rose-300 border-1 border-red-400' required name='state' value={data.state} onChange={onChangeHandler} />
            </div>
            <div className='flex gap-2'>
              <input type="text" placeholder='street name' className='w-1/2 h-10 p-3 rounded-lg shadow-md shadow-rose-300 border-1 border-red-400' required name='street' value={data.street} onChange={onChangeHandler} />
              <input type="text" placeholder='pin code' className='w-1/2 h-10 p-3  rounded-lg shadow-md shadow-rose-300 border-1 border-red-400' required name='pincode' value={data.pincode} onChange={onChangeHandler} />
            </div>
            <textarea id="" placeholder='Address' className='rounded-lg shadow-md shadow-rose-300 border-1 border-red-400 h-24 p-2' required name='addres' value={data.addres} onChange={onChangeHandler}></textarea>

          </div>
        </div>

        {/* -----------payment option---------------- */}
        <div className="mt-10 max-w-2xl h-[220px] p-6 sm:p-10  rounded-3xl shadow-md shadow-slate-600 bg-gradient-to-tr from-slate-200 via-slate-50 to-slate-200">
          <h3 className='text-blue-700 font-serif'>Payment Mode</h3>
          <div className='flex flex-col justify-center items-center '>
            <div className={paymentType == "COD" ? 'payment_option bg-green-300 option_border ' : 'payment_option bg-blue-200 hover:bg-blue-400 hover:scale-105'} onClick={() => setPaymnetType("COD")}>Cash On Delivery</div>

            <div className={paymentType == "online" ? 'payment_option bg-green-300 option_border' : 'payment_option bg-blue-200 hover:bg-blue-400 hover:scale-105'} onClick={() => setPaymnetType("online")}>Online Payment</div>
          </div>

          {/*_________ order summery section__________ */}
          <div className="mt-20 max-w-2xl h-[300px] p-6 sm:p-10  rounded-3xl shadow-md shadow-slate-600 bg-gradient-to-tr from-slate-200 via-slate-50 to-green-200">
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-800">Order Summary</h3>
            <div className="bg-gray-200 opacity-80 p-2 rounded-xl mb-6">
              <div className="flex justify-between mb-2 text-green-900">
                <span>Subtotal:</span>
                <span>₹{getTotalAmount()}</span>
              </div>
              <div className="flex justify-between mb-2 text-yellow-900">
                <span>Delivery Fee:</span>
                <span>₹{DELIVERY_FEE}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-blue-200 pt-3 text-purple-900">
                <span>Grand Total:</span>
                <span>₹{getTotalAmount() + DELIVERY_FEE}</span>
              </div>
            </div>
            <div className="text-center mb-6">
              <button
                type='submit'
                className="h-10 w-[200px] bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-800 transition-colors font-semibold px-4 py-2"
                disabled={bottonDisable}
              >
                {
                  bottonDisable ? "placing order....":"place Order"
                }
              
              </button>
            </div>
          </div>
        </div>

      </form>
    </>
  )
}

export default PlaceOrder
