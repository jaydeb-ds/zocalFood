
import Explore_menu from './explore_menu';
import Carouselhome from './carousel'
import './home.css'; 
import { useState } from 'react';
import FoodDisplay from './foodDisplay/foodDisplay';
import Footer from '../../components/footer/footer';
import OrderSection from '../../components/orderSection';
import HeroSection from '../../components/heroSection';
import ServicesSection from '../../components/services';
import ContactUs from '../../components/contactus';

function Home() {

  const [category, setCategory] = useState("All")

  const text_style = {
          textDecoration:"none"
    }

  return (<>
    {/* ___Carousel___ */}
    <Carouselhome />

    {/* ___Heading Text and Button___ */}
    <div className="max-w-[1200px] h-[200px] pl-4 mx-auto mt-4 absolute md:top-[250px] left-0 right-0 bottom-0 top-[120px] ">

      <h1 className="text-[#38d445] md:text-[70px] font-serif heading-animate-left">Order your <br /> favourite food here</h1>

      <p className="text-[#dad9e0] md:text-[18px] text-[14px] italic font-serif heading-animate-down">We bring your favorite meals <br /> straight to your door—hot, fresh, and fast. <br /> </p>

      <a href='#menu' style={text_style} className=" h-[40px] w-[100px] ml-[3px] px-2 py-2 rounded-md bg-red-500 text-white z-10 hover:bg-green-700 absolute button-animate-bounce">
        view menu
      </a>
    </div>

    {/* ___About___ */}


    <div id='about'> 
    <HeroSection/>
    
    {/* service */}
    <ServicesSection/>
    </div>

    {/* ___Explore Menu___ */}
    <div id='menu'> 
        <Explore_menu category={category} setCategory={setCategory}/>

    {/* ____Food Dispaly____ */}
   
    <FoodDisplay category={category} />
    </div>
    <hr className='mt-10'/>

    <OrderSection/>
    {/* footer */}
    <div id='ContactUs'>

    <ContactUs/>

    </div>
  <Footer/>
  </>
  )
}

export default Home