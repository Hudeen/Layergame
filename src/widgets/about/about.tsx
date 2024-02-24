//Import components
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Star from '../../entities/stars/Star'

//Import styles
import './about.scss'

//Import images
import earth from '../../shared/assets/icons/earth.svg'
import rocket from '../../shared/assets/icons/rocket.svg'
import cardLine from '../../shared/assets/icons/cardLine.svg'
import lineOne from '../../shared/assets/icons/lineOne.svg'
import lineTwo from '../../shared/assets/icons/lineTwo.svg'
import character from '../../shared/assets/icons/character.svg'
import spaceship from '../../shared/assets/icons/spaceship.svg'
import character2 from '../../shared/assets/icons/character2.svg'
import lineOneMobile from '../../shared/assets/icons/lineOneMobile.svg'
import lineTwoMobile from '../../shared/assets/icons/lineTwoMobile.svg'
import Orbit from '../orbit/orbit'
import BluePlanetMobile from '../../shared/assets/planets/BluePlanet/BluePlanetMobile'
import PurplePlanetMobile from '../../shared/assets/planets/PurplePlanet/PurplePlanetMobile'

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
  useGSAP(
    () => {
      if (containerRef.current && containerRef.current.offsetWidth >= 1280) {
        const cardOne = {
          trigger: containerRef.current,
          toggleActions: 'restart none none reverse',
          start: 'top center',
          end: 'bottom bottom',
        }

        gsap.from([titleRef.current, cardOneRef.current], {
          opacity: 0,
          scrollTrigger: cardOne,
        })

        gsap.to([titleRef.current, cardOneRef.current], {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: cardOne,
        })

        const cardTwo = {
          trigger: cardOneRef.current,
          toggleActions: 'restart none none reverse',
          start: 'bottom center',
          end: 'bottom top',
        }

        gsap.from([cardTwoRef.current, lineOneRef.current], {
          opacity: 0,
          scrollTrigger: cardTwo,
        })

        gsap.to([cardTwoRef.current], {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: cardTwo,
        })

        const cardThree = {
          trigger: cardTwoRef.current,
          toggleActions: 'restart none none reverse',
          start: 'bottom center',
          end: 'bottom top',
        }

        gsap.from([cardThreeRef.current, lineTwoRef.current], {
          opacity: 0,
          scrollTrigger: cardThree,
        })

        gsap.to([cardThreeRef.current, lineTwoRef.current], {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: cardThree,
        })
      }
    },
    { scope: containerRef }
  )

  //Starts animation
  useGSAP(
    () => {
      if (starsRef.current && containerRef.current) {
        const stars = [...starsRef.current.children]

        const starsOnEnter = {
          start: 'top +=1300',
          trigger: containerRef.current,
          toggleActions: 'restart none none reverse',
          onEnter: () => {
            if (starsRef.current && containerRef.current) {
              //Max X & Y stars position
              const maxX = containerRef.current.offsetWidth
              const maxY = containerRef.current.offsetHeight

              //Place the star in a random place on the screen.
              stars.forEach((star: Element) => {
                //Indentation from the edges of the screen so that the stars do not extend beyond the screen
                const maxXPosition = maxX - star.clientWidth * 1
                const maxYPosition = maxY - star.clientHeight * 3

                //Making stars
                gsap.set(star, {
                  x: gsap.utils.random(-1000, maxXPosition),
                  y: gsap.utils.random(0, maxYPosition),
                  scale: gsap.utils.random(0.5, 2),
                  opacity: gsap.utils.random(0.3, 1.3),
                })
              })

              //Animation of stars
              stars.slice(0, 45).forEach((star: Element) => {
                gsap.to(star, {
                  duration: gsap.utils.random(1, 1),
                  repeat: -1,
                  scale: gsap.utils.random(0.1, 2),
                  opacity: gsap.utils.random(0.5, 1),
                  yoyo: true,
                })
              })
            }
          },
          onLeave: () => {
            stars.forEach((star: Element) => {
              gsap.killTweensOf(star)
            })
          },
          onEnterBack: () => {
            stars.slice(0, 45).forEach((star: Element) => {
              gsap.to(star, {
                duration: gsap.utils.random(1, 1),
                repeat: -1,
                scale: gsap.utils.random(0.1, 2),
                opacity: gsap.utils.random(0.5, 1),
                yoyo: true,
              })
            })
          },
          onLeaveBack: () => {
            stars.forEach((star: Element) => {
              gsap.killTweensOf(star)
            })
          },
        }

        //Animation of stars
        stars.slice(0, 45).forEach((star: Element) => {
          gsap.to(star, {
            duration: gsap.utils.random(1, 1),
            repeat: -1,
            scale: gsap.utils.random(0.1, 2),
            opacity: gsap.utils.random(0.5, 1),
            yoyo: true,
          })
        })

        //Animation of stars container
        gsap.fromTo(
          starsRef.current,
          {
            scale: 0.5,
            opacity: 0,
            duration: 0.5,
            padding: '20px',
            scrollTrigger: starsOnEnter,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            scrollTrigger: starsOnEnter,
          }
        )
      }
    },
    { scope: containerRef }
  )

  if (window.innerWidth > 1023) {
    useGSAP(() => {
      gsap.fromTo(
        '.line',
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top+=1 center',
            end: 'bottom center',
            scrub: true,
          },
          opacity: 1,
        }
      )

      // const container = document.querySelector('.aboutUs__item') as HTMLElement
      const options = {
        trigger: containerRef.current,
        start: 'top 40%',
        end: '100px 40%',
        toggleActions: 'restart none none reverse',
      }
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
          y: 0,
          scrollTrigger: options,
        }
      )
    }, [])
  }

  return (
    <section
      className='about'
      ref={containerRef}>
      <div
        className='content'
        ref={contentRef}>
        <h2 ref={titleRef}>getting to know us</h2>
        <div className='cards'>
          <div className='container'>
            <div
              className='card'
              ref={cardOneRef}>
              <p>
                Getting to know us
                <img
                  src={cardLine}
                  alt='cardLine'
                  className='triangle'
                />
              </p>
              <p>Find out more about our upcoming future</p>
              <p>01</p>
              <img
                src={earth}
                alt='earth'
                className='earth'
              />
              <img
                src={rocket}
                alt='rocket'
                className='rocket'
              />
            </div>
            <img
              src={lineOne}
              alt='lineOne'
              className='line-desktop'
              ref={lineOneRef}
            />
            <img
              src={lineOneMobile}
              alt='lineOneMobile'
              className='line-mobile'
            />
          </div>
          <div className='container'>
            <div
              className='card'
              ref={cardTwoRef}>
              <p>
                become a part of our community
                <img
                  src={cardLine}
                  alt='cardLine'
                  className='triangle'
                />
              </p>
              <p>the world of upcoming events and interesting activities</p>
              <p>02</p>
              <img
                src={character}
                alt='character'
                className='character'
              />
              <img
                src={spaceship}
                alt='spaceship'
                className='spaceship'
              />
            </div>
            <img
              src={lineTwo}
              alt='lineTwo'
              className='line-desktop-two'
              ref={lineTwoRef}
            />
            <img
              src={lineTwoMobile}
              alt='lineOneMobile'
              className='line-mobile'
            />
          </div>
          <div className='container'>
            <div
              className='card'
              ref={cardThreeRef}>
              <p>
                leave feedback
                <img
                  src={cardLine}
                  alt='cardLine'
                  className='triangle'
                />
              </p>
              <p>tell us about your comments and suggestions</p>
              <p>03</p>
              <img
                src={character2}
                alt='character-two'
                className='character-two'
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className='stars-container'
        ref={starsRef}>
        {[...Array(80)].map((_, index) => (
          <Star key={index} />
        ))}
      </div>
      {containerRef.current && containerRef.current.offsetWidth >= 1280 ? (
        <Orbit />
      ) : (
        <>
          <BluePlanetMobile />
          <PurplePlanetMobile />
        </>
      )}
    </section>
  )
}

export default About
