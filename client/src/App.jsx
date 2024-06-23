import React from 'react'
import Home from './pages/home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './pages/login'

function App() {
  return (
    <div> 
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App