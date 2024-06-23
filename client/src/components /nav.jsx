import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='py-[.5em] w-full bg-blue-600 top-0 fixed right-0 flex px-[2em] text-xl justify-between items-center'>
        <i className='text-white font-bold poppins'>Poppins </i>
        <nav>
            <ul className='flex gap-[2em] items-center'>
                <Link to={"/"}>
                    <li className='text-xl hover:scale-110 duration-[.5s] font-bold poppins text-white'>Home</li>
                </Link>
                <Link to={"/login"}>
                    <li className='text-xl hover:scale-110 duration-[.5s] font-bold poppins text-white'>Login In</li>
                </Link>
                <li className='text-xl rounded-[1em] px-[1em] hover:scale-110 duration-[.5s] font-bold poppins text-blue-600 p-[.2em] bg-white'>Logout</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav