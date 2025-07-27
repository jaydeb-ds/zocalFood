import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login_pop_up from "../login_pop_up/login_pop_up";
import { StoreContext } from "../../context/StoreContex";
import logout_icon from "../../assets/logout_icon.png"
import bag_icon from "../../assets/bag_icon.png"


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [totalItems, setTotalItems] = useState(0)

    const { token, setToken, show_login, setShow_login, cartItem } = useContext(StoreContext)
    let navigate = useNavigate()


    const text_style = {

        textDecoration: "none"
    }

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    useEffect(() => {
        let items = Object.values(cartItem)
        let sum = 0;
        items.forEach(i => {
            sum = i + sum;
        })
        setTotalItems(sum)
    },)

    return (
        <>
            {show_login ? <Login_pop_up setShow_login={setShow_login} /> : null}
            <nav className="absolute w-full z-40 rounded bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 shadow-lg shadow-slate-700/40 py-2">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                    {/* Logo */}
                    <h1
                        className="text-amber-500 text-4xl italic font-bold cursor-pointer drop-shadow-lg "
                        onClick={() => navigate("/")}
                    >
                        Zocal <span className="text-white">Food</span>
                    </h1>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-14 mt-1 px-16 h-[50px] rounded-3xl bg-slate-700/60 backdrop-blur-md shadow-md py-2">
                        <p
                            onClick={() => navigate("/")}
                            className="text-[20px] cursor-pointer text-orange-100 font-semibold hover:scale-110 hover:text-yellow-400 transition-all duration-200 flex items-center gap-2 mt-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 inline"
                            >
                                <path d="M12 3.172l-7 7V20a1 1 0 001 1h4.5a.5.5 0 00.5-.5V16a2 2 0 114 0v4.5a.5.5 0 00.5.5H20a1 1 0 001-1v-9.828l-7-7z" />
                                <path d="M12 7.5a2.5 2.5 0 00-2.5 2.5c0 1.38 2.5 3.5 2.5 3.5s2.5-2.12 2.5-3.5A2.5 2.5 0 0012 7.5z" />
                            </svg>
                            Home
                        </p>
                        <a
                            href="#menu"
                            onClick={() => navigate("/")}
                            className="text-[20px] cursor-pointer font-semibold text-orange-100 hover:scale-110 hover:text-yellow-400 transition-all duration-200 flex items-center gap-2"
                            style={text_style}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 inline mt-[0.5px]"
                            >
                                <rect x="4" y="6" width="16" height="2" rx="1" />
                                <rect x="4" y="11" width="16" height="2" rx="1" />
                                <rect x="4" y="16" width="16" height="2" rx="1" />
                            </svg>
                            <span>Menu</span>
                        </a>
                        <a
                            href="#ContactUs"
                            onClick={() => navigate("/")}
                            className="text-[20px] cursor-pointer font-semibold text-orange-100 hover:scale-110 hover:text-yellow-400 transition-all duration-200 flex items-center gap-2"
                            style={text_style}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 mt-[0.5px] inline"
                            >
                                <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5.659v9.091c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V7.409l-8.25 5.5-8.25-5.5zm1.06-1.159 7.19 4.793a.75.75 0 0 0 .8 0l7.19-4.793a.75.75 0 0 0-.44-.159h-15a.75.75 0 0 0-.44.159z" />
                            </svg>
                            Contact us
                        </a>
                    </div>
                    {/* Cart button*/}
                    <div className="hidden md:flex items-center">
                        <div
                            onClick={() => navigate("/cart")}
                            className="text-[17px] cursor-pointer text-orange-100 font-semibold hover:scale-110 hover:text-yellow-400 transition-all duration-200 flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-700/50 hover:bg-slate-600/70"
                        >
                            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="40" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                            </svg>
                            <span className="text-yellow-100 font-semibold">Cart</span>
                              <span className={totalItems == 0 ? "hidden":"h-6 w-6 bg-red-600 rounded-full flex items-center justify-center text-[12px]  text-white font-semibold"}>{totalItems}</span>


                        </div>
                        {/* Sign In Button */}
                        {!token ? (
                            <button
                                onClick={() => setShow_login(true)}
                                className="ml-4 px-4 py-1 rounded-md bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold shadow hover:from-green-700 hover:to-green-500 transition-all"
                            >
                                Sign In
                            </button>
                        ) : (
                            <div className="relative">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    alt="profile"
                                    className="ml-8 w-9 h-9 rounded-full cursor-pointer border-2 border-orange-300 hover:scale-125 transition-all duration-200 shadow"
                                    onClick={() => setDropdown(!dropdown)}
                                />
                                {dropdown && (
                                    <ul className="absolute right-0 top-12 left-4  px-8 py-3 w-[170px] bg-white/95 text-black rounded-md shadow-lg border border-slate-200 space-y-2 z-50">
                                        <li
                                            onClick={() => { setDropdown(false); navigate("/myorders"); }}
                                            className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:text-orange-500 transition-all"
                                        >
                                            <img src={bag_icon} className="h-6" alt="Order" /> Order
                                        </li>
                                        <hr />
                                        <li
                                            onClick={logout}
                                            className="flex items-center gap-2 cursor-pointer hover:scale-105 hover:text-red-500 transition-all"
                                        >
                                            <img src={logout_icon} className="h-6" alt="Logout" /> Logout
                                        </li>
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                    {/* Login Icon */}
                    <div className="md:hidden flex items-center gap-2">
                        <div className="relative">
                            <svg
                                onClick={() => navigate("/cart")}
                                className="w-7 h-7 text-orange-100 hover:text-yellow-400 transition-colors"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                            </svg>
                            <span className={totalItems == 0 ? "hidden":"h-5 w-5 bg-red-600 rounded-full flex items-center justify-center text-[12px] absolute bottom-4 left-4 text-white font-semibold"}>{totalItems}</span>
                        </div>
                        {/* Hamburger */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-gray-300 ml-3 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden bg-gradient-to-b from-slate-800 to-slate-700 shadow-lg pl-6 flex flex-col py-4 space-y-2 rounded-b-xl">
                        <p
                            onClick={() => { navigate("/"); setOpen(false); }}
                            className="text-[18px] cursor-pointer text-orange-100 font-semibold flex items-center gap-2 hover:text-yellow-400 transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 inline"
                            >
                                <path d="M12 3.172l-7 7V20a1 1 0 001 1h4.5a.5.5 0 00.5-.5V16a2 2 0 114 0v4.5a.5.5 0 00.5.5H20a1 1 0 001-1v-9.828l-7-7z" />
                                <path d="M12 7.5a2.5 2.5 0 00-2.5 2.5c0 1.38 2.5 3.5 2.5 3.5s2.5-2.12 2.5-3.5A2.5 2.5 0 0012 7.5z" />
                            </svg>
                            Home
                        </p>
                        <a
                            href="#menu"
                            onClick={() => { navigate("/"); setOpen(false); }}
                            className="text-[18px] cursor-pointer font-semibold text-orange-100 flex items-center gap-2 mb-2 hover:text-yellow-400 transition-all"
                            style={text_style}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 inline mt-[0.5px]"
                            >
                                <rect x="4" y="6" width="16" height="2" rx="1" />
                                <rect x="4" y="11" width="16" height="2" rx="1" />
                                <rect x="4" y="16" width="16" height="2" rx="1" />
                            </svg>
                            <span>Menu</span>
                        </a>

                        <a href="#ContactUs" onClick={() => { navigate("/"), setOpen(false) }} className="  text-[18px] cursor-pointer font-semibold text-orange-100 flex mb-3" style={text_style}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 mt-[0.5px] inline "
                            >
                                <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5.659v9.091c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V7.409l-8.25 5.5-8.25-5.5zm1.06-1.159 7.19 4.793a.75.75 0 0 0 .8 0l7.19-4.793a.75.75 0 0 0-.44-.159h-15a.75.75 0 0 0-.44.159z" />
                            </svg>
                            Contact us
                        </a>

                        {/* Sign In Button */}
                        {!token ? <button onClick={() => setShow_login(true)} className="text-[20px] cursor-pointer text-orange-100 font-semibold flex mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 28 28"
                                fill="currentColor"
                                className="w-6 h-6 mt-1 inline"
                            >
                                <circle cx="12" cy="8" r="4" />
                                <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
                            </svg>
                            Sign In
                        </button> :
                            <div >

                                <p onClick={() => { navigate("/myorders"), setOpen(false) }} className="text-[18px] cursor-pointer font-semibold text-orange-100 flex"><img src={bag_icon} className="h-6" /> Order</p>

                                <p onClick={logout} className="text-[18px] cursor-pointer font-semibold text-orange-100 flex"><img src={logout_icon} className="h-6" /> logout</p>

                            </div>
                        }

                    </div>
                )}
            </nav>
            <div className="h-[4.5rem]"> </div>
        </>
    );
};

export default Navbar; 