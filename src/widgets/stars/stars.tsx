import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './stars.css'

gsap.registerPlugin(ScrollTrigger)

import comet from '../../assets/cometa.svg'

const Stars: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.section') as HTMLElement
    const content = document.querySelector('.content') as HTMLElement
    const starsContainer = document.querySelector('.stars-container') as HTMLElement

    const options = {
      trigger: container,
      start: '-150px',
      toggleActions: 'restart none none reverse',
    }

    gsap.from(starsContainer, {
      y: '100%',
      opacity: 0,
      duration: 1,
      scale: 0.5,
      scrollTrigger: options,
    })
    gsap.to(starsContainer, {
      opacity: 1,
      duration: 1,
      scale: 1,
      y: 0,
      scrollTrigger: options,
    })

    gsap.from(content, {
      opacity: 0,
      duration: 0.3,
      scale: 0.5,
      scrollTrigger: options,
    })
    gsap.to(content, {
      opacity: 1,
      duration: 0.3,
      scale: 1,
      y: 0,
      scrollTrigger: options,
    })

    if (starsContainer) {
      const maxX = starsContainer.clientWidth
      const maxY = starsContainer.clientHeight

      Array.from(starsContainer.children).forEach((star, index) => {
        const maxXPosition = maxX - star.clientWidth * 2
        const maxYPosition = maxY - star.clientHeight * 2
        gsap.set(star, {
          x: gsap.utils.random(0, maxXPosition),
          y: gsap.utils.random(0, maxYPosition),
          scale: 0.5,
          opacity: gsap.utils.random(0, 1),
        })
        gsap.to(star, {
          duration: gsap.utils.random(1, 2),
          repeat: -1,
          scale: 1.5,
          opacity: gsap.utils.random(0, 1),
          yoyo: true,
        })
      })
    }
  }, [])

  return (
    <section className='section'>
      <div className='content'>
        <h1 className='content__title'>Tortor, arcu si.</h1>
        <h2 className='content__text'>Sed in consectetur risus sed sit velit.</h2>
      </div>
      <div className='stars-container'>
        {/* <img src={comet} alt="" /> */}
        {[...Array(35)].map(() => (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='11'
            height='12'
            viewBox='0 0 13 14'
            fill='none'
            className='star'>
            <path
              d='M6.46554 0.829267C6.45135 0.885888 6.28813 2.08909 6.10362 3.50462C5.91911 4.92015 5.7417 6.15874 5.72041 6.25783C5.66364 6.46308 5.89073 6.42061 1.15027 7.05053C0.497388 7.14254 -0.0206561 7.22747 0.000633426 7.2487C0.0219229 7.26993 1.29929 7.45395 2.84633 7.6592C4.39336 7.86446 5.67073 8.04848 5.68493 8.06263C5.70622 8.07679 5.89072 9.35784 6.10362 10.9078C6.31651 12.4579 6.50102 13.7318 6.51522 13.7531C6.5507 13.7885 6.62166 13.3284 6.99778 10.4478C7.161 9.1809 7.32422 8.11925 7.3526 8.09094C7.38099 8.05555 8.65126 7.85738 10.1841 7.65213C11.7099 7.44688 12.9801 7.26286 12.9943 7.24162C13.044 7.19208 12.824 7.16377 10.0422 6.79573C8.61578 6.61171 7.41647 6.42769 7.37389 6.38523C7.33131 6.34276 7.12551 5.0617 6.91972 3.54709C6.72101 2.02539 6.53651 0.772645 6.52231 0.75849C6.50812 0.744334 6.48683 0.772645 6.46554 0.829267Z'
              fill='white'
              fill-opacity='0.3'
            />
          </svg>
        ))}
        {[...Array(25)].map(() => (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='11'
            height='12'
            viewBox='0 0 34 35'
            fill='none'
            className='star'>
            <path
              d='M16.9099 0.949425C16.8728 1.09751 16.4459 4.24435 15.9633 7.94651C15.4808 11.6487 15.0168 14.8881 14.9611 15.1472C14.8126 15.684 15.4065 15.573 3.00839 17.2204C1.30086 17.4611 -0.0540235 17.6832 0.00165665 17.7387C0.0573369 17.7942 3.39815 18.2755 7.44424 18.8123C11.4903 19.3492 14.8312 19.8304 14.8683 19.8675C14.924 19.9045 15.4065 23.2549 15.9633 27.3088C16.5201 31.3627 17.0027 34.6946 17.0398 34.7501C17.1326 34.8427 17.3182 33.6395 18.3019 26.1056C18.7288 22.7922 19.1556 20.0155 19.2299 19.9415C19.3041 19.8489 22.6264 19.3306 26.6354 18.7938C30.6258 18.257 33.948 17.7757 33.9851 17.7202C34.1151 17.5906 33.5397 17.5166 26.2642 16.554C22.5336 16.0727 19.3969 15.5915 19.2856 15.4804C19.1742 15.3693 18.636 12.0189 18.0977 8.05757C17.578 4.07775 17.0955 0.801338 17.0584 0.764317C17.0212 0.727295 16.9656 0.801338 16.9099 0.949425Z'
              fill='url(#paint0_linear_164_281)'
            />
            <defs>
              <linearGradient
                id='paint0_linear_164_281'
                x1='0'
                y1='34.7549'
                x2='36.1107'
                y2='32.2479'
                gradientUnits='userSpaceOnUse'>
                <stop stop-color='#20C7ED' />
                <stop
                  offset='1'
                  stop-color='#D251FD'
                />
              </linearGradient>
            </defs>
          </svg>
        ))}
      </div>
    </section>
  )
}

export default Stars
