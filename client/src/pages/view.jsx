import React, { useEffect, useState } from 'react'
import Nav from '../components /nav'
import axios from 'axios'

function View() {

    const [data, setData] =  useState(false)
    const [user, setUser] = useState(false)
    

    const handleUser = async () => {
        const resp = await axios.get("/api/show").then(resp => {
            setData(resp.data)
        })
    }


    useEffect(() => {
    handleUser()
    }, [])

  return (
    <div className='h-screen linear flex items-center justify-center flex-col gap-[2em]'>
        <Nav loginLink={"/"} signLink={"/"}/>

        {user && <h1 className='text-4xl text-blue-950 font-bold'>User: {user}</h1>}

        <div className='flex gap-[1em] text-xl text-blue-400 flex-col'>
            <p className='text-white text-xl font-bold'>User Name:{data["name"]}</p>
            <p className='text-white text-xl font-bold'>User Email:{data["email"]}</p>
        </div>
    </div>
  )
}

export default View