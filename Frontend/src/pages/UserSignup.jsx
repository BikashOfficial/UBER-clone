import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

function UserSignup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const {user, setUser} = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data;

      setUser(data.user)
      localStorage.setItem('token', data.token);
      navigate('/Home');
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <a href="/"><img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" /></a>

        <h2 className='font-semibold text-4xl mb-4'>Hello 👋 ,</h2>

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

          <button
            className='bg-[#111] text-[white] font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base '
          >Create Account</button>

        </form>

        <p className='text-center'>already have an account ? <Link to='/login' className='text-blue-700'>Login here</Link></p>
      </div>

      <div>
        <p className='text-[12px] leading-tight'>By Proceeding, you conset to get calls , WhatsApp or SMS messages, including by automated means, from Uber and its affiliate to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignup