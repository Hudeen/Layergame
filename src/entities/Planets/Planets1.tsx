import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import './Planets1.scss';
import OrbitPurple from '../orbits/orbitPurple/OrbitPurple';
import BluePlanetBig from '../../shared/assets/planets/BluePlanet/BluePlanetBig';

gsap.registerPlugin(ScrollTrigger)

const Planets: React.FC = () => {

    useGSAP(() => {
        gsap.to(".palnets", {
            scrollTrigger: {
                trigger: ".aboutUs_block",
                start: "bottom+=100 center",
                end: "bottom+=300 center",

                toggleActions: 'restart none none reverse',
                
            },
            opacity: 0, scale: 1.5,duration: 0.5,
        });

        gsap.to(".bluePlanetBig", {
            scrollTrigger: {
                trigger: ".palnets",
                scrub: true,
                // markers: true
            },
            opacity: 1,
            ease: "power1.inOut",
            x: 100,
        });

        gsap.to(".universe", {
            scrollTrigger: {
                trigger: ".palnets",
                scrub: true,
                // markers: true
            },
            opacity: 1,
            ease: "power1.inOut",
            y: -100
        });
    });

    return (
        <div className='palnets'>
            <div className='universe'>
                <OrbitPurple />
            </div>
            <BluePlanetBig />
        </div>
    );
}

export default Planets;