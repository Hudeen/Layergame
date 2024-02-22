import './App.css'
import Header from '../widgets/header/header'
import MainPage from '../pages/Main/MainPage'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Footer from '../widgets/footer/footer'
import { Mint } from '../pages/Mint'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MobileNav from '../entities/mobileNav/mobileNav'

function App() {
  const lenis = new Lenis({
    duration: 1.5,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add(time => {
    lenis.raf(time * 800)
  })

  gsap.ticker.lagSmoothing(0)

  return (
    <div className='mainPage'>
      <Header />
      <MobileNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mint" element={<Mint/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
