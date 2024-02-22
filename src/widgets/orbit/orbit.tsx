import './orbit.scss';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from 'gsap/MotionPathPlugin';

import Path from './path';
import PurplePlanetGaming from '../../shared/assets/planets/PurplePlanet/PurplePlanetGaming';
import BluePlanetBig from '../../shared/assets/planets/BluePlanet/BluePlanetBig';


gsap.registerPlugin(MotionPathPlugin);
const Orbit = () => {
    useGSAP(() => {
        if (window.innerWidth > 1023) {
            const animatePlanet = (planetId: string, pathId: string) => {
                gsap.to(planetId, {
                    duration: 15,
                    motionPath: {
                        path: pathId,
                        align: pathId,
                        alignOrigin: [0.5, 0.5],
                    },
                    ease: 'none',
                    repeat: -1,
                });
            };

            gsap.set(".purplePlanetGaming", {
                opacity: 1
            });

            gsap.to(".orbit", {
                scrollTrigger: {
                    trigger: ".gaming",
                    start: "top center",
                    end: "bottom+=700 center",
                    pin: ".orbit",
                    pinType: "transform",
                    scrub: true,
                    onEnter: () => {
                        animatePlanet('.purplePlanetGaming', '#path');
                    },
                    onLeave: () => {
                        gsap.killTweensOf('.purplePlanetGaming');
                        document.addEventListener("DOMContentLoaded", function() {
                            gsap.set(".purplePlanetGaming", {
                                opacity: 0
                            });
                        });
                    },
                    onLeaveBack: () => {
                        gsap.killTweensOf('.purplePlanetGaming');
                    },
                    onEnterBack: () => {
                        animatePlanet('.purplePlanetGaming', '#path');
                    }
                }
            });

            gsap.set(".test, .bluePlanetBig", {
                scale: 1,
                opacity: 0
            });

            gsap.to(".test", {
                scrollTrigger: {
                    trigger: ".gaming",
                    start: "top-=200 center",
                    end: "top+=150 center",
                    scrub: true,
                },
                opacity: 1,
                scale: 1.2,
                onComplete: () => {
                    gsap.to(".test", {
                        scrollTrigger: {
                            trigger: ".gaming",
                            start: "bottom+=400 center",
                            end: "bottom+=700 center",
                            scrub: true,
                        },
                        scale: 1.4,
                        opacity: 0
                    });
                }
            });
        }

        gsap.to(".bluePlanetBig", {
            scrollTrigger: {
                trigger: ".gaming",
                start: "top-=200 center",
                end: "bottom+=700 center",
                scrub: true,
            },
            y: -500
        })

        gsap.to(".test", {
            scrollTrigger: {
                trigger: ".gaming",
                start: "top-=200 center",
                end: "bottom+=700 center",
                scrub: true,
            },
            y: -500
        })

        gsap.to(".bluePlanetBig", {
            scrollTrigger: {
                trigger: ".gaming",
                start: "top-=200 center",
                end: "top+=150 center",
                scrub: true,
            },
            opacity: 1,
            scale: 1.2,
            onComplete: () => {
                gsap.to(".bluePlanetBig", {
                    scrollTrigger: {
                        trigger: ".gaming",
                        start: "bottom+=400 center",
                        end: "bottom+=700 center",
                        scrub: true,
                    },
                    scale: 1.4,
                    opacity: 0
                });
            }
        });
    });

    // bluePlanetBig

    return (
        <>
            <div className='orbit'>
                <div className='test'>
                    <Path />
                    <PurplePlanetGaming />
                </div>
                <BluePlanetBig />
            </div>
        </>
    )
}

export default Orbit