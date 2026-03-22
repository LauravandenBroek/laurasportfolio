import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Hero from './components/Hero'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {

  return (
    <>
    <Navigation/>
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
