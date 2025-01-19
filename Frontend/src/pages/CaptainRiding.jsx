import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])

    return (
        <div className='h-screen'>


            <div className='flex fixed items-center top-0 p-6 justify-between w-full'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />

                <Link to={`/captain-home`} className='right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div onClick={() =>{
                setFinishRidePanel(true)
            }} className='h-1/5 p-6 bg-yellow-400 relative flex items-center justify-between'>
                <h5
                    onClick={() => {

                    }}
                    className='p-1 text-center w-[93%] absolute top-0'
                ><i className="text-3xl text-black ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-bold'>4 KM away</h4>
                <button className='bg-green-500 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>

            <div ref={finishRidePanelRef} className='fixed rounded-2xl z-10 bottom-0 translate-y-full px-3 py-6 pt-12  bg-white w-full '>
                <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
            </div>
        </div>
    )
}

export default CaptainRiding