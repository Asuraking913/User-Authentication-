import React, { useEffect, useState } from 'react'
import Nav from '../components /nav'

function Home() {

  const [user, setUser] = useState(false)
  const [msg, setMsg] = useState(false )

  useEffect(() => {
    setUser(localStorage.getItem("User"))
  }, [])
  
  return (
    <div className='flex justify-center items-center h-screen font-bold flex-col'>
        <Nav loginLink={"/"} signLink={"/"}/>
        <div>
            <h1 className='text-[5rem] poppins text-blue-600'>Hey!! This is the home page</h1>
        </div>
        {user && <p className='bg-blue-600 text-white p-[0.8em] rounded-[1.5em] px-[1em] poppins text-3xl mt-[2em]'>{user}</p>}

    </div>
  )
}

export default Home