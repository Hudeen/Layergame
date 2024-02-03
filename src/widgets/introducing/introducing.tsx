//Import components
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

//Import styles
import './introducing.css'

const Introducing: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger)

  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cometsRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)

  //Content animation
  useGSAP(() => {
    const options = {
      trigger: containerRef.current,
      start: '-100px',
      end: 'bottom center',
      toggleActions: 'restart none none reverse',
    }

    gsap.from(contentRef.current, {
      opacity: 0,
      duration: 0.4,
      scale: 0.8,
      scrollTrigger: options,
    })

    gsap.to(contentRef.current, {
      opacity: 1,
      duration: 0.4,
      scale: 1,
      y: 0,
      scrollTrigger: options,
    })
  }, [])

  //Comets animation
  useGSAP(() => {
    const options = {
      trigger: containerRef.current,
      start: '-100px',
      end: 'bottom center',
      toggleActions: 'restart none none reverse',
    }

    gsap.from(cometsRef.current, {
      y: '100%',
      opacity: 0,
      duration: 0.8,
      scale: 0.3,
      scrollTrigger: options,
    })

    gsap.to(cometsRef.current, {
      opacity: 1,
      duration: 0.8,
      scale: 1,
      y: -500,
      scrollTrigger: options,
    })

    if (cometsRef.current) {
      const maxX = window.innerWidth
      const maxY = window.innerHeight
      const angle = 40

      ;[...cometsRef.current.children].forEach((comet: Element) => {
        const maxXPosition = maxX
        const randomYPosition = gsap.utils.random(0, maxY)

        const radianAngle = (angle * Math.PI) / 180
        const xComponent = Math.cos(radianAngle) * maxXPosition
        const yComponent = Math.sin(radianAngle) * maxXPosition

        gsap.set(comet, {
          x: xComponent,
          y: randomYPosition,
          scale: 0,
          filter: `blur(${gsap.utils.random(0, 5)}px)`,
        })

        gsap.to(comet, {
          x: -xComponent,
          y: randomYPosition + yComponent,
          scale: gsap.utils.random(0.8, 1),
          duration: gsap.utils.random(3, 12),
          repeat: -1,
          opacity: 0,
          ease: 'none',
        })
      })
    }
  }, [])

  //Starts animation
  useGSAP(() => {
    const options = {
      trigger: containerRef.current,
      start: '-100px',
      toggleActions: 'restart none none reverse',
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

    if (starsRef.current) {
      const maxX = window.innerWidth
      const maxY = window.innerHeight

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
  }, [])

  return (
    <section
      className='introducing'
      ref={containerRef}>
      <div
        className='introducing__content'
        ref={contentRef}>
        <h1 className='introducing__title'>Tortor, arcu si.</h1>
        <h2 className='introducing__sub-title'>Sed in consectetur risus sed sit velit.</h2>
        <p className='introducing__description'>
          Sodales imperdiet mattis eleifend nec luctus elit. Lorem platea platea et dictum nulla sed sed vel sed arcu
          dictum leo, lectus ipsum cras justo vitae eleifend quis, cras venenatis nunc mauris nunc ipsum venenatis
          interdum eleifend nunc risus vulputate ultricies.
        </p>
      </div>
      <div
        className='comet-container'
        ref={cometsRef}>
        {[...Array(4)].map((_, index) => (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='379'
            height='185'
            viewBox='0 0 379 185'
            fill='none'
            className='comet'
            key={index}>
            <path
              d='M20.8601 183.479C17.4898 185.037 13.6399 185.199 10.1508 183.929C6.66171 182.659 3.81663 180.06 2.23621 176.7C0.678258 173.33 0.516624 169.48 1.78656 165.991C3.05649 162.502 5.6549 159.657 9.0148 158.076C9.0148 158.076 375.649 -6.07851 378.945 0.990742C382.242 8.05995 20.8601 183.479 20.8601 183.479Z'
              fill='url(#paint0_linear_781_5615)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_781_5615'
                x1='15.2094'
                y1='170.651'
                x2='380.09'
                y2='0.504396'
                gradientUnits='userSpaceOnUse'>
                <stop stop-color='#6E94F4' />
                <stop
                  offset='1'
                  stop-color='#6E94F4'
                  stop-opacity='0'
                />
              </linearGradient>
            </defs>
          </svg>
        ))}
        {[...Array(4)].map((_, index) => (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='162'
            height='162'
            viewBox='0 0 162 162'
            fill='none'
            className='comet'
            key={index}>
            <path
              d='M10.7372 119.923C9.31733 120.579 7.69546 120.647 6.22555 120.112C4.75564 119.577 3.55705 118.483 2.89124 117.067C2.2349 115.647 2.1668 114.026 2.70181 112.556C3.23681 111.086 4.33148 109.887 5.74695 109.221C5.74695 109.221 160.204 40.0653 161.593 43.0435C162.982 46.0216 10.7372 119.923 10.7372 119.923Z'
              fill='url(#paint0_linear_781_5602)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_781_5602'
                x1='8.35664'
                y1='114.519'
                x2='162.075'
                y2='42.8386'
                gradientUnits='userSpaceOnUse'>
                <stop stop-color='#C759FC' />
                <stop
                  offset='1'
                  stop-color='#C759FC'
                  stop-opacity='0'
                />
              </linearGradient>
            </defs>
          </svg>
        ))}
        {[...Array(4)].map((_, index) => (
          <svg
            width='325'
            height='383'
            viewBox='0 0 325 383'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='comet'
            key={index}>
            <path
              d='M24.576 284.803C21.2056 286.361 17.3558 286.523 13.8666 285.253C10.3775 283.983 7.53245 281.385 5.95203 278.025C4.39408 274.654 4.23244 270.804 5.50238 267.315C6.77231 263.826 9.37072 260.981 12.7306 259.401C12.7306 259.401 379.365 95.2457 382.661 102.315C385.958 109.384 24.576 284.803 24.576 284.803Z'
              fill='url(#paint0_linear_781_5587)'
            />
            <path
              d='M12.6521 274.852C11.8142 273.042 11.7298 270.973 12.4174 269.1C13.105 267.228 14.5083 265.705 16.3186 264.867C18.129 264.029 20.198 263.945 22.0706 264.633C23.9432 265.32 25.4659 266.723 26.3038 268.534C26.7186 269.43 26.9529 270.399 26.9931 271.386C27.0334 272.373 26.8789 273.358 26.5384 274.286C26.198 275.213 25.6783 276.064 25.0089 276.79C24.3396 277.517 23.5336 278.104 22.6372 278.519C21.7408 278.934 20.7716 279.168 19.7847 279.208C18.7978 279.249 17.8125 279.094 16.8853 278.754C15.9581 278.413 15.1071 277.893 14.3808 277.224C13.6545 276.555 13.067 275.749 12.6521 274.852Z'
              fill='#FAFAFA'
            />
            <defs>
              <linearGradient
                id='paint0_linear_781_5587'
                x1='18.9252'
                y1='271.975'
                x2='383.806'
                y2='101.829'
                gradientUnits='userSpaceOnUse'>
                <stop stop-color='#C759FC' />
                <stop
                  offset='1'
                  stop-color='#C759FC'
                  stop-opacity='0'
                />
              </linearGradient>
            </defs>
          </svg>
        ))}
      </div>
      <div
        className='introducing__stars-container'
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

export default Introducing
