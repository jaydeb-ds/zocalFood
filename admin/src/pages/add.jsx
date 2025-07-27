import React, {useState } from 'react'
import axios from 'axios';
import { toast, Zoom } from 'react-toastify';

function Add() {
  let url = "https://zocalfood.onrender.com"
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    price: '',
    category: '',
    description: ''
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data,[name]: value});
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
       if (!image) {
      toast.error("please upload image",{autoClose:3000})
      return;
    }
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('image', image);

    const response = await axios.post(url+'/api/food/add', formData);
    if (response.data.success) {

      toast.success(response.data.message,{autoClose:2000})
      setData({
        name: '',
        price: '',
        category: '',
        description: ''
      });
      setImage("");
    }
    else{
      toast.error("can't uploaded")
    }
    } catch (error) {
      toast.error("can't uploaded")
    }
  }

  return (
    <div className='w-full bg-slate-50'>
      <form className="w-full max-w-4xl sm:max-w-3xl md:max-w-4xl mt-2 lg:max-w-5xl p-6 md:w-[800px] " onSubmit={onSubmitHandler}>
        <h2 className="text-2xl md:ml-10 md:mb-10 mb-5 font-bold text-pink-600">Add New Item</h2>
        <div className='w-full md:flex justify-evenly'>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-800 mb-1" htmlFor="name">Item Name</label>
          <input
            type="text"
            id="name"
            className="w-[300px] px-3 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-base shadow-lg shadow-blue-100"
            placeholder="Enter item name"
            required
            value={data.name}
            onChange={onChangeHandler}  name="name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-800 mb-1" htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            className="w-[300px] px-3 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-base shadow-lg shadow-blue-100"
            placeholder="Enter item price"
            onChange={onChangeHandler} value={data.price} name="price"
            min="0"
            required
          />
        </div>
        </div>

        <div className='w-full md:flex justify-evenly'>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-800 mb-1" htmlFor="category">Category</label>
          <select
            id="category"
            className="w-[300px] px-3 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-base shadow-lg shadow-blue-100"
            defaultValue=""
            onChange={onChangeHandler} value={data.category} name="category"
            required
          >
            <option value="" disabled>Select category</option>
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Biryani">Biryani</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-800 mb-1" htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="w-[300px] px-3 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-base shadow-lg shadow-blue-100 bg-white"
            onChange={(e) =>setImage(e.target.files[0])}
            
          />
        </div>
        </div>

        <div className="mb-6 md:ml-[50px]">
          <label className="block text-base font-medium text-gray-800 mb-1" htmlFor="description">Description</label>
          <textarea
            id="description"
            className="w-[300px] px-3 py-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-base resize-none shadow-lg shadow-blue-100"
            rows={4}
            required
            placeholder="Enter item description"
            onChange={onChangeHandler} value={data.description} name="description"
          ></textarea>
        </div>
        <button
          
          type="submit"
          className="w-[150px] md:ml-[50px] bg-gradient-to-r from-blue-500 to-purple-500 text-white text-base font-semibold px-4 py-2 rounded shadow-lg shadow-purple-500 hover:from-blue-600 hover:to-purple-600 transition active:scale-95"
        >
          Add Item
        </button>
      </form>
    </div>
  )
}

export default Add
