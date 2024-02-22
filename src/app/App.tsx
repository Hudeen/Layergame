import './App.css'
import Header from '../widgets/header/header'
import MainPage from '../pages/Main/MainPage'
import About from '../widgets/about/about'
import Introducing from '../widgets/introducing/introducing'
import Lenis from '@studio-freight/lenis'
import AboutUs from '../widgets/about_us/about_us'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Projects from '../widgets/projects/Projects'
import Acquaintance from '../widgets/acquaintance/acquaintance'
import Footer from '../widgets/footer/footer'
import { SpaceStation } from '../widgets/spaceStation/spaceStation'
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
