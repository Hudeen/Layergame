//Import components
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Star from '../../entities/stars/Star'

//Import styles
import './acquaintance.scss'

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
    if (containerRef.current && containerRef.current.offsetWidth >= 1280) {
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
        duration: 1,
        scrollTrigger: optionsCards,
      })

      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: optionsCards,
      })
    }
  }, [])

  //Starts animation
  useGSAP(
    () => {
      if (starsRef.current && containerRef.current) {
        const stars = [...starsRef.current.children]

        const starsOnEnter = {
          scrub: true,
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
    { scope: containerRef || undefined }
  )

  return (
    <section
      className='acquaintance'
      ref={containerRef}>
      <div className='content'>
        <h2
          className='title'
          ref={titleRef}>
          Surprise The Gaming World Today
        </h2>
        <p ref={subTitleRef}>Are You With Us?</p>
        <div
          className='cards'
          ref={cardsRef}>
          <div className='card'>
            <img
              src={acquaintancePlanet}
              alt='planet'
              className='icon-planet'
            />
            <div className='card-content'>
              <p>Getting to know us</p>
              <p>Learn more about us and our plans, join our community, and have a cup of coffee</p>
              <img
                src={astronaut}
                alt='astronaut'
                className='astronaut'
              />
            </div>
          </div>
          <div className='card'>
            <img
              src={rocketAcq}
              alt='rocketAcq'
              className='icon-rocket'
            />
            <div className='card-content'>
              <p>Dive in our app</p>
              <p>Start your amazing adventure into the new world of gaming now</p>
              <img
                src={amico}
                alt='amico'
                className='amico'
              />
            </div>
          </div>
          <div className='card'>
            <img
              src={chapterFlag}
              alt='chapterFlag'
              className='icon-chapterFlag'
            />
            <div className='card-content'>
              <p>Explore the technology</p>
              <p>Build your amazing game that will blow up all the charts!</p>
              <img
                src={virtual}
                alt='virtual'
                className='virtual'
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
    </section>
  )
}

export default Acquaintance
