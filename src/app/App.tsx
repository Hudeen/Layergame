import './App.css'
import Header from '../widgets/header/header'
import Main from '../widgets/main/Main'
import About from '../widgets/about/about'
import Introducing from '../widgets/introducing/introducing'
import Lenis from '@studio-freight/lenis'
import AboutUs from '../entities/about_us/about_us'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Planets from '../entities/Planets/Planets'
import Acquaintance from '../widgets/acquaintance/acquaintance'
import Footer from '../widgets/footer/footer'



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
        <Introducing />
        <Planets/>
        <AboutUs/>
        <About />
        <Acquaintance />
        <Footer />
      </>
    )
  }
  
  export default App