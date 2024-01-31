import './App.css'
import Stars from '../widgets/stars/stars'
import Header from '../widgets/header/header'
import Main from '../widgets/banner/Main'
import AboutUs from '../entities/about_us/about_us'
import Projects from '../widgets/projects/Projects'
import Home from '../entities/home/home'


function App() {
  return (
    <>
      <Header />
      <Main />
      <Stars />
      <AboutUs/>
      <Projects />
      <Home/>
    </>
  )
}

export default App
