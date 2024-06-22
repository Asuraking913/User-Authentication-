import React, { useEffect, useState } from 'react'
import Nav from '../components /nav'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Form() {

  const navigate = useNavigate();
  const [username, setUsername]  = useState("");
  const [userpass, setUserpass] = useState("");
  const [msg, setMsg] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault()
    let data = {name: username, password: userpass}
    if(username.length > 5 & userpass.length > 5) {
      const response = await axios.post("http://127.0.0.1:5000/api/login", data).then(response => {
        if (response.data === `${data['name']} exists`) {
          localStorage.setItem("username", username)
          navigate("/")
        }

        else {
          setMsg("Incorrect username/password")
          setInterval(() => {
          setMsg(false)

          }, 6000)
        }
      })
    }
    else {
      setMsg("Characters need to me more than 5 in length")
      setInterval(() => {
      setMsg(false)

      }, 6000)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('username')) {
      navigate("/")
    }
  })

  return (
    <div className='bg-black h-screen flex justify-center items-center'>
        <Nav />
        <form action="#" className='flex flex-col gap-[1em]' onSubmit={handleLogin}>
            <h2 className='text-3xl text-white font-bold font-serif text-center'>Login</h2>
            {msg && <p className='text-white text-center'>{msg}</p>}
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">Name:</label>
                <input onChange={e => setUsername(e.target.value)} type="text" name="name" id="name" className='bg-white p-[0.3em] w-full' />
            </p>
            <p>
                <label className='text-white font-bold text-xl' htmlFor="name">Password:</label>
                <input type="text" onChange={e =>  setUserpass(e.target.value)} name="password" id="password" className='bg-white p-[0.3em] w-full' />
            </p>
            <div className='w-full flex justify-center items-center flex-col gap-[.5em] mt-[.5em]'>
              <button type="submit" className='bg-white text-black w-[70%] py-[.5em] text-xl px-[1em]'>Login</button>
              <p className='text-2xl text-white font-bold'>Or</p>
              <Link to={"/create"} className='w-[70%]'><button className='bg-white text-black py-[.5em] w-[100%] text-xl px-[1em]'>Create an account</button></Link>
              </div>
        </form>
    </div>
  )
}

export default Form