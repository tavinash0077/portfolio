import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Expertise from './components/Expertise'
import FooterB from './components/FooterB'

function App() {


  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Expertise />
      <FooterB />

    </>
  )
}

export default App
