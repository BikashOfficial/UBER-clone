import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
    return (
        <div>
            <div className='bg-[url(https://wallpaperaccess.com/full/7152994.jpg)] bg-no-repeat bg-cover bg-center h-screen w-full pt-5 flex justify-between flex-col'>
                <img className='w-16 ml-8' src="https://shorturl.at/083kF" alt="" />
                <div className='bg-white pb-7 px-4 py-4'>
                    <h2 className='text-3xl text-center font-bold'>Get Started with Uber</h2>
                    <Link className='w-full flex items-center justify-center bg-black text-white py-3 rounded-lg mt-5' to='/login'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start