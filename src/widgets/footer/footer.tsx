//Import styles
import './footer.scss'

//Import images
import logo from '../../shared/assets/icons/logo.svg'
import twitter from '../../shared/assets/icons/twitter.svg'
import yuoTube from '../../shared/assets/icons/yuoTube.svg'
import facebook from '../../shared/assets/icons/facebook.svg'
import linked from '../../shared/assets/icons/linked.svg'
import telegram from '../../shared/assets/icons/telegram.svg'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer-main'>
        <div className='logo'>
          <img
            src={logo}
            alt='logo'
          />
        </div>
        <div className='social'>
          <img
            src={twitter}
            alt='twitter'
          />
          <img
            src={yuoTube}
            alt='yuoTube'
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
        </div>
      </div>
      <div className='links'>
        <p>About</p>
        <p>Home</p>
        <p>Marketplace</p>
        <p>Creators</p>
        <p>Community</p>
        <p>FAQ</p>
      </div>
      <div className='links'>
        <p>Company</p>
        <p>Our Team</p>
        <p>Partner With Us</p>
        <p>Privacy & Policy</p>
        <p>Features</p>
      </div>
      <div className='links'>
        <p>Contact</p>
        <p>+7 999 000 01 23</p>
        <p>w3bz@company.com</p>
      </div>
    </footer>
  )
}

export default Footer
