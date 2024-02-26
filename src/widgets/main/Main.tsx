
import "./main.scss"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import React, { useRef, memo } from "react";
import groovyWalkAnimation from "./animation.json";
import Saturn from "../../shared/assets/planets/Saturn/Saturn";
import PurplePlanet from "../../shared/assets/planets/PurplePlanet/PurplePlanetMain";
import Orbit1 from "./orbit1";
import Orbit2 from "./orbit2";
import Orbit3 from "./orbit3";

const SaturnMemoized = memo(Saturn);
const PurplePlanetMemoized = memo(PurplePlanet);
const Orbit1Memoized = memo(Orbit1);
const Orbit2Memoized = memo(Orbit2);
const Orbit3Memoized = memo(Orbit3);

const Main: React.FC = () => {
    const lottieContainerRef = useRef<HTMLDivElement>(null);

    if (window.innerWidth > 1023) {

        useGSAP(() => {
            gsap.set('.animation', {
                y: 0,
                scale: 0.85,
                opacity: 1
            })

            gsap.to(".animation", {
                scrollTrigger: {
                    trigger: ".main",
                    start: "top+=1 top",
                    end: "500px top",
                    scrub: true,
                    pin: true,
                    pinType: "transform"
                },
                y: -50,
                scale: 1,
                opacity: 0,
            });
        });
    }

    return (
        <main ref={lottieContainerRef}>
            {/* <div className="glarePurple"></div>
            <div className="glareBlue"></div> */}
            <div className="animation" >
                <Lottie id="lottie-animation" animationData={groovyWalkAnimation} loop={true} />
                <Orbit3Memoized />
                <Orbit2Memoized />
                <Orbit1Memoized />
                <div className="item">
                    <h1>LAYERGAME</h1>
                    <h2>Blurring the lines between Web2 and Web3</h2>
                </div>
                <SaturnMemoized />
                <PurplePlanetMemoized />
            </div>
        </main>
    );
};

export default Main;