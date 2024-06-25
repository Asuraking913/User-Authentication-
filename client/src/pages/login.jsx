import React, { useEffect, useState } from 'react'
import Nav from '../components /nav'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import Axios from '../components /axios'


function Login() {

    const [userName, setUserName] = useState("")
    const [userPassword, setUserPass] = useState("")
    const [msg, setMsg] = useState(false)
    const [newData, setNewData] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        let data = {
            "user" : userName, 
            "pass" : userPassword
        }

        if (data['user'].length < 5 || data['pass'].length <  5) {

            setMsg("Characters length should be more than five")
            setInterval(() => {
                setMsg("")
            }, 4000)
            return
        }
        setMsg("")
        try {
        const resp  = await Axios.post("api/login", data).then(resp => {
            if (resp.status == 200) {
                window.location.href = "/"  
            }
        })
    }

    catch (error) {
        console.log(error.response.status)
    }
    }

  return (
    <div className='bg-blue-100 h-screen flex items-center justify-center  linear flex-col'>
        {/* <Nav /> */}
        <h1 className='poppins capitalize text-center text-blue-950 text-[1.5rem] font-bold mb-[1em]'>Log Into your account</h1>
        {msg && <p className='animate-bounce'>{msg}</p>}
        <div className='bg-white h-[auto]  rounded-[1em] shadow-lg shadow-blue-600 '>
            <form action="#" onSubmit={handleSubmit}>
                <div className='h-[50px] ml-[1em] mt-[1em] w-[50px] bg-blue-600 rounded-[.5em]'></div>
                <div className='p-[1em] flex flex-col gap-[0.5em] backdrop-blur-md'>
                    <h1 className='text-3xl font-bold poppins text-blue-950'>Welcome back</h1>
                    <h3 className='poppins text-[1rem] text-blue-600'>Let's  explore the app again with us.</h3>
                </div>
                <div className='p-[1em] bg-blue-100 m-[0.5em] flex flex-col gap-[1em] rounded-xl'>
                    <p className='flex gap-[.5em] flex-col'>
                        <label className='poppins text-[1rem] font-semibold' htmlFor="username">Username</label>
                        <input onChange={e => setUserName(e.target.value)} placeholder='Enter your user name' className='w-full focus:outline-blue-600 rounded-[5px] border-blue-300 border-[1px] p-[.2em] poppins' type="text" name="username" id="username" />
                    </p>
                    <p className='flex gap-[.5em] flex-col'>
                        <label className='poppins text-[1rem] font-semibold' htmlFor="Password">Password</label>
                        <input onChange={e => setUserPass(e.target.value)} placeholder='Enter your password' className='w-full focus:outline-blue-600 rounded-[5px] border-blue-300 border-[1px] p-[.2em] poppins' type="password" name="pass" id="pass" />
                    </p>
                    <div className='flex justify-between'>
                        <p className='poppins text-blue-600 hover:underline '>Forgot Password?</p>
                        <Link to={"/register"}>
                            <p className='poppins text-blue-600 hover:underline '>Create an account!</p>
                        </Link>
                    </div>
                    <button type="submit" className='bg-blue-600 p-[1em] py-[.7em] w-full text-white poppins font-bold rounded-[5px]' >Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login