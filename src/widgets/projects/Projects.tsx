import './Projects.scss'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ProjectCard from './projectCard/ProjectCard'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

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
        x: -1800,
      })

      gsap.to(progressRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top center-=220',
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
