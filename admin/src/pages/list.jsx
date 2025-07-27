import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

function List() {
  const URL = "http://localhost:5000"
  const [list, setList] = useState([])

  const fetchlist = async()=>{
    const res = await axios.get(`${URL}/api/food/list`);

    console.log(res.data.food);
    if(res.data.success==true){
      setList(res.data.food)
    }
    else{
      toast.error("food list reloaded fail")
    }
  }

  const removeFood = async(food_ID)=>{

      await axios.post(`${URL}/api/food/remove`,{id:food_ID})
      toast.success("Food deleted")
      await fetchlist()
  }

  useEffect(()=>{
    fetchlist()
  },[])
  

  return (
   <div className="p-8 bg-gray-50  w-full">
    <h1 className="text-3xl font-bold mb-8 text-center">Food List</h1>
    <div className="flex flex-wrap justify-center gap-6">
      {
        list.map((item,index)=>(
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-[280px]">
            <img
              src={`${URL}/images/`+ item.image}
              alt={item.name}
              className="w-56 h-36 object-cover rounded-md mb-4"
            />

            <div className='w-full flex j ml-6 '>
             <h2 className="text-xl font-semibold mb-2">{item.name}</h2>  
             </div>

             <div className='w-full flex justify-between px-4'>
                <p className="text-gray-600 mb-1 capitalize">Category : {item.category}</p>
             </div>
            
             <div className='w-full flex justify-between items-center px-4'>
                <h1 className="text-gray-950 mb-1 text-lg font-bold"> ₹{item.price}</h1>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition active:scale-95"
              onClick={()=>removeFood(item._id)}
            >
              Remove
            </button>
            </div>
          </div>
        ))
      }
    </div>
   </div>
  )
}

export default List