import React from 'react'
import Nav from '../components /nav'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {

    const [userName, setUsername]  = useState("");
    const [userPass, setUserpass] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [fullName, setFullName] = useState("")
    const [msg, setMsg] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault()
        let data = {
            name: userName, 
            fullname: fullName, 
            email: userEmail, 
            password: userPass
        }

        if (userName.length > 5 & userPass.length > 5 & fullName.length > 5  ) {
            const response = await axios.post("http://127.0.0.1:5000/api/create_user", data).then(response => console.log(response.data))
        }

        else {
            setMsg("Characters need to me more than 5 in length")
            setInterval(() => {
            setMsg(false)

            }, 6000)
        }

        navigate("/login")
    }

  return (
    <div className='h-screen bg-black flex items-center justify-center'>
        <Nav />
        <div className=''>
            <form action="" onSubmit={handleSubmit} className='w-full flex flex-col gap-[1em]' >
                
            <h2 className='text-3xl text-white font-bold font-serif text-center'>Create an account </h2>
            {msg && <p className='text-white'>{msg}</p>}
                
                <div className='flex flex-col justify-center items-center gap-[1em] w-full'>
                    <p>
                        <label htmlFor="Name" className='text-white font-bold text-xl'>Full Name:<span className='text-red-600 text-[1em]'>*</span></label>
                        <input className='bg-white p-[0.3em] text-black w-full' onChange={e => setFullName(e.target.value)}  type="text" name="fullname"  id="fullname" />
                    </p>
                    <p>
                        <label htmlFor="Username" className='text-white font-bold text-xl'>Username:<span className='text-red-600 text-[1em]'>*</span></label>
                        <input className='bg-white p-[0.3em] text-black w-full' onChange={e => setUsername(e.target.value)}  type="text" name="Username"  id="username" />
                    </p>
                    <p>
                        <label htmlFor="email" className='text-white font-bold text-xl'>UserEmail:</label>
                        <input className='bg-white p-[0.3em] text-black w-full' onChange={e => setUserEmail(e.target.value)} type="email" name="email"  id="useremail" />
                    </p>
                    <p>
                        <label htmlFor="password" className='text-white font-bold text-xl'>Password:<span className='text-red-600 text-[1em]'>*</span></label>
                        <input className='bg-white p-[0.3em] text-black w-full' onChange={e => setUserpass(e.target.value)}  type="password" name="password"  id="password" />
                    </p>
                    <div className='w-full flex justify-center items-center'><button type="submit" className='bg-white text-black py-[.5em] text-xl px-[1em]'>Create account</button></div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create