import { useState } from 'react'
import './App.css'
import Navbar from './components/navigation'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Education from './components/education'

function App() {

  return (
    <>
    <Navbar/>
    <Hero />
    <AboutMe />
    <Skills />
    <Projects />
    <Education />
    <Footer/>
    </>
    
  )
}

export default App
