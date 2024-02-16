import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import './about_us.scss';
import BlueAustro from '../../shared/assets/images/BlueAustro.svg';
import PurpleAustron from '../../shared/assets/images/PurpleAustron.svg';
import Alien from '../../shared/assets/images/Alien.svg';
import Ship from '../../shared/assets/images/Ship.svg';
import Rocket from '../../shared/assets/images/Rocket.svg';

gsap.registerPlugin(ScrollTrigger);

const AboutUs: React.FC = () => {
    const container2 = useRef<HTMLDivElement | null>(null);
    const container3 = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {}, [container2, container3]);

    return (
        <div className='wrapper'>
            <div className="gaming">
            <div className="item aboutUs__item-2" ref={container3}>
                    <div className="number">
                        <h1 className="num" style={{paddingRight: "4vw"}} >01</h1>
                        <img className='img one' src={BlueAustro} alt="Blue Austro" />
                        <img className='img two' src={PurpleAustron} alt="Purple Austron" />
                    </div>
                    <section className="text">
                    <h1 className='h1'>LAYERGAME own games</h1>
                        <h2 className='title'>full potential of the LayerGame SDK</h2>
                        <h1 className='subtitle'>We're not just building games; we're building worlds,
                            communities, and experiences. LayerGame is where every gamer's preference is
                            recognized and celebrated. Join us on this thrilling journey to explore, play,
                            and discover where your next gaming adventure will take you.
                        </h1>
                    </section>
                </div>

                <svg className='line' width="4" style={{maxHeight: window.innerHeight * 0.3}} viewBox="0 0 4 1721" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0L2.00008 1721" stroke="url(#paint0_linear_262_457)" strokeWidth="3" />
                    <defs>
                        <linearGradient id="paint0_linear_262_457" x1="2.5" y1="-2.18557e-08" x2="2.50008" y2="1721" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#14D1E8" stopOpacity="0" />
                            <stop offset="0.0851144" stopColor="#14D1E8" />
                            <stop offset="0.915868" stopColor="#C35CFC" />
                            <stop offset="1" stopColor="#C35CFC" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="item reverse" ref={container2}>
                    <div className="number reserve" style={{paddingLeft: "6vw"}} >
                        <h1 className="num">02</h1>
                        <img className='img three' src={Alien} alt="Alien" />
                        <img className='img four' src={Ship} alt="Ship" />
                    </div>
                    <div className="text reserve">
                        <h1 className='h1'>lAYERGAME SDK</h1>
                        <h2 className='title'>Between WEB2 & <br className='desktop' /> WEB3 WORLDS</h2>
                        <h1 className='subtitle'>At LayerGame, players are invited to delve
                            into a meticulously curated selection of competitive games spanning
                            various genres and platforms. But it doesn't stop there; developers are
                            handed the keys to the kingdom with our robust SDK, streamlining game development
                            and enabling creators to focus on crafting compelling gameplay narratives.
                        </h1>
                    </div>
                </div>

                <div className="item aboutUs__item-2" ref={container3}>
                    <div className="number">
                        <h1 className="num">03</h1>
                        <img className='img five' src={Rocket} alt="Rocket" />
                    </div>
                    <div className="text">
                        <h1 className='h1'>LAYERGAME own games</h1>
                        <h2 className='title'>full potential of the LayerGame SDK</h2>
                        <h1 className='subtitle'>We're not just building games; we're building worlds,
                            communities, and experiences. LayerGame is where every gamer's preference is
                            recognized and celebrated. Join us on this thrilling journey to explore, play,
                            and discover where your next gaming adventure will take you.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

