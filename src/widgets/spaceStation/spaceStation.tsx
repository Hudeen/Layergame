//Import components
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

//Import styles
import './spaceStation.scss'

//Import images
import spaceStationLight from '../../shared/assets/images/spaceStationLight.png'
import spaceStationRocket from '../../shared/assets/images/spaceStationRocket.svg'
import asteroid from '../../shared/assets/asteroid/asteroid-1.svg'





export const SpaceStation: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger)

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className='space-station'
      ref={containerRef}>
      <p>
        Welcome <span>Space station</span>
      </p>
      <img
        src={spaceStationRocket}
        alt=''
      />
      <img
        src={spaceStationLight}
        alt='rocket-light'
      />
      <div className='asteroids'>

      </div>
    </section>
  )
}
