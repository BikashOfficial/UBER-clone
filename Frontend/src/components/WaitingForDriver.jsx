import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false)
        }}
        className='p-1 text-center w-[93%] absolute top-0'
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>

      <div className='flex items-center justify-between '>
        <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>{props.ride?.captain.fullname.firstname + " " + props.ride?.captain.fullname.lastname}</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
          <p className='text-xl text-gray-600 bg-yellow-100 rounded px-2 mt-1 font-medium'>OTP : {props.ride?.otp} </p>
        </div>

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

      </div>
    </div>
  )
}

export default WaitingForDriver