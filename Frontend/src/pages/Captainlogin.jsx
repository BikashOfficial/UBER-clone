import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

function Captainlogin() {

   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [captainData, setCaptainData] = useState({});

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async(e) => {
        e.preventDefault();

        const captainData = ({
            email: email,
            password: password
        })

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);

        if (response.status === 200) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }
        // console.log(captainData);
        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <a href="/"><img className='w-16 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" /></a>
                <h2 className='font-semibold text-4xl mb-3'>Hey, Captain !</h2>
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg mb-2 font-medium'>What's your Email</h3>
                    <input
                        className='bg-[#eeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base '
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='email@example.com'
                    />

                    <h3 className='text-lg font-medium mb-2 '>Enter Password</h3>
                    <input
                        className='bg-[#eeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base '
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='password'
                    />

                    <button
                        className='bg-[#111] text-[white] font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base '
                    >Login</button>


                </form>

                <p className='text-center'>Join a fleet ? <Link to='/captain-signup' className='text-blue-700'>Register as a Captain</Link></p>
            </div>

            <div>
                <Link
                    to='/login'
                    className='bg-blue-700 text-[white] flex justify-center items-center font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base '
                >Signin as User</Link>
            </div>
        </div>
    )
}

export default Captainlogin