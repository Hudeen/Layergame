//Import components
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//Import styles
import './footer.css'

//Import images
import logo from '../../shared/assets/icons/logo.svg'
// import twitter from '../../shared/assets/icons/twitter.png'
// import facebook from '../../shared/assets/icons/facebook.png'
// import linked from '../../shared/assets/icons/linked.png'
// import telegram from '../../shared/assets/icons/telegram.png'

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
        <p className='footer__link'>Home</p>
        <p className='footer__link'>Marketplace</p>
        <p className='footer__link'>Creators</p>
        <p className='footer__link'>Community</p>
        <p className='footer__link'>FAQ</p>
      </div>
      <div className='footer__company'>
        <p className='footer__title'>Company</p>
        <p className='footer__link'>Our Team</p>
        <p className='footer__link'>Partner With Us</p>
        <p className='footer__link'>Privacy & Policy</p>
        <p className='footer__link'>Features</p>
      </div>
      <div className='footer__contact'>
        <p className='footer__title'>Contact</p>
        <p className='footer__link'>+7 999 000 01 23</p>
        <p className='footer__link'>w3bz@company.com</p>
      </div>
    </footer>
  )
}

export default Footer
