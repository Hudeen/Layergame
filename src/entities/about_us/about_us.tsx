import React, { useEffect, useRef } from 'react'; import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import './about_us.css';
import Orbit from '../orbit/Orbit';
import BluePlanet from '../../shared/assets/planets/BluePlanet';

gsap.registerPlugin(ScrollTrigger)

const AboutUs: React.FC = () => {

    const container2 = useRef<HTMLElement | null>(null);
    const container3 = useRef<HTMLElement | null>(null);

    useGSAP(() => {
        const container = document.querySelector('.aboutUs__item') as HTMLElement;
        const options = {
            trigger: container,
            start: 'top 40%',
            end: '100px 40%',
            toggleActions: 'restart none none reverse',
        };

        gsap.from(container, {

            opacity: 0,
            scrollTrigger: options,
        });

        gsap.to(container, {
            opacity: 1,
            duration: .4,
            y: 0,
            scrollTrigger: options,
        });

        if (container2.current) {
            const options2 = {
                trigger: container2.current,
                start: '-250px 40%',
                end: '100px 40%',
                toggleActions: 'restart none none reverse',
            };

            gsap.from(container2.current, {
                opacity: 0,
                duration: .4,
                scrollTrigger: options2,
            });

            gsap.to(container2.current, {
                opacity: 1,
                duration: .4,
                y: 0,
                scrollTrigger: options2,
            });
        }

        if (container3.current) {
            const options3 = {
                trigger: container3.current,
                start: '-250px 40%',
                end: '100px 40%',
                toggleActions: 'restart none none reverse',
            };

            gsap.from(container3.current, {

                opacity: 0,
                duration: .4,
                scrollTrigger: options3,
            });

            gsap.to(container3.current, {
                opacity: 1,
                duration: .4,
                y: 0,
                scrollTrigger: options3,
            });
        }
    }, [container2, container3]);

    return (
        <div className='aboutUs_block'>
            <div className="aboutUs">
                <div className="aboutUs__item">
                    <div className="aboutUs__item-number">
                        <div></div>
                        <h1 className="aboutUs__number-title">01</h1>
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
                </div>

                <div className="aboutUs__item aboutUs__item-2" ref={container2}>
                    <div className="aboutUs__item-text">
                        <h1 className='text1'>Sed in consectetur</h1>
                        <h2 className='text2'>Sed in consectetur <br />risus sed sit velit.</h2>
                        <h1 className='text3'>Sodales imperdiet mattis eleifend nec luctus elit.
                            Lorem platea platea et dictum nulla sed sed vel sed arcu dictum leo,
                            lectus ipsum cras justo vitae eleifend quis,
                            cras venenatis nunc mauris nunc ipsum venenatis interdum eleifend nunc risus vulputate ultricies.
                        </h1>
                    </div>
                    <div className="aboutUs__item-number">
                        <div></div>
                        <h1 className="aboutUs__number-title">02</h1>
                    </div>
                </div>

                <div className="aboutUs__item aboutUs__item-2" ref={container3}>
                    <div className="aboutUs__item-number">
                        <div></div>
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
                </div>
            </div>
        </div>
    );
}

export default AboutUs;