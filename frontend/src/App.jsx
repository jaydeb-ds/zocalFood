
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer,} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

import Home from "./pages/home/home"
import Cart from "./pages/cart/cart"
import PlaceOrder from "./pages/placeOrder/placeOrder"
import Navbar from "./components/navbar/navbar";
import Myorder from "./pages/Myorders/myorders";





function App() {
  

  return (
    <> 
    <div> 
      <Navbar/>
      <ToastContainer limit={4} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element = {<PlaceOrder/>}/>
        <Route path="/verify" element = {<PlaceOrder/>}/>
        <Route path="/myorders" element ={<Myorder/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
