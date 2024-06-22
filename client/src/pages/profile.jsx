import React from 'react'
import Nav from '../components /nav'
import SetInfo from '../components /setInfo'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Profile() {

    const navigate = useNavigate()
    const [info, setInfo] = useState(true);
    const [bundle, setBundle] = useState(false)

    //Profile details
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState("")
    const [about, setAbout] = useState("")
    const [userName, setUserName] = useState("")
    const [fullName, setFullName] = useState("")
    const [data, setData] = useState({})

    const handleInfo = async () => {

        if (info == false) {
            var new_data  = {
                user: userName, 
                email: email,
                age: age, 
                status: status, 
                about: about
            }

            setData(new_data)
            console.log(new_data)
        const response = await axios.post("http://127.0.0.1:5000/api/update", new_data).then(response => setBundle(response.data))
            setAge(bundle['age'])
            setEmail(bundle['email'])
            setFullName(bundle['fullname'])
            setAbout(bundle['about'])
            setUserName(bundle['name'])
            setStatus(bundle['status'])
            setInfo(!info)
        }
        else {
        setInfo(!info)
    }
    }

    const handleInfos = async () => {
        if (localStorage.length < 1) {
            navigate("/login")
        }
        else {
        const response  = await axios.post("http://127.0.0.1:5000/api/logged", {"name": localStorage.getItem('username')}).then(response => setBundle(response.data))   
    }
    }

    useEffect(() => {
        handleInfos()
    }, [])

    useEffect(() => {
        // console.log(bundle)
        if (bundle == false) {
            setAge('Loading...')
            setEmail('Loading...')
            setFullName('Loading...')
            setAbout('Loading...')
            setUserName('Loading...')
            setStatus('Loading...')
        }
        else {
            setAge(bundle['age'])
            setEmail(bundle['email'])
            setFullName(bundle['fullname'])
            setAbout(bundle['about'])
            setUserName(bundle['name'])
            setStatus(bundle['status'])
        }
    }, [bundle])
    

  return (
    <div className='h-screen flex items-center pt-[4em] justify-center bg-black flex-col gap-[2em]'>
        <Nav />
        <h1 className='text-white text-4xl'>Welcome, {userName}!!</h1>
        {
            info ?
            <div className='flex flex-col gap-[1em]'>
                <p className='text-white text-xl'>Name: <span className='bg-white text-black p-[0.3em] rounded-[1em]'>{fullName}</span></p>
                <p className='text-white text-xl'>Email: <span className='bg-white text-black p-[0.3em] rounded-[1em]'>{email}</span></p>
                <p className='text-white text-xl'>Age: <span className='bg-white text-black p-[0.3em] rounded-[1em]'>{age}</span></p>
                <p className='text-white text-xl'>Relationship Status:<span className='bg-white text-black p-[0.3em] rounded-[1em]'>{status}</span></p>
                <p className='text-white text-xl'>About Me: <span className='bg-white text-black p-[0.3em] rounded-[1em]'>{about}</span></p>
            </div>

            :
            
            <SetInfo changeEmail={setEmail} changeAbout={setAbout} changeStatus={setStatus} changeAge={setAge} />
        }

        <button className='p-[1em] py-[0.5em] rounded-[3em] text-xl bg-white font-bold' onClick={handleInfo}>Update Profile</button>
    </div>
  )
}

export default Profile