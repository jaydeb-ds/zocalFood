import { use, useContext,} from "react"
import { StoreContext } from "../../context/StoreContex.jsx"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import Footer from "../../components/footer/footer.jsx";



function Cart() {

  const { food_list, cartItem, removeFromCart,getTotalAmount,URL}= useContext(StoreContext)

  const totalQuantity = Object.keys(cartItem).reduce(
    (sum, id) => sum + cartItem[id], 0
  );


  const DELIVERY_FEE = getTotalAmount() > 0 ? 40:0 


  const navigate = useNavigate();

  return (
    <>
    <div className="bg-white text-gray-800 ">
    <div className="">
          <h2 className="text-4xl font-bold text-center mb-8 mt-10">
                Your <span className="text-green-500">Cart</span>
            </h2>
      

      {getTotalAmount() === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 ">
          <svg className="w-20 h-20 text-blue-500 mb-6 animate-bounce " fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h7a1 1 0 011 1v7" />
          </svg>
          <p className="text-red-600 text-2xl font-semibold">Your cart is empty.</p>
        </div>
      ) : (
        <>
        
          <div className="space-y-6 md:mx-[200px] ">
            {food_list
              .filter(item => cartItem[item._id] > 0)
              .map(item => (
                <li
                  key={item._id}
                  className="flex items-center justify-between bg-white rounded-2xl shadow p-4 hover:shadow-xl transition-all "
                >
  
                        <div className="flex items-center gap-4">
                            <img
                                src={URL+"/images/"+item.image}
                                alt={item.title}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-lg font-semibold">{item.name}</h4>
                                <p className="text-gray-400 text-sm">Quantity : <span className="bg-blue-100 px-2 py-1 rounded text-blue-700">{cartItem[item._id]}</span> </p>
                            </div>
                        </div>
                
                        
                    <span className="text-xl font-semibold text-amber-400">₹{item.price * cartItem[item._id]}</span>

                    <button
                      onClick={() => {removeFromCart(item._id)}}
                      className="text-red-500 hover:text-red-700 text-xl font-bold"
                    >
                      <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white shadow-md transition-all duration-300 cursor-pointer">
                                <i class="fas fa-trash text-xl"></i>
                            </div>

                    </button>
                    
          
                </li>
              ))}
          </div>
        </>
      )}
    </div>
      
      
  {getTotalAmount()=== 0? null:
  (
    <div className="max-w-2xl mx-auto p-6 sm:p-10 bg-gray-50 rounded-xl shadow w-[340px] mt-10">
          <h3 className="text-sky-700 text-2xl font-bold mb-4 text-center ">Order Summary</h3>
          <div className="bg-slate-100 p-6 rounded-xl mb-6">
            <div className="flex justify-between mb-2 text-blue-900">
              <span>Total Quantity:</span>
              <span>{totalQuantity}</span>
            </div>
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
              <span>₹{getTotalAmount()+DELIVERY_FEE}</span>
            </div>
          </div>
          <div className="text-center mb-2">
          <button 
          onClick={() => navigate('/order')}
            className="w-[200px] mt-2  bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 shadow-md2"
          >
            Proceed To Checkout →
          </button>
          </div>
        </div>

  )}
   
</div>   
   <Footer/>
  </>
  )
}

export default Cart