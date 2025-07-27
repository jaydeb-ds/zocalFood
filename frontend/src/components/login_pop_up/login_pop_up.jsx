import React, { useContext, useState } from 'react'
import axios from 'axios';
import { toast, Zoom } from 'react-toastify';

import { StoreContext } from '../../context/StoreContex';

function Login_pop_up({ setShow_login }) {

    const [currentState, setCurrentState] = useState("Sign Up")

    const changeState = () => {
        if (currentState == "Sign Up") {
            setCurrentState("Login")
        }
        else {
            setCurrentState("Sign Up")
        }
    }

    const {setToken, URL} = useContext(StoreContext)
    

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentState == "Sign Up") {
            // Handle sign up logic here
            console.log("Signing up with data:", data);
        } else {
            // Handle login logic here
            console.log("Logging in with email:", data.email);
        }
    }
const onLogin = async (e) => {
    e.preventDefault();
    let newURl = URL
    if (currentState == "Sign Up") {
        newURl += "/api/user/register";
    } else {
        newURl += "/api/user/login";
    }
    const response = await axios.post(newURl, data);

    if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message, {autoClose: 2000,theme:'colored', style: { position: 'absolute', zIndex: 1 }});
        setShow_login(false);
        
    }
    else {
     
        toast.error(response.data.message, {autoClose: 2000, theme:'colored', style: { position: 'absolute', zIndex: 1 }});
    }
 
}

    return (
        <>
            <div className="flex justify-center items-center h-screen w-full fixed z-50 bg-gradient-to-br from-[#232526fe] via-[#252526ef] to-[#232526] backdrop-blur-[2px]">
                <form
                    onSubmit={onLogin}
                    className="relative p-10 pb-16 w-[400px] bg-white/80 rounded-3xl shadow-2xl border border-gray-100 backdrop-blur-xl ring-2 ring-orange-100"
                    style={{
                        boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.25)",
                    }}
                >
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 tracking-wide drop-shadow-lg">
                            {currentState}
                        </h1>
                        <button
                            type="button"
                            onClick={() => setShow_login(false)}
                            className="text-gray-400 hover:text-red-500 text-[40px] font-bold transition-colors duration-200 mb-4 hover:scale-125 active:scale-95"
                        >
                            ×
                        </button>
                    </div>
                    {currentState === "Sign Up" ? (
                        <div className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    onChange={handleChange}
                                    value={data.name}
                                    className="h-12 w-full px-5 border-2 border-gray-200 rounded-2xl shadow focus:outline-none focus:border-orange-500 transition bg-white/70 text-gray-800 font-medium placeholder-gray-400"
                                />
                                <span className="absolute right-4 top-3 text-orange-400">
                                    <i className="fa fa-user" />
                                </span>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    onChange={handleChange}
                                    value={data.email}
                                    className="h-12 w-full px-5 border-2 border-gray-200 rounded-2xl shadow focus:outline-none focus:border-orange-500 transition bg-white/70 text-gray-800 font-medium placeholder-gray-400"
                                />
                                <span className="absolute right-4 top-3 text-orange-400">
                                    <i className="fa fa-envelope" />
                                </span>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    onChange={handleChange}
                                    value={data.password}
                                    className="h-12 w-full px-5 border-2 border-gray-200 rounded-2xl shadow focus:outline-none focus:border-orange-500 transition bg-white/70 text-gray-800 font-medium placeholder-gray-400"
                                />
                                <span className="absolute right-4 top-3 text-orange-400">
                                    <i className="fa fa-lock" />
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    onChange={handleChange}
                                    value={data.email}
                                    className="h-12 w-full px-5 border-2 border-gray-200 rounded-2xl shadow focus:outline-none focus:border-orange-500 transition bg-white/70 text-gray-800 font-medium placeholder-gray-400"
                                />
                                <span className="absolute right-4 top-3 text-orange-400">
                                    <i className="fa fa-envelope" />
                                </span>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    onChange={handleChange}
                                    value={data.password}
                                    className="h-12 w-full px-5 border-2 border-gray-200 rounded-2xl shadow focus:outline-none focus:border-orange-500 transition bg-white/70 text-gray-800 font-medium placeholder-gray-400"
                                />
                                <span className="absolute right-4 top-3 text-orange-400">
                                    <i className="fa fa-lock" />
                                </span>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="mt-10 w-full h-12 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold rounded-2xl shadow-lg hover:from-orange-600 hover:to-orange-800 hover:scale-105 active:scale-95 transition-all duration-200 tracking-wider text-lg"
                    >
                        {currentState === "Sign Up" ? "Create Account" : "Login"}
                    </button>
                    <div className="mt-10 text-center">
                        <span className="text-gray-700 font-medium">
                            {currentState === "Sign Up"
                                ? "Already have an account? "
                                : "Create a new account? "}
                        </span>
                        <span
                            onClick={changeState}
                            className="text-orange-600 font-bold cursor-pointer hover:underline ml-1 transition"
                        >
                            Click here
                        </span>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-orange-400 via-orange-600 to-orange-700 rounded-full blur-md opacity-80"></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-orange-400 via-orange-600 to-orange-700 rounded-full blur-sm opacity-60"></div>
                </form>
            </div>
            {/* FontAwesome CDN for icons */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />
        </>
    )
}

export default Login_pop_up
