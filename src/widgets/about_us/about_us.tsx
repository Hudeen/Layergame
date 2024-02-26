import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './about_us.scss'
import BlueAustro from '../../shared/assets/images/BlueAustro.svg'
import PurpleAustron from '../../shared/assets/images/PurpleAustron.svg'
import Alien from '../../shared/assets/images/Alien.svg'
import Ship from '../../shared/assets/images/Ship.svg'
import Rocket from '../../shared/assets/images/Rocket.svg'
import Orbit from '../orbit/orbit'
import BluePlanetMobile from '../../shared/assets/planets/BluePlanet/BluePlanetMobile'
import PurplePlanetMobile from '../../shared/assets/planets/PurplePlanet/PurplePlanetMobile'

gsap.registerPlugin(ScrollTrigger)

const AboutUs: React.FC = () => {
  const starsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const container2 = useRef<HTMLDivElement | null>(null)
  const container3 = useRef<HTMLDivElement | null>(null)

  if (window.innerWidth > 1023) {
    useGSAP(() => {
      gsap.fromTo(
        '.line',
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: '.gaming',
            start: 'top+=1 center',
            end: 'bottom center',
            scrub: true,
          },
          opacity: 1,
        }
      )

      const container = document.querySelector('.aboutUs__item') as HTMLElement
      const options = {
        trigger: container,
        start: 'top 40%',
        end: '100px 40%',
        toggleActions: 'restart none none reverse',
      }
      gsap.fromTo(
        container,
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

      if (container2.current) {
        const options2 = {
          trigger: container2.current,
          start: 'top 40%',
          end: '100px 40%',
          toggleActions: 'restart none none reverse',
        }
        gsap.fromTo(
          container2.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
            y: 0,
            scrollTrigger: options2,
          }
        )
      }

      if (container3.current) {
        const options3 = {
          trigger: container3.current,
          start: 'top 40%',
          end: '100px 40%',
          toggleActions: 'restart none none reverse',
        }
        gsap.fromTo(
          container3.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
            y: 0,
            scrollTrigger: options3,
          }
        )
      }
    }, [container2, container3])
  }

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
                const maxYPosition = maxY - star.clientHeight * 10

                //Making stars
                gsap.set(star, {
                  x: gsap.utils.random(-1000, maxXPosition),
                  y: gsap.utils.random(0, maxYPosition + 1000),
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
            y: -2000,
            scale: 1,
            opacity: 1,
            scrollTrigger: starsOnEnter,
          }
        )
      }
    },
    { scope: containerRef }
  )

  return (
    <div
      className='wrapper__gaming'
      ref={containerRef}>
      <div className='gaming'>
        <div className='item aboutUs__item'>
          <div className='number'>
            <h1
              className='num'
              style={{ paddingRight: '4vw' }}>
              01
            </h1>
            <img
              className='img one'
              src={BlueAustro}
              alt='Blue Austro'
            />
            <img
              className='img two'
              src={PurpleAustron}
              alt='Purple Austron'
            />
          </div>
          <section className='text'>
            <h1 className='h1'>LAYERGAME own games</h1>
            <h2 className='title'>full potential of the LayerGame SDK</h2>
            <h1 className='subtitle'>
              We're not just building games; we're building worlds, communities, and experiences. LayerGame is where every
              gamer's preference is recognized and celebrated. Join us on this thrilling journey to explore, play, and
              discover where your next gaming adventure will take you.
            </h1>
          </section>
        </div>

        <svg
          className='line'
          width='4'
          viewBox='0 0 4 1721'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M2 0L2.00008 1721'
            stroke='url(#paint0_linear_262_457)'
            strokeWidth='3'
          />
          <defs>
            <linearGradient
              id='paint0_linear_262_457'
              x1='2.5'
              y1='-2.18557e-08'
              x2='2.50008'
              y2='1721'
              gradientUnits='userSpaceOnUse'>
              <stop
                stopColor='#14D1E8'
                stopOpacity='0'
              />
              <stop
                offset='0.0851144'
                stopColor='#14D1E8'
              />
              <stop
                offset='0.915868'
                stopColor='#C35CFC'
              />
              <stop
                offset='1'
                stopColor='#C35CFC'
                stopOpacity='0'
              />
            </linearGradient>
          </defs>
        </svg>

        <div
          className='item reverse'
          ref={container2}>
          <div
            className='number reserve'
            style={{ paddingLeft: '6vw' }}>
            <h1 className='num'>02</h1>
            <img
              className='img three'
              src={Alien}
              alt='Alien'
            />
            <img
              className='img four'
              src={Ship}
              alt='Ship'
            />
          </div>
          <div className='text reserve'>
            <h1 className='h1'>lAYERGAME SDK</h1>
            <h2 className='title'>
              Between WEB2 & <br className='desktop' /> WEB3 WORLDS
            </h2>
            <h1 className='subtitle'>
              At LayerGame, players are invited to delve into a meticulously curated selection of competitive games spanning
              various genres and platforms. But it doesn't stop there; developers are handed the keys to the kingdom with our
              robust SDK, streamlining game development and enabling creators to focus on crafting compelling gameplay
              narratives.
            </h1>
          </div>
        </div>

        <div
          className='item aboutUs__item-2'
          ref={container3}>
          <div className='number'>
            <h1 className='num'>03</h1>
            <img
              className='img five'
              src={Rocket}
              alt='Rocket'
            />
          </div>
          <div className='text'>
            <h1 className='h1'>LAYERGAME own games</h1>
            <h2 className='title'>full potential of the LayerGame SDK</h2>
            <h1 className='subtitle'>
              We're not just building games; we're building worlds, communities, and experiences. LayerGame is where every
              gamer's preference is recognized and celebrated. Join us on this thrilling journey to explore, play, and
              discover where your next gaming adventure will take you.
            </h1>
          </div>
        </div>
      </div>
      {containerRef.current && containerRef.current.offsetWidth >= 1280 ? (
        <Orbit />
      ) : (
        <>
          <BluePlanetMobile />
          <PurplePlanetMobile />
        </>
      )}
      <div
        className='stars-container'
        ref={starsRef}>
        {[...Array(60)].map((_, index) => (
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
      <button className="custom-btn btn-3"><span>Explore Technology</span></button>
    </div>
  )
}

export default AboutUs
