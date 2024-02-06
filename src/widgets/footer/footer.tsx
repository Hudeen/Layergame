//Import components
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//Import styles
import './footer.css'

//Import images
import logo from '../../shared/assets/icons/logo.svg'
import twitter from '../../shared/assets/icons/twitter.png'
import facebook from '../../shared/assets/icons/facebook.png'
import linked from '../../shared/assets/icons/linked.png'
import telegram from '../../shared/assets/icons/telegram.png'

const Footer: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger)

  return (
    <footer>
      <div className='footer__main'>
        <div className='footer__logo'>
          <img
            src={logo}
            alt='logo'
          />
          <h1 className='header__title'>LayerGame</h1>
        </div>
      </div>
      {/* <div className='footer__social'>
        <img
          src={twitter}
          alt='twitter'
        />
        <img
          src={facebook}
          alt='facebook'
        />
        <img
          src={linked}
          alt='linked'
        />
        <img
          src={telegram}
          alt='telegram'
        />
      </div> */}
      <div className='footer__about'>
        <p className='footer__title'>About</p>
        <p>Home</p>
        <p>Marketplace</p>
        <p>Creators</p>
        <p>Community</p>
        <p>FAQ</p>
      </div>
      <div className='footer__company'>
        <p className='footer__title'>Company</p>
        <p>Our Team</p>
        <p>Partner With Us</p>
        <p>Privacy & Policy</p>
        <p>Features</p>
      </div>
      <div className='footer__contact'>
        <p className='footer__title'>Contact</p>
        <p>+7 999 000 01 23</p>
        <p>w3bz@company.com</p>
      </div>
    </footer>
  )
}

export default Footer
