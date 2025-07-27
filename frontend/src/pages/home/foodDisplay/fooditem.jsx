import React, { useContext, useState } from 'react'
import './foodDisplay.css'; // Assuming you have a CSS file for styles
import { StoreContext } from '../../../context/StoreContex';
import { ToastContainer, toast } from 'react-toastify';
import rating_stars from '../../../assets/rating_starts.png'; 

function Fooditem({ id, name, image, price, description, category }) {
 
  const [itemCount, setItemCount] = useState(0)
  const { cartItem, addToCart, removeFromCart,URL } = useContext(StoreContext)

  console.log(cartItem);


  return (<>
    <div className='bg-gradient-to-t from-white via-white to-white rounded-lg p-4 md:m-2 mb-2 flex flex-col shadow-md fooditem_container'>
      <img src={URL+"/images/"+image} alt={name} className='w-full h-64 object-cover rounded-md mb-4 shadow-lg fooditem_img' />
      <div className='flex items-center justify-between mb-2'>
        <h2 className='text-2xl text-pink-700 font-semibold mb-2 '>{name}</h2>
        <div >
          {
            !cartItem[id] ?
              <button onClick={() => { addToCart(id)}} className='item_count_div bg-green-300 hover:scale-x-105'>+</button> :
              <div className=' count_I_D_div'>
                <button onClick={() => { removeFromCart(id)}} className='item_count_div bg-red-300' >-</button>


                <button>{cartItem[id]}</button>

                <button onClick={() => { addToCart(id)}} className='item_count_div bg-green-300'>+</button>
              </div>
          }
        </div>
      </div>
      <p className=' text-sky-900 mb-2'>{description}</p>
      <div className='flex items-center justify-between mt-4'>
        <span className='text-xl font-semibold text-white bg-red-500 h-[50px] w-[60px] p-2 rounded-full flex items-center justify-center'>₹{price}</span>
        <img src={rating_stars} alt="" />
      </div>

    </div>
  </>
  )
}

export default Fooditem