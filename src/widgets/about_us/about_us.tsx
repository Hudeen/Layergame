import React, { useRef } from 'react'; import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import './about_us.css';
import './about_us.scss'
import BlueAustro from '../../shared/assets/images/BlueAustro.svg'
import PurpleAustron from '../../shared/assets/images/PurpleAustron.svg'
import Alien from '../../shared/assets/images/Alien.svg'
import Ship from '../../shared/assets/images/Ship.svg'
import Rocket from '../../shared/assets/images/Rocket.svg'

gsap.registerPlugin(ScrollTrigger)

const AboutUs: React.FC = () => {

    const container2 = useRef<HTMLDivElement | null>(null);
    const container3 = useRef<HTMLDivElement | null>(null);

    // useGSAP(() => {
    //     const container = document.querySelector('.aboutUs__item') as HTMLElement;
    //     const options = {
    //         trigger: container,
    //         start: 'top 40%',
    //         end: '100px 40%',
    //         toggleActions: 'restart none none reverse',
    //     };

    //     gsap.from(container, {

    //         opacity: 0,
    //         scrollTrigger: options,
    //     });

    //     gsap.to(container, {
    //         opacity: 1,
    //         duration: .4,
    //         y: 0,
    //         scrollTrigger: options,
    //     });

    //     if (container2.current) {
    //         const options2 = {
    //             trigger: container2.current,
    //             start: '-250px 40%',
    //             end: '100px 40%',
    //             toggleActions: 'restart none none reverse',
    //         };

    //         gsap.from(container2.current, {
    //             opacity: 0,
    //             duration: .4,
    //             scrollTrigger: options2,
    //         });

    //         gsap.to(container2.current, {
    //             opacity: 1,
    //             duration: .4,
    //             y: 0,
    //             scrollTrigger: options2,
    //         });
    //     }

    //     if (container3.current) {
    //         const options3 = {
    //             trigger: container3.current,
    //             start: '-250px 40%',
    //             end: '100px 40%',
    //             toggleActions: 'restart none none reverse',
    //         };

    //         gsap.from(container3.current, {

    //             opacity: 0,
    //             duration: .4,
    //             scrollTrigger: options3,
    //         });

    //         gsap.to(container3.current, {
    //             opacity: 1,
    //             duration: .4,
    //             y: 0,
    //             scrollTrigger: options3,
    //         });
    //     }
    // }, [container2, container3]);

    return (
        <div className='wrapper'>
            <div className="gaming">
                <div className="item">
                    <div className="number">
                        <img className='img one' src={BlueAustro} />
                        <img className='img two' src={PurpleAustron} />
                        <h1 className="num">01</h1>
                    </div>

                    <div className="text">
                        <h1 className='h1'>LAYERGAME APP</h1>
                        <h2 className='title'>Sed in consectetur <br />risus sed sit velit.</h2>
                        <h1 className='subtitle'>Sodales imperdiet mattis eleifend nec luctus elit.
                            Lorem platea platea et dictum nulla sed sed vel sed arcu dictum leo,
                            lectus ipsum cras justo vitae eleifend quis,
                            cras venenatis nunc mauris nunc ipsum venenatis interdum eleifend nunc risus vulputate ultricies.
                        </h1>
                    </div>
                </div>

                <div className="item reverse aboutUs__item-2" ref={container2}>
                    <div className="number">
                        {/* <img className='img three' src={Alien} />
                        <img className='img four' src={Ship} /> */}
                        <h1 className="num">02</h1>
                    </div>
                    
                    <div className="text">
                        <h1 className='h1'>Sed in consectetur</h1>
                        <h2 className='title'>Sed in consectetur <br />risus sed sit velit.</h2>
                        <h1 className='subtitle'>Sodales imperdiet mattis eleifend nec luctus elit.
                            Lorem platea platea et dictum nulla sed sed vel sed arcu dictum leo,
                            lectus ipsum cras justo vitae eleifend quis,
                            cras venenatis nunc mauris nunc ipsum venenatis interdum eleifend nunc risus vulputate ultricies.
                        </h1>
                    </div>
                </div>

                {/* <div className="aboutUs__item aboutUs__item-2" ref={container3}>
                    <div className="aboutUs__item-number">
                        <img className='aboutUs__item-img five' src={Rocket} />
                        <h1 className="aboutUs__number-title">03</h1>
                    </div>
                    <div className="aboutUs__item-text">
                        <h1 className='text1'>Sed in consectetur</h1>
                        <h2 className='text2'>Sed in consectetur <br />risus sed sit velit.</h2>
                        <h1 className='text3'>Sodales imperdiet mattis eleifend nec luctus elit.
                            Lorem platea platea et dictum nulla sed sed vel sed arcu dictum leo,
                            lectus ipsum cras justo vitae eleifend quis,
                            cras venenatis nunc mauris nunc ipsum venenatis interdum eleifend nunc risus vulputate ultricies.
                        </h1>
                    </div>
                </div> */}

            </div>

            {/* <svg className='aboutUs__line' width="4" height="1721" viewBox="0 0 4 1721" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 0L2.00008 1721" stroke="url(#paint0_linear_262_457)" stroke-width="3" />
                    <defs>
                        <linearGradient id="paint0_linear_262_457" x1="2.5" y1="-2.18557e-08" x2="2.50008" y2="1721" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#14D1E8" stop-opacity="0" />
                            <stop offset="0.0851144" stop-color="#14D1E8" />
                            <stop offset="0.915868" stop-color="#C35CFC" />
                            <stop offset="1" stop-color="#C35CFC" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg> */}

            {/* <button className="custom-btn btn-3"><span>Explore Technology</span></button> */}

        </div>
    );
}

export default AboutUs;