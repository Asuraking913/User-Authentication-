import React from 'react'
import Nav from '../components /nav'

function Login() {
  return (
    <div className='bg-blue-100 h-screen flex items-center justify-center  linear'>
        <Nav />
        <div className='bg-white h-[auto]  rounded-[1em] shadow-lg shadow-blue-600 '>
            <form action="#">
                <div className='h-[50px] ml-[1em] mt-[1em] w-[50px] bg-blue-600 rounded-[.5em]'></div>
                <div className='p-[1em] flex flex-col gap-[0.5em] backdrop-blur-md'>
                    <h1 className='text-3xl font-bold poppins text-blue-950'>Welcome back</h1>
                    <h3 className='poppins text-[1rem] text-blue-600'>Let's  explore the app again with us.</h3>
                </div>
                <div className='p-[1em] bg-blue-100 m-[0.5em] flex flex-col gap-[1em] rounded-xl'>
                    <p className='flex gap-[.5em] flex-col'>
                        <label className='poppins text-[1rem] font-semibold' htmlFor="username">Username</label>
                        <input placeholder='Enter your user name' className='w-full focus:outline-blue-600 rounded-[5px] border-blue-300 border-[1px] p-[.2em] poppins' type="text" name="username" id="username" />
                    </p>
                    <p className='flex gap-[.5em] flex-col'>
                        <label className='poppins text-[1rem] font-semibold' htmlFor="Password">Password</label>
                        <input placeholder='Enter your password' className='w-full focus:outline-blue-600 rounded-[5px] border-blue-300 border-[1px] p-[.2em] poppins' type="password" name="pass" id="pass" />
                    </p>
                    <p className='poppins text-blue-600'>Forgot Password?</p>
                    <button type="submit" className='bg-blue-600 p-[1em] py-[.7em] w-full text-white poppins font-bold rounded-[5px]' >Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login