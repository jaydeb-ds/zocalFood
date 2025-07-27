import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
    let navigate = useNavigate()
    
  return (
   <>
    <div className="flex flex-col items-end  h-screen max-md:w-20 w-52  bg-gray-50 shadow-lg border-r-2 border-gray-300">
        <div className="md:w-32  px-2 h-10 pb-2 flex items-center  justify-center  mt-6 border-b-2 border-l-2 border-gray-300 rounded-md bg-slate-100 shadow-md cursor-pointer hover:bg-orange-300 active:scale-90 " onClick={()=>navigate("/add")}>
            <img src={assets.add_icon} alt="Add Icon" className="w-6 h-6 mt-2 mr-2" />
            <p className="text-center text-gray-700 mt-2 max-md:hidden">Add Item</p>
        </div>

        <div onClick={()=>navigate("/list")} className="md:w-32 px-2 h-10 pb-2 flex items-center justify-center  mt-6 border-b-2 border-l-2 border-gray-300 rounded-md bg-slate-100 shadow-md cursor-pointer hover:bg-orange-300 active:scale-90">
            <img src={assets.order_icon} alt="Add Icon" className="w-6 h-6 mt-2 mr-2" />
            <p className="text-center text-gray-700 mt-2 max-md:hidden">list Item</p>

        </div>
        <div onClick={()=>navigate("/orders")} className="md:w-32 px-2 h-10 pb-2 flex items-center justify-center  mt-6 border-b-2 border-l-2 border-gray-300 rounded-md bg-slate-100 shadow-md cursor-pointer hover:bg-orange-300 active:scale-90 ">
            <img src={assets.order_icon} alt="Add Icon" className="w-6 h-6 mt-2 mr-2" />
            <p className="text-center text-gray-700 mt-2 max-md:hidden">orders </p>
        </div>
    </div>
   </>
  )
}

export default Sidebar
