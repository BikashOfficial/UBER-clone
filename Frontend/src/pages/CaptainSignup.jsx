import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CaptainSignup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');


  const { captain, setCaptain } = React.useContext(CaptainDataContext);


  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = ({
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      }
    })

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');

  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <a href="/"><img className='w-16 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" /></a>

        <h2 className='font-semibold text-4xl mb-3'>Wanna be a Captain ?</h2>

        <form onSubmit={submitHandler}>

          <h3 className='text-lg font-medium mb-2'>Enter your Name</h3>
          <div className='flex gap-2 mb-6'>
            <input
              className='bg-[#eeee] rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base '
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder='first name'
            />

            <input
              className='bg-[#eeee] rounded-lg px-4 py-2 border w-1/2 text-lg placeholder:text-base '
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder='last name'
            />
          </div>

          <h3 className='text-lg mb-2 font-medium'>Enter your Email</h3>
          <input
            className='bg-[#eeee] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base '
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2 '>Enter Password</h3>
          <input
            className='bg-[#eeee] mb-6 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base '
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />

          <div className='flex gap-2 mb-6'>
            <div className='w-1/2'>
              <h3 className='text-lg font-medium mb-2'>Vehicle Color</h3>
              <input
                className='bg-[#eeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                required
                placeholder='Vehicle Color'
              />
            </div>

            <div className='w-1/2'>
              <h3 className='text-lg font-medium mb-2'>Vehicle Type</h3>
              <select
                className='bg-[#eeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">moto</option>
              </select>
            </div>
          </div>

          <div className='flex gap-2 mb-6'>
            <div className='w-1/2'>
              <h3 className='text-lg font-medium mb-2'>Vehicle Plate</h3>
              <input
                className='bg-[#eeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                required
                placeholder='Vehicle Plate'
              />
            </div>

            <div className='w-1/2'>
              <h3 className='text-lg font-medium mb-2'>Vehicle Capacity</h3>
              <input
                className='bg-[#eeee] rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                type="number"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                required
                min={1}
                placeholder='Vehicle Capacity'
              />
            </div>
          </div>


          <button
            className='bg-[#111] text-[white] font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base '
          >Create Account</button>

        </form>

        <p className='text-center'>already a captain ? <Link to='/captain-login' className='text-blue-700'>Login here</Link></p>
      </div>

      <div>
        <p className='text-[12px] leading-tight'>By Proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default CaptainSignup