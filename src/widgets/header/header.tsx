import React, { useRef, useState } from 'react'
import './header.scss'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../../shared/assets/icons/logo.svg'

gsap.registerPlugin(ScrollTrigger)

const Header: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const navigationRef = useRef<HTMLDivElement>(null)
  const [isOpened, setIsOpened] = useState(false)
  const [, setIsAnimating] = React.useState(false)

  const handleButtonClick = () => {
    setIsOpened(!isOpened)
  }

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const divBounds = event.currentTarget.getBoundingClientRect()
    const mouseY = event.clientY

    if (mouseY >= divBounds.bottom) {
      setIsOpened(false)
    }
  }

  const handleAnimationStart = () => {
    setIsAnimating(true)
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false)
  }

  // useGSAP(() => {
  //   const options = {
  //     trigger: containerRef.current,
  //     start: '-35px',
  //     toggleActions: 'restart none none reverse',
  //   }

  //   gsap.from(containerRef.current, {
  //     x: -40,
  //     opacity: 0,
  //     duration: 0.4,
  //     scrollTrigger: options,
  //   })

  //   gsap.to(containerRef.current, {
  //     x: 0,
  //     opacity: 1,
  //     duration: 0.4,
  //     scrollTrigger: options,
  //   })
  // }, [])

  return (
    <header>
      <div
        className={`navigaion h__mobile_hidden ${isOpened ? 'open' : ''}`}
        ref={navigationRef}
        onMouseLeave={handleMouseLeave}
        onAnimationStart={handleAnimationStart}
        onAnimationEnd={handleAnimationEnd}>
        <h1 className='title'>Platea vitae interdum.</h1>
        <h2 className='subtitle'>Dui cras et. Malesuada eget odio. Pellentesque orci.</h2>
        {/* <div className='item'>
          <a className='link'>Link1</a>
          <a className='link'>Link2</a>
          <a className='link'>Link3</a>
        </div> */}
        {/* <div className='glare'></div> */}
      </div>

      <div className='header__item'>
        <img
          className='header__logo'
          src={logo}
        />
      </div>

      <div className='header__item h__mobile_hidden'>
        <div className={`navigaion__menu ${isOpened ? 'open' : ''}`}>
          <a className='navigaion__menu-link'>Technology</a>
          <a className='navigaion__menu-link'>Our Mission</a>
          <a className='navigaion__menu-link'>Mint</a>
        </div>

        <div className='header__buttons'>
          <div className='header__buttons-app'>
            <svg
              width='108'
              height='50'
              viewBox='0 0 128 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                className='header__button'
                d='M5 1H102.929C103.99 1 105.007 1.42143 105.757 2.17157L125.757 22.1716C127.319 23.7337 127.319 26.2663 125.757 27.8284L105.757 47.8284C105.007 48.5786 103.99 49 102.929 49H5C2.79086 49 1 47.2091 1 45V5C1 2.79086 2.79086 1 5 1Z'
                stroke='url(#paint0_linear_96_9)'
                stroke-width='2'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_96_9'
                  x1='0'
                  y1='0'
                  x2='134.358'
                  y2='24.252'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#30BBEE' />
                  <stop
                    offset='1'
                    stop-color='#C659FC'
                  />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient
                  id='gradient'
                  x1='0'
                  y1='0'
                  x2='1'
                  y2='1'>
                  <stop
                    offset='0%'
                    stop-color='#30BBEE'></stop>
                  <stop
                    offset='99.79%'
                    stop-color='#C659FC'></stop>
                </linearGradient>
              </defs>
              <text
                style={{ cursor: 'pointer' }}
                x='15'
                y='30'
                fill='url(#gradient)'>
                Launch App
              </text>
            </svg>
          </div>

          <div
            className='header__buttons-navigation'
            ref={containerRef}
            onClick={handleButtonClick}>
            <svg
              className='svg'
              width='49'
              height='50'
              viewBox='0 0 59 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              ref={svgRef}>
              <path
                d='M54 1H3.41422L23.1357 20.7215C25.4956 23.0814 25.4762 26.9134 23.0926 29.2494L2.93892 49H54C56.2091 49 58 47.2091 58 45V5C58 2.79086 56.2091 1 54 1Z'
                stroke='url(#paint0_linear_96_16)'
                stroke-width='2'
                fill='#000'
              />
              <path
                d='M47 31H31C30.45 31 30 30.55 30 30C30 29.45 30.45 29 31 29H47C47.55 29 48 29.45 48 30C48 30.55 47.55 31 47 31ZM47 26H31C30.45 26 30 25.55 30 25C30 24.45 30.45 24 31 24H47C47.55 24 48 24.45 48 25C48 25.55 47.55 26 47 26ZM48 20C48 20.55 47.55 21 47 21H31C30.45 21 30 20.55 30 20C30 19.45 30.45 19 31 19H47C47.55 19 48 19.45 48 20Z'
                fill='url(#paint1_linear_96_16)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_96_16'
                  x1='59'
                  y1='0'
                  x2='-3.02193'
                  y2='5.0378'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#30BBEE' />
                  <stop
                    offset='1'
                    stop-color='#C659FC'
                  />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_96_16'
                  x1='48'
                  y1='19'
                  x2='28.9965'
                  y2='20.9789'
                  gradientUnits='userSpaceOnUse'>
                  <stop stop-color='#30BBEE' />
                  <stop
                    offset='1'
                    stop-color='#C659FC'
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
