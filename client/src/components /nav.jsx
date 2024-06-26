import React from 'react'
import { Link } from 'react-router-dom'
import Axios from './axios'

function Nav({loginLink, signLink}) {

    const handleLogout = (event) => {
        event.preventDefault()
        const resp = Axios.get("/api/logout").then(resp => console.log(resp.data))
        window.location.href = "/login"  
    }
    
  return (
    <div className='py-[.5em] w-full bg-blue-600 top-0 fixed right-0 flex px-[2em] text-xl justify-between items-center'>
        <i className='text-white font-bold poppins'>Poppins </i>
        <nav>
            <ul className='flex gap-[2em] items-center'>
                <Link to={"/"}>
                    <li className='text-xl hover:scale-110 duration-[.5s] font-bold poppins text-white'>Home</li>
                </Link>
                <Link to={loginLink}>
                    <li className='text-xl hover:scale-110 duration-[.5s] font-bold poppins text-white'>Login In</li>
                </Link>
                <Link to={signLink}>
                    <li className='text-xl hover:scale-110 duration-[.5s] font-bold poppins text-white'>Sign In</li>
                </Link>
                <Link to={"/view"}>
                    <li className='text-xl hover:scale-110 duration-[.5s] font-bold poppins text-white'>View Page</li>
                </Link>
                <li onClick={handleLogout} className='text-xl rounded-[1em] px-[1em] hover:scale-110 duration-[.5s] font-bold poppins text-blue-600 p-[.2em] bg-white'>Logout</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav