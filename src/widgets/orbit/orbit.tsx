import './orbit.scss';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from 'gsap/MotionPathPlugin';

import Path from './path';
import PurplePlanet from '../../shared/assets/planets/PurplePlanet/PurplePlanet';
import BluePlanet from '../../shared/assets/planets/BluePlanet/BluePlanetBig';

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
                    toggleActions: 'reverse none none reverse',
                });
            };

            gsap.to(".orbit", {
                scrollTrigger: {
                    trigger: ".gaming",
                    start: "top center",
                    end: "bottom+=700 center",
                    pin: ".orbit",
                    pinType: "transform",
                    scrub: true,
                    onEnter: () => {
                        animatePlanet('#planet', '#path');
                    },
                    onLeave: () => {
                        gsap.killTweensOf('#planet');
                    },
                    onLeaveBack: () => {
                        gsap.killTweensOf('#planet');
                    },
                    onEnterBack: () => {
                        animatePlanet('#planet', '#path');
                    }
                }
            });

            gsap.set(".orbit", {
                scale: 1
            })

            gsap.to(".orbit", {
                scrollTrigger: {
                    trigger: ".gaming",
                    start: "top-=200 center",
                    end: "top+=150 center",
                    scrub: true,
                },
                opacity: 1,
                scale: 1.2,
                onComplete: () => {
                    gsap.to(".orbit", {
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
    });

    return (
        <>
            <div style={{ opacity: 0 }} className='orbit'>
                <Path />
                <PurplePlanet />
                <BluePlanet />
            </div>
        </>
    )
}

export default Orbit