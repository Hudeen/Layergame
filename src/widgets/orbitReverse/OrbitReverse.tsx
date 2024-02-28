import './OrbitReverse.scss';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from 'gsap/MotionPathPlugin';

import PathReverse from './PathReverse';
import BluePlanetSmall from '../../shared/assets/planets/BluePlanet/BluePlanetSmall';


gsap.registerPlugin(MotionPathPlugin);
const OrbitReverse = () => {
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

            gsap.set(".BluePlanetSmall", {
                opacity: 1
            });

            gsap.to(".orbitReverse", {
                scrollTrigger: {
                    trigger: ".ttt",
                    start: "top center",
                    end: "bottom+=700 center",
                    pin: ".orbitReverse",
                    pinType: "transform",
                    scrub: true,
                    onEnter: () => {
                        animatePlanet('.BluePlanetSmall', '#pathReverse');
                    },
                    onLeave: () => {
                        gsap.killTweensOf('.BluePlanetSmall');
                        document.addEventListener("DOMContentLoaded", function() {
                            gsap.set(".BluePlanetSmall", {
                                opacity: 0
                            });
                        });
                    },
                    onLeaveBack: () => {
                        gsap.killTweensOf('.BluePlanetSmall');
                    },
                    onEnterBack: () => {
                        animatePlanet('.BluePlanetSmall', '#pathReverse');
                    }
                }
            });

            // gsap.set(".testReverse, .bluePlanetBig", {
            //     scale: 1,
            //     opacity: 0
            // });

            // gsap.to(".testReverse", {
            //     scrollTrigger: {
            //         trigger: ".ttt",
            //         start: "top-=200 center",
            //         end: "top+=150 center",
            //         scrub: true,
            //     },
            //     opacity: 1,
            //     scale: 1.2,
            //     onComplete: () => {
            //         gsap.to(".testReverse", {
            //             scrollTrigger: {
            //                 trigger: ".ttt",
            //                 start: "bottom+=400 center",
            //                 end: "bottom+=700 center",
            //                 scrub: true,
            //             },
            //             scale: 1.4,
            //             opacity: 0
            //         });
            //     }
            // });
        }

        // gsap.to(".testReverse", {
        //     scrollTrigger: {
        //         trigger: ".ttt",
        //         start: "top-=200 center",
        //         end: "bottom+=700 center",
        //         scrub: true,
        //     },
        //     y: -500
        // })

    });

    // bluePlanetBig

    return (
        <>
            <div className='orbitReverse'>
                <div className='testReverse'>
                    <PathReverse />
                    <BluePlanetSmall />
                </div>
            </div>
        </>
    )
}

export default OrbitReverse