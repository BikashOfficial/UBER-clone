import React from 'react'

const RidePopUp = (props) => {
    return (
        <div>

            <h5 onClick={() => {
                props.setRidePopupPanel(false)
            }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
            <h3 className='font-semibold text-2xl mb-5'>New Ride Avaliable</h3>

            <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
                <div className='flex items-center gap-3'>
                    <img className='size-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrvbjwtgii40vjhTtoo_Rn5P0cz1V5P_SHA&s" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname+ " " +props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            <div className='flex flex-col gap-5 justify-between items-center'>
                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-xl ri-map-pin-add-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-xl ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <i className="text-xl ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹ {props.ride?.fare}</h3>
                            <p className='text-sm text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setConfirmRidePopupPanel(true)
                    props.confirmRide()
                }} className=' mt-5 w-full bg-green-600 rounded-lg text-white text-xl font-semibold p-2'>Accept</button>
                <button onClick={() => {
                    props.setRidePopupPanel(false)
                }} className='mt-1 w-full bg-gray-200 rounded-lg text-gray-700 text-xl font-semibold p-2'>Ignore</button>

            </div>
        </div>
    )
}

export default RidePopUp