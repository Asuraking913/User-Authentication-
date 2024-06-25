import React from 'react'
import axios from 'axios'

const Axios = axios.create(
    {
        withCredentials: true
    }
)


export default Axios