import './App.css'
import Stars from '../widgets/stars/stars'
import Header from '../widgets/header/header'
import Main from '../widgets/banner/Main'
import AboutUs from '../entities/about_us/about_us'
import Projects from '../widgets/projects/Projects'
import Home from '../entities/home/home'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


function App() {

  const lenis = new Lenis()
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)

  return (
    <>
      <Header />
      <Main />
      <Stars />
      <AboutUs />
      {/* <Projects /> */}
      {/* <Home /> */}
    </>
  )
}

export default App
