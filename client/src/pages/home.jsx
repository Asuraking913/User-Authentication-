import React, { useEffect, useState } from 'react'
import Nav from '../components /nav'
import Axios from '../components /axios'

function Home() {

  const [user, setUser] = useState(false)
  const [msg, setMsg] = useState(false )

  const handleInfo = async () => {
    const resp = Axios.get("/get_user").then(resp => {
      if (resp.status == 200) {
        setUser(resp.data['user'])
      }
    }).catch(error => {
      if (error.response.status == 401) {
        window.location.href = "/login"
      }
    })

    
  }

  useEffect(() => {
    handleInfo()
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