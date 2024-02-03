//Import components
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

//Import styles
import './about.css'

//Import images
import earth from '../../../assets/earth.svg'
import rocket from '../../../assets/rocket.svg'
import cardLine from '../../../assets/cardLine.svg'
import lineOne from '../../../assets/lineOne.svg'
import lineTwo from '../../../assets/lineTwo.svg'
import character from '../../../assets/character.svg'
import spaceship from '../../../assets/spaceship.svg'
import character2 from '../../../assets/character2.svg'

const About: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger)

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardOneRef = useRef<HTMLDivElement>(null)
  const cardTwoRef = useRef<HTMLDivElement>(null)
  const cardThreeRef = useRef<HTMLDivElement>(null)
  const lineOneRef = useRef<HTMLImageElement>(null)
  const lineTwoRef = useRef<HTMLImageElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)

  //Content animation
  useGSAP(() => {
    const cardOne = {
      trigger: containerRef.current,
      toggleActions: 'restart none none reverse',
      start: 'top center',
      end: 'bottom center',
      markers: true,
    }

    gsap.from([titleRef.current, cardOneRef.current], {
      opacity: 0,
      scale: 0.3,
      top: -200,
      scrollTrigger: cardOne,
    })

    gsap.to([titleRef.current, cardOneRef.current], {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      scrollTrigger: cardOne,
    })

    const cardTwo = {
      trigger: cardOneRef.current,
      toggleActions: 'restart none none reverse',
      start: 'bottom center',
      end: 'bottom center',
      markers: true,
    }

    gsap.from([cardTwoRef.current, lineOneRef.current], {
      opacity: 0,
      scale: 0.3,
      scrollTrigger: cardTwo,
    })

    gsap.to([cardTwoRef.current, lineOneRef.current], {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      scrollTrigger: cardTwo,
    })

    const cardThree = {
      trigger: cardTwoRef.current,
      toggleActions: 'restart none none reverse',
      start: 'bottom center',
      end: 'bottom center',
      markers: true,
    }

    gsap.from([cardThreeRef.current, lineTwoRef.current], {
      opacity: 0,
      scale: 0.3,
      scrollTrigger: cardThree,
    })

    gsap.to([cardThreeRef.current, lineTwoRef.current], {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      scrollTrigger: cardThree,
    })
  }, [])

  //Starts animation
  useGSAP(() => {
    const options = {
      trigger: containerRef.current,
      toggleActions: 'restart none none reverse',
      start: 'top center',
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
      className='about'
      ref={containerRef}>
      <div
        className='about__content'
        ref={contentRef}>
        <h2
          className='about__title'
          ref={titleRef}>
          getting to know us
        </h2>
        <div className='about__cards'>
          <div className='about__card-container'>
            <div
              className='about__card-1'
              ref={cardOneRef}>
              <p className='about__text-card-1'>
                Getting to know us
                <img
                  src={cardLine}
                  alt='cardLine'
                  className='about__triangle'
                />
              </p>
              <p className='about__text-card-2'>Find out more about our upcoming future</p>
              <p className='about__text-card-3'>01</p>
              <img
                src={earth}
                alt='earth'
                className='about__earth'
              />
              <img
                src={rocket}
                alt='rocket'
                className='about__rocket'
              />
            </div>
            <img
              src={lineOne}
              alt='lineOne'
              className='about__card-line-1'
              ref={lineOneRef}
            />
          </div>
          <div className='about__card-container'>
            <div
              className='about__card-2'
              ref={cardTwoRef}>
              <p className='about__text-card-1'>
                become a part of our community
                <img
                  src={cardLine}
                  alt='cardLine'
                  className='about__triangle'
                />
              </p>
              <p className='about__text-card-2'>the world of upcoming events and interesting activities</p>
              <p className='about__text-card-3'>02</p>
              <img
                src={character}
                alt='character'
                className='about__character'
              />
              <img
                src={spaceship}
                alt='spaceship'
                className='about__spaceship'
              />
            </div>
            <img
              src={lineTwo}
              alt='lineTwo'
              className='about__card-line-2'
              ref={lineTwoRef}
            />
          </div>
          <div className='about__card-container'>
            <div
              className='about__card-3'
              ref={cardThreeRef}>
              <p className='about__text-card-1'>
                leave feedback
                <img
                  src={cardLine}
                  alt='cardLine'
                  className='about__triangle'
                />
              </p>
              <p className='about__text-card-2'>tell us about your comments and suggestions</p>
              <p className='about__text-card-3'>03</p>
              <img
                src={character2}
                alt='character2'
                className='about__character2'
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className='about__stars-container'
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

export default About
