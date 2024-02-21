//Import components
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

//Import styles
import './partners.scss'

//Import images
import bnb from '../../shared/assets/images/BNB.png'
import tonstarter from '../../shared/assets/images/tonstarter.png'
import microsoft from '../../shared/assets/images/microsoft.png'
import unity from '../../shared/assets/images/unity.png'
import mars from '../../shared/assets/images/mars.png'
import time from '../../shared/assets/images/time.png'
import admins from '../../shared/assets/images/admins.png'

//Register gsap plagin
gsap.registerPlugin(ScrollTrigger)

const Partners: React.FC = () => {
  return (
    <section className='partners'>
      <h3>Our partners</h3>
      <div>
        <img
          src={bnb}
          alt='bnb'
        />
        <img
          src={tonstarter}
          alt='tonstarter'
        />
        <img
          src={microsoft}
          alt='microsoft'
        />
        <img
          src={unity}
          alt='unity'
        />
        <img
          src={mars}
          alt='mars'
        />
        <img
          src={time}
          alt='time'
        />
        <img
          src={admins}
          alt='admins'
        />
      </div>
    </section>
  )
}

export default Partners
