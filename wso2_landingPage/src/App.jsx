import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './shared/Footer'
import Partners from './components/Partners'
import {image}  from './components/data'
import Hero from './components/Hero'
import Features1 from './components/Features1'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Features1/>
     <About/>
     <Partners/>
     <Footer/>
    </>
  )
}

export default App
