import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { Route, Routes, } from "react-router-dom"
import {ToastContainer,} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

import Add from "./pages/add";
import List from "./pages/list";
import Order from "./pages/orders";


function App() {
const url = "http://localhost:5000"

  return (
    <>
      <Navbar />
      <div className="flex">
        <ToastContainer closeOnClick limit={3} />
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Order/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;