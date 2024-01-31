import './App.css'
import Stars from '../widgets/stars/stars'
import Header from '../widgets/header/header'
import Main from '../widgets/banner/Main'
import AboutUs from '../entities/about_us/about_us'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Stars />
      <AboutUs/>
    </>
  )
}

export default App
