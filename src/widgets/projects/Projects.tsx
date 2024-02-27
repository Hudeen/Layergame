import './Projects.scss'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ProjectCard from './projectCard/ProjectCard'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import photoOne from '../../assets/images/photoOne.png'
import photoTwo from '../../assets/images/photoTwo.png'
import photoThree from '../../assets/images/photoThree.png'
import photoFour from '../../assets/images/photoFour.png'
import photoFive from '../../assets/images/photoFive.png'
import photoSix from '../../assets/images/photoSix.png'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current && containerRef.current.offsetWidth >= 1280) {
      gsap.to(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top center-=120',
          end: 'bottom+=800 center',
          scrub: true,
          pin: containerRef.current,
          toggleActions: 'restart none none reverse',
          pinType: 'transform',
        },
        x: -2500,
      })

      gsap.to(progressRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top center-=100',
          end: 'bottom+=800 center',
          scrub: 1,
        },
        width: '100%',
      })
    }
  }, [])

  return (
    <div
      className='wrapper'
      ref={containerRef}>
      <div className='progress'>
        <div
          className='progress-value'
          ref={progressRef}
        />
      </div>
      <p className='title'>the project team</p>
      <div
        className='cards'
        ref={cardsRef}>
        <ProjectCard
          image={photoOne}
          name='Pavel Ushkolenko'
          role='CVO'
          description='Pavel has 15 years of experience in the field of online and offline business. Implementation and strategic planning of investment projects. More than 7 years in the crypto industry.'
        />
        <ProjectCard
          image={photoTwo}
          name='Bohun Artem'
          role='Co-Founder & CEO'
          description='Brings 7 years of entrepreneurial experience and 5 years in game development. A crypto enthusiast since 2017.'
        />
        <ProjectCard
          image={photoThree}
          name='Alex Serzhanovich'
          role='Advisor'
          description='ormer Head of WePad. A top manager with over 12 years of experience, an entrepreneur, and a top manager in the crypto industry since 2017'
        />
        <ProjectCard
          image={photoFour}
          name='Vladislav Fokshuk'
          role='CIO'
          description='2 years of experience working with the most advanced Web2 and Web3 technologies'
        />
        <ProjectCard
          image={photoFive}
          name='Brizhanev Oleg'
          role='Co-Founder & CTO'
          description='Seasoned developer with over a decade of experience in programming, creating mobile and web applications'
        />
        <ProjectCard
          image={photoSix}
          name='Maks N.'
          role='CMO'
          description='Co-owner of a network of telegram channels dedicated to WEB3'
        />
      </div>
    </div>
  )
}

export default Projects
