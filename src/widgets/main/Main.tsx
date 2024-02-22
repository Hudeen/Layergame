
import "./main.scss"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import React, { useEffect, useRef } from "react";
import groovyWalkAnimation from "./animation.json";
import Saturn from "../../shared/assets/planets/Saturn/Saturn";
import PurplePlanet from "../../shared/assets/planets/PurplePlanet/PurplePlanetMain";

const Main: React.FC = () => {
    const lottieContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const newGradient = `
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(92, 107, 184, 0.8);stop-opacity:1" />
          <stop offset="61.5%" style="stop-color:rgba(92, 107, 184, 0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(92, 107, 184, 0);stop-opacity:1" />
        </linearGradient>
      `;

        const elementsToChange = lottieContainerRef.current!.querySelectorAll(
            "#__lottie_element_65, #__lottie_element_79, #__lottie_element_51"
        );

        if (elementsToChange) {
            elementsToChange.forEach((element) => {
                if (element) {
                    const defs = element.querySelector("defs");
                    if (!defs) {
                        element.insertAdjacentHTML("afterbegin", "<defs></defs>");
                    }
                    element.querySelector("defs")!.insertAdjacentHTML("afterbegin", newGradient);
                    element.querySelectorAll("path").forEach((path) =>
                        path.setAttribute("stroke", "url(#grad)")
                    );
                }
            });
        }

    }, []);

    if (window.innerWidth > 1023) {
        useGSAP(() => {
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

            <div className="glarePurple"></div>
            <div className="glareBlue"></div>
            <div className="animation" >

                <Lottie className="animation" id="lottie-animation" animationData={groovyWalkAnimation} loop={true} />
                <div className="item">
                    <h1>LAYERGAME</h1>
                    <h2>Blurring the lines between Web2 and Web3</h2>
                </div>
                <Saturn />
                <PurplePlanet />
            </div>
        </main>
    );
};

export default Main;