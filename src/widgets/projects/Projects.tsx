import './Projects.scss'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ProjectCard from './projectCard/ProjectCard'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current && containerRef.current.offsetWidth >= 1280) {
      gsap.to('.card__container', {
        scrollTrigger: {
          trigger: '.card__container',
          start: 'top center-=220',
          end: 'bottom+=800 center',
          scrub: true,
          pin: '.wrapper',
          toggleActions: 'restart none none reverse',
          pinType: 'transform',
        },
        x: -4200,
      })

      const progressValue = document.querySelector('.progress-value')
      gsap.to(progressValue, {
        scrollTrigger: {
          trigger: '.card__container',
          start: 'top center -=200',
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
        <div className='progress-value'></div>
      </div>
      <p className='title'>the project team</p>
      <div className='card__container'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects
