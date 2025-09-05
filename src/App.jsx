import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/Navigation/Navbar'
import FullscreenNav from './components/Navigation/FullscreenNav'



const App = () => {




  return (
    <div>

   
      {/* <Navbar /> */}
      <FullscreenNav />
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/agence' element={<Agence />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes> */}
    </div>
  )
}

export default App
