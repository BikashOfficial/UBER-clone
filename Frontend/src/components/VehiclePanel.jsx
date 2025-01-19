import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() =>{
          props.setVehiclePanel(false)
          
        }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
        <h3 className='font-semibold text-2xl mb-5'>Choose a Vehicle</h3>
        <div onClick={() =>{
            props.setConfirmRidePanel(true)
            props.setVehiclePanel(false)
            props.selectVehicle('car')
        }} className='p-3 mb-3 flex border-2 active:border-black rounded-xl items-center justify-between w-full'>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i class="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ {props.fare.car}</h2>
        </div>
        <div onClick={() =>{
            props.setConfirmRidePanel(true)
            props.setVehiclePanel(false)
            props.selectVehicle('motorcycle')
        }} className='p-3 mb-3 flex border-2 active:border-black rounded-xl items-center justify-between w-full'>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Motorcycle <span><i class="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ {props.fare.motorcycle}</h2>
        </div>
        <div onClick={() =>{
            props.setConfirmRidePanel(true)
            props.setVehiclePanel(false)
            props.selectVehicle('auto')            
        }} className='p-3 mb-3 flex border-2 active:border-black rounded-xl items-center justify-between w-full'>
          <img className='h-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s" alt="" />
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i class="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹ {props.fare.auto}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel