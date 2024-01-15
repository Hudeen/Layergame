import './header.css'
import HeaderGsap from './headerGsap'
import logo from '../../assets/logo.svg'

const Header = () => {

    return (
        <header className="header">
        <div className="header__item">
        <img src={logo} />
           <h1 className="header__title">LayerGame</h1>
        </div>
  
        <div className='header__item'>
           <svg width="128" height="50" viewBox="0 0 128 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="header__button"
                 d="M5 1H102.929C103.99 1 105.007 1.42143 105.757 2.17157L125.757 22.1716C127.319 23.7337 127.319 26.2663 125.757 27.8284L105.757 47.8284C105.007 48.5786 103.99 49 102.929 49H5C2.79086 49 1 47.2091 1 45V5C1 2.79086 2.79086 1 5 1Z"
                 stroke="url(#paint0_linear_96_9)" stroke-width="2" />
              <defs>
                 <linearGradient id="paint0_linear_96_9" x1="0" y1="0" x2="134.358" y2="24.252"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#30BBEE" />
                    <stop offset="1" stop-color="#C659FC" />
                 </linearGradient>
              </defs>
           </svg>
           <HeaderGsap/>
  
           <div className='header__button-text'>Launch App</div>
        </div>
  
     </header>
    )
}

export default Header