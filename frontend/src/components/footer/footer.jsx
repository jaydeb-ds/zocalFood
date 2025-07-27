import React from 'react'

function Footer() {
    return (<>
        <div className='h-[300px] w-full bg-slate-900 mt-16 ]' id='ContactUs'>
            <div className='max-w-[1200px] mx-auto text-white md:flex items-center justify-between h-full px-4'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold text-yellow-300'>Food Delivery</h1>
                    <p className='text-sm'>Delivering your favorite meals to your doorstep.</p>
                </div>
                <div className='flex gap-8 '>
                   
                    <div className='flex flex-col cursor-pointer'>
                        <h2 className='text-lg font-semibold text-rose-500'>Follow Us</h2>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer