import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

function Riding(props) {
    const navigate = useNavigate();

    const location = useLocation()
    const { ride } = location.state || {}
    const { socket } = useContext(SocketContext)


    socket.on('ride-ended',()=>{
        navigate(`/home`)
        // socket.emit('end-ride', { rideId: ride._id })
    })

    return (
        <div className='h-screen'>

            <Link to={`/home`} className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-4-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-1/2 p-4 flex flex-col justify-between'>
                <div>
                    <div className='flex items-center justify-between '>
                        <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
                        <div className='text-right'>
                            <h2 className='text-lg font-medium'>{ride?.captain.fullname.firstname + " " + ride?.captain.fullname.lastname}</h2>
                            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                        </div>

                    </div>

                    <div className='flex flex-col gap-5 justify-between items-center'>


                        <div className='w-full'>

                            <div className='flex items-center gap-5 p-3 border-b-2'>
                                <i className="text-xl ri-map-pin-2-fill"></i>
                                <div>
                                    <h3 className='text-lg font-medium'>562/11-A</h3>
                                    <p className='text-sm text-gray-600'>{ride?.destination}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 p-3 '>
                                <i className="text-xl ri-currency-line"></i>
                                <div>
                                    <h3 className='text-lg font-medium'>₹ {ride?.fare}</h3>
                                    <p className='text-sm text-gray-600'>Cash Cash</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <button className=' mt-5 w-full bg-green-600 rounded-lg text-white text-xl font-semibold p-2'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding