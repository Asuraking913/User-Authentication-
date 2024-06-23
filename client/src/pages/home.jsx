import React from 'react'
import Nav from '../components /nav'

function Home() {
  return (
    <div className='flex justify-center items-center h-screen font-bold'>
        <Nav />
        <div>
            <h1 className='text-[5rem] poppins text-blue-600'>Hey!! This is the home page</h1>
        </div>
    </div>
  )
}

export default Home