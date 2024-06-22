import React from 'react'
import Nav from '../components /nav'

function View() {
  return (
    <div className='bg-black h-screen flex items-center justify-center flex-col'>
      <Nav />
        <h1 className=' text-white font-bold text-3xl'>View Page</h1>
    </div>
  )
}

export default View