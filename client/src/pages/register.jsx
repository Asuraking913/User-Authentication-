import React from 'react'
import Nav from '../components /nav'
import { useState } from 'react'
import axios from 'axios'
import Axios from '../components /axios'

function Reg() {

    const [userName, setUserName] = useState("")
    const [userPassword, setUserPass] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [msg, setMsg] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        let data = {
            "user" : userName, 
            "email" : userEmail, 
            "pass" : userPassword
        }
        try {
        const resp = await Axios.post("/api/register", data).then(resp => {
            if (resp.status == 200) {
                window.location.href = "/login"
            }
        })
    }

    catch (error) {
        setMsg(error.response.data['msg'])
        setInterval(() => {
            setMsg("")
        }, 4000)
    }
    }

  return (
    <div>
        <div className='bg-blue-100 h-screen flex items-center justify-center  linear flex-col'>
        <h1 className='poppins capitalize text-blue-950 text-[1.5rem] font-bold mb-[1em]'>Create an Account</h1>

        {msg && <p className='text-blue-950 animate-bounce'>{msg}</p>}

        <div className='bg-white h-[auto]  rounded-[1em] shadow-lg shadow-blue-600 '>
            <form action="#" onSubmit={handleSubmit}>
                <div className='h-[50px] ml-[1em] mt-[1em] w-[50px] bg-blue-600 rounded-[.5em]'></div>
                <div className='p-[1em] flex flex-col gap-[0.5em] backdrop-blur-md'>
                    <h2 className='text-3xl font-bold poppins text-blue-950'>Fill In your details</h2>
                    <h3 className='poppins text-[1rem] text-blue-600'>create an account</h3>
                </div>
                <div className='p-[1em] bg-blue-100 m-[0.5em] flex flex-col gap-[1em] rounded-xl'>
                    <p className='flex gap-[.5em] flex-col'>
                        <label className='poppins text-[1rem] font-semibold' htmlFor="username">Username</label>
                        <input onChange={e => setUserName(e.target.value)} placeholder='Enter your user name' className='w-full focus:outline-blue-600 rounded-[5px] border-blue-300 border-[1px] p-[.2em] poppins' type="text" name="username" id="username" />
                    </p>
                    <p className='flex gap-[.5em] flex-col'>
                        <label className='poppins text-[1rem] font-semibold' htmlFor="username">Email</label>
                        <input onChange={e => setUserEmail(e.target.value)} placeholder='Enter your user email' className='w-full focus:outline-blue-600 rounded-[5px] border-blue-300 border-[1px] p-[.2em] poppins' type="email" name="useremail" id="useremail" />
                    </p>
                    <p className='flex gap-[.5em] flex-col'>
                        <label className='poppins text-[1rem] font-semibold' htmlFor="Password">Password</label>
                        <input onChange={e => setUserPass(e.target.value)} placeholder='Enter your password' className='w-full focus:outline-blue-600 rounded-[5px] border-blue-300 border-[1px] p-[.2em] poppins' type="password" name="pass" id="pass" />
                    </p>
                    <p className='poppins text-blue-600'>Forgot Password?</p>
                    <button type="submit" className='bg-blue-600 p-[1em] py-[.7em] w-full text-white poppins font-bold rounded-[5px]' >Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Reg