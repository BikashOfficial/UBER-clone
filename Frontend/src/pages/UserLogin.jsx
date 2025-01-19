import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const { user, setUser } = React.useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        }
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

        if (response.status === 200) {
            const data = response.data;
            setUser(data.user)
            localStorage.setItem('token', data.token);
            navigate('/Home');
        }

        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <a href="/"><img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" /></a>
                <h2 className='font-semibold text-4xl mb-4'>Hello 👋 ,</h2>
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg mb-3 font-medium'>What's your Email</h3>
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

                <p className='text-center'>new here ? <Link to='/signup' className='text-blue-700'>Create new Account</Link></p>
            </div>

            <div>
                <Link
                    to='/captain-login'
                    className='bg-green-700 text-[white] flex justify-center items-center font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base '
                >Signin as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin