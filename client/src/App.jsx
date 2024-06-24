import React from 'react'
import Home from './pages/home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/login'
import Reg from './pages/register'

function App() {
  return (
    <div> 
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Reg />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App