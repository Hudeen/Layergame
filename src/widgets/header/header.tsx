import './header.css'
import './headerGsap'
const Header = () => {

    return (
        <header className="header">
        <div className="header__item">
           {/* <img className="header__logo" src="./logo.svg" alt="LayerGame"> */}
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
           <div className="container">
              <svg className="svg" width="59" height="50" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path
                    d="M54 1H3.41422L23.1357 20.7215C25.4956 23.0814 25.4762 26.9134 23.0926 29.2494L2.93892 49H54C56.2091 49 58 47.2091 58 45V5C58 2.79086 56.2091 1 54 1Z"
                    stroke="url(#paint0_linear_96_16)" stroke-width="2" />
                 <path
                    d="M47 31H31C30.45 31 30 30.55 30 30C30 29.45 30.45 29 31 29H47C47.55 29 48 29.45 48 30C48 30.55 47.55 31 47 31ZM47 26H31C30.45 26 30 25.55 30 25C30 24.45 30.45 24 31 24H47C47.55 24 48 24.45 48 25C48 25.55 47.55 26 47 26ZM48 20C48 20.55 47.55 21 47 21H31C30.45 21 30 20.55 30 20C30 19.45 30.45 19 31 19H47C47.55 19 48 19.45 48 20Z"
                    fill="url(#paint1_linear_96_16)" />
                 <defs>
                    <linearGradient id="paint0_linear_96_16" x1="59" y1="0" x2="-3.02193" y2="5.0378"
                       gradientUnits="userSpaceOnUse">
                       <stop stop-color="#30BBEE" />
                       <stop offset="1" stop-color="#C659FC" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_96_16" x1="48" y1="19" x2="28.9965" y2="20.9789"
                       gradientUnits="userSpaceOnUse">
                       <stop stop-color="#30BBEE" />
                       <stop offset="1" stop-color="#C659FC" />
                    </linearGradient>
                 </defs>
              </svg>
           </div>
  
           <div className='header__button-text'>Launch App</div>
        </div>
  
     </header>
    )
}

export default Header