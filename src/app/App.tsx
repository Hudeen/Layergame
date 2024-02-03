import './App.css'
import Stars from '../widgets/stars/stars'
import Header from '../widgets/header/header'
import Main from '../widgets/main/Main'
import AboutUs from '../entities/about_us/about_us'
import Projects from '../widgets/projects/Projects'
import Planets from '../entities/Planets/Planets'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


function App() {

  const lenis = new Lenis({
    duration: 1.5
  })
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 800)
  })
  
  gsap.ticker.lagSmoothing(0)

  return (
    <>
      <Header />
      <Main />
      <Planets/>
      {/* <Stars /> */}
      <AboutUs />
      {/* <Projects /> */}
    </>
  )
}

export default App
