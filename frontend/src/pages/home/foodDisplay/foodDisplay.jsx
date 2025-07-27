import React, { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContex'; // Adjust the path as necessary
import Fooditem from './fooditem';

function FoodDisplay({category}) {
  const { food_list } = useContext(StoreContext); // Accessing food_list from context
  return (<>
    <h1 className='md:ml-16 ml-6'>Top food near you</h1>

    <div className='max-w-[1400px] mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3'>

      {food_list.map((item, index) => {

        if (category === "All" || category === item.category) {
          return <Fooditem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category} />
        }
      })}
    </div>

  </>
  )
}

export default FoodDisplay