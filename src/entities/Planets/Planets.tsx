import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import './Planest.css';
import Orbit from '../orbit/Orbit';
import BluePlanet from '../../shared/assets/planets/BluePlanet';

gsap.registerPlugin(ScrollTrigger)

const Planets: React.FC = () => {

    useGSAP(() => {
        gsap.to(".palnets", {
            scrollTrigger: {
                trigger: ".aboutUs_block",
                start: "bottom top",
                end: "2000px center",
                scrub: true,
                markers: true

            }, opacity: 0, scale: 1.5
        });

        gsap.to(".test", {
            scrollTrigger: {
                trigger: ".palnets",
                scrub: true,
            },
            opacity: 1,
            ease: "power1.inOut",
            x: 100,
        });

        gsap.to(".universe", {
            scrollTrigger: {
                trigger: ".palnets",
                scrub: true,
            },
            opacity: 1,
            ease: "power1.inOut",
            y: -100
        });
    });

    return (
        <div className='palnets'>
            <BluePlanet />
            <Orbit />
        </div>
    );
}

export default Planets;