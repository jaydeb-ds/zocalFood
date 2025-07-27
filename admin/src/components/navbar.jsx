import React from 'react'

function Navbar() {
    return (
        <nav className=" shadow-md px-6 py-3">
            <div className="flex flex-col md:pl-8">
                <h1 className="text-orange-600 text-3xl font-serif italic font-bold cursor-pointer">Zocal food</h1>
                <p className="text-sm text-gray-500 mb-2">Admin Dashboard</p>       
            </div>
        </nav>
    )
}

export default Navbar
