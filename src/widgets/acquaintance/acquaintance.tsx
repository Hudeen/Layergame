//Import components
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

//Import styles
import './acquaintance.css'

//Import images
import astronaut from '../../shared/assets/icons/astronaut.svg'
import acquaintancePlanet from '../../shared/assets/icons/acquaintancePlanet.svg'
import amico from '../../shared/assets/icons/amico.svg'
import virtual from '../../shared/assets/icons/virtual.svg'
import rocketAcq from '../../shared/assets/icons/rocketAcq.svg'
import chapterFlag from '../../shared/assets/icons/chapterFlag.svg'

const Acquaintance: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger)

  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subTitleRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    //Animation titles
    const optionsTitles = {
      trigger: containerRef.current,
      toggleActions: 'restart none none reverse',
      start: 'top center',
      end: 'bottom bottom',
    }

    gsap.from([titleRef.current, subTitleRef.current], {
      opacity: 0,
      duration: 0.5,
      scale: 0.3,
      scrollTrigger: optionsTitles,
    })

    gsap.to([titleRef.current, subTitleRef.current], {
      opacity: 1,
      duration: 0.5,
      scale: 1,
      scrollTrigger: optionsTitles,
    })

    //Animation cards
    const optionsCards = {
      trigger: cardsRef.current,
      toggleActions: 'restart none none reverse',
      start: 'center bottom',
      end: 'bottom bottom',
    }

    gsap.from(cardsRef.current, {
      y: -150,
      opacity: 0,
      duration: 0.8,
      scale: 0.9,
      scrollTrigger: optionsCards,
    })

    gsap.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scale: 1,
      scrollTrigger: optionsCards,
    })
  }, [])

  //Starts animation
  useGSAP(() => {
    const options = {
      trigger: containerRef.current,
      toggleActions: 'restart none none reverse',
      start: 'top bottom',
      end: 'bottom center',
      markers: true,
    }

    gsap.from(starsRef.current, {
      y: '100%',
      opacity: 0,
      duration: 0.8,
      scale: 0.3,
      scrollTrigger: options,
    })
    gsap.to(starsRef.current, {
      opacity: 1,
      duration: 0.8,
      scale: 1,
      y: 0,
      scrollTrigger: options,
    })

    if (starsRef.current && containerRef.current) {
      const maxX = window.innerWidth
      const maxY = containerRef.current.offsetHeight

      ;[...starsRef.current.children].forEach((star: Element) => {
        const maxXPosition = maxX - star.clientWidth * 3
        const maxYPosition = maxY - star.clientHeight * 3
        gsap.set(star, {
          x: gsap.utils.random(0, maxXPosition),
          y: gsap.utils.random(0, maxYPosition),
          scale: 0.4,
          opacity: gsap.utils.random(0, 1),
        })
        gsap.to(star, {
          duration: gsap.utils.random(1, 2),
          repeat: -1,
          scale: 1.3,
          opacity: gsap.utils.random(0, 1),
          yoyo: true,
        })
      })
    }
  }, [containerRef, starsRef])

  return (
    <section
      className='acquaintance'
      ref={containerRef}>
      <div className='acquaintance__content'>
        <h2
          className='acquaintance__title'
          ref={titleRef}>
          Surprise The Gaming World Today
        </h2>
        <p
          className='acquaintance__sub-title'
          ref={subTitleRef}>
          Are You With Us?
        </p>
        <div
          className='acquaintance__cards'
          ref={cardsRef}>
          <div className='acquaintance__card'>
            <img
              src={acquaintancePlanet}
              alt='acquaintancePlanet'
              className='acquaintance__acquaintancePlanet'
            />
            <div className='acquaintance__card-content'>
              <p className='acquaintance__card-title one'>Getting to know us</p>
              <p className='acquaintance__card-description'>
                Learn more about us and our plans, join our community, and have a cup of coffee
              </p>
              <img
                src={astronaut}
                alt='astronaut'
                className='acquaintance__astronaut'
              />
            </div>
          </div>
          <div className='acquaintance__card'>
            <img
              src={rocketAcq}
              alt='rocketAcq'
              className='acquaintance__rocketAcq'
            />
            <div className='acquaintance__card-content'>
              <p className='acquaintance__card-title two'>Dive in our app</p>
              <p className='acquaintance__card-description'>
                Start your amazing adventure into the new world of gaming now
              </p>
              <img
                src={amico}
                alt='amico'
                className='acquaintance__amico'
              />
            </div>
          </div>
          <div className='acquaintance__card'>
            <img
              src={chapterFlag}
              alt='acquaintance__chapterFlag'
              className='acquaintance__chapterFlag'
            />
            <div className='acquaintance__card-content'>
              <p className='acquaintance__card-title three'>Explore the technology</p>
              <p className='acquaintance__card-description'>
                Build your amazing game that will blow up all the charts!
              </p>
              <img
                src={virtual}
                alt='virtual'
                className='acquaintance__virtual'
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className='acquaintance__stars-container'
        ref={starsRef}>
        {[...Array(65)].map((_, index) => (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='11'
            height='12'
            viewBox='0 0 13 14'
            fill='none'
            className='star'
            key={index}>
            <path
              d='M6.46554 0.829267C6.45135 0.885888 6.28813 2.08909 6.10362 3.50462C5.91911 4.92015 5.7417 6.15874 5.72041 6.25783C5.66364 6.46308 5.89073 6.42061 1.15027 7.05053C0.497388 7.14254 -0.0206561 7.22747 0.000633426 7.2487C0.0219229 7.26993 1.29929 7.45395 2.84633 7.6592C4.39336 7.86446 5.67073 8.04848 5.68493 8.06263C5.70622 8.07679 5.89072 9.35784 6.10362 10.9078C6.31651 12.4579 6.50102 13.7318 6.51522 13.7531C6.5507 13.7885 6.62166 13.3284 6.99778 10.4478C7.161 9.1809 7.32422 8.11925 7.3526 8.09094C7.38099 8.05555 8.65126 7.85738 10.1841 7.65213C11.7099 7.44688 12.9801 7.26286 12.9943 7.24162C13.044 7.19208 12.824 7.16377 10.0422 6.79573C8.61578 6.61171 7.41647 6.42769 7.37389 6.38523C7.33131 6.34276 7.12551 5.0617 6.91972 3.54709C6.72101 2.02539 6.53651 0.772645 6.52231 0.75849C6.50812 0.744334 6.48683 0.772645 6.46554 0.829267Z'
              fill='white'
              fill-opacity='0.3'
            />
          </svg>
        ))}
      </div>
    </section>
  )
}

export default Acquaintance
