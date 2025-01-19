import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setVehicleFound(false)
            }} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
            {/* <h3 className='font-semibold text-2xl mb-5'>Looking for a Driver</h3> */}
            <h3 className='font-semibold text-2xl mb-5'>
                Looking for a Driver
                <span className="dot-ellipsis">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </span>
            </h3>

            <div className="relative w-full h-1 overflow-hidden mb-2">
                <div className="absolute top-0 left-0 w-full h-full bg-black animate-slide"></div>
            </div>

            <style jsx>{`
            @keyframes slide {
                0% {
                    transform: translateX(-100%);
                }
                100% {
                    transform: translateX(100%);
                }
            }
            .animate-slide {
                animation: slide 1s linear infinite;
            }
                .dot-ellipsis span {
          animation: blink 1.4s infinite both;
        }
        .dot-ellipsis span:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot-ellipsis span:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        `}</style>

            <div className='flex flex-col gap-5 justify-between items-center'>
                <img className='h-32' src={
                    props.vehicleType === 'car' ? "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" :
                        props.vehicleType === 'motorcycle' ? "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" :
                            props.vehicleType === 'auto' ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s" :
                                "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
                } alt="" />


                <div className='w-full'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-xl ri-map-pin-add-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-xl ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>{props.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 '>
                        <i className="text-xl ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹ {props.fare[props.vehicleType]}</h3>
                            <p className='text-sm text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LookingForDriver