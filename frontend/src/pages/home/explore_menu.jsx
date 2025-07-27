import React from 'react'
import {menu_list} from "../../assets/menu_list.js"
import "./explore_menu.css"

const Explore_menu = ({category,setCategory}) => {

function cf() {
setCategory(prev=>prev===item.menu_name?"All":item.menu_name)
console.log();

}

    return (
        <>
            <div className='max-w-[1200px] mx-auto mt-4'>
                <h1 className='text-[30px] font-semibold text-gray-800'>Explore Our Menu</h1>
                <p className='text-[16px] text-gray-600'>Discover a variety of delicious dishes from our menu.</p>
                <div className='menu_div'>
                    {/* Assuming you have a component to display the menu items */}

                    {menu_list.map((item, index) => (
                        <>
                        <div>
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={index} className="flex items-center justify-center flex-col md:w-36 md:h-36 w-[100px] h-[100px]">
                            <img src={item.menu_img} alt={item.menu_name} className={category===item.menu_name?"md:h-24 md:w-24 w-14 w:14  rounded-full object-cover p-1 shadow-2xl border-4 border-red-600 ":"md:h-24 md:w-24 w-14 w:14  rounded-full object-cover shadow-2xl"} />
                            <h2 className="md:text-lg text-sm font-semibold text-gray-800">{item.menu_name}</h2>
                        </div>
                        </div>
                        </>
                    ))}
                </div>
                <hr/>
            </div>
           
        </>
    )
}

export default Explore_menu
