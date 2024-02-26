import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.scss'
import Planet from '../../shared/assets/images/planet.png'
import NFT from '../../shared/assets/images/imgNFT.png'
import live from '../../assets/images/livedro.svg'
import { GrBottomCorner } from 'react-icons/gr'

gsap.registerPlugin(ScrollTrigger)

export const Mint: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className='mint'
      ref={containerRef}>
      <div className='content'>
        <p className='live'>
          <span>
            <img
              src={live}
              alt='live'
            />
            624
          </span>
          Live Minted
        </p>
        <h3>
          Remove borders with <span>NFTs</span> share art freely
        </h3>
        <p className='sub-title'>Discover the power of NFTs for a unique digital experience.</p>
        <div className='buttons'>
          <button>Mint Now</button>
          <div>
            <p>
              0/777
              <span>Remaining NSTs</span>
            </p>
            <GrBottomCorner />
            <GrBottomCorner />
          </div>
        </div>

        <div className='information'>
          <div>
            <p>365</p>
            <span>Total Items</span>
          </div>
          <div>
            <p>12K+</p>
            <span>Total Owners</span>
          </div>
          <div>
            <p>1.72</p>
            <span>Floor Price</span>
          </div>
          <div>
            <p>42.2K</p>
            <span>Volume Traded</span>
          </div>
        </div>
      </div>
      <div className='nft'>
        <img
          src={NFT}
          alt='MintImg'
          className='mint-img'
        />
        <div>
          <p>
            00 <span>hours</span>
          </p>
          <p className='dots'>:</p>
          <p>
            00 <span>minutes</span>
          </p>
          <p className='dots'>:</p>

          <p>
            00 <span>seconds</span>
          </p>
        </div>
      </div>
      <img
        src={Planet}
        alt='Planet'
        className='planet'
      />
      {/* <div
        className='stars-container'
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
              fillOpacity='0.3'
            />
          </svg>
        ))}
      </div> */}
    </div>
  )
}
