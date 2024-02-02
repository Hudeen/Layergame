import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import groovyWalkAnimation from "./animation.json";
import BluePlanet from "../../shared/assets/planets/BluePlanet";
import PurplePlanet from "../../shared/assets/planets/PurplePlanet";
import "./Main.css";

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

        const elementsToChange = lottieContainerRef.current?.querySelectorAll(
            "#__lottie_element_65, #__lottie_element_79, #__lottie_element_107"
        );

        if (elementsToChange) {
            elementsToChange.forEach((element) => {
                if (element) {
                    const defs = element.querySelector("defs");
                    if (!defs) {
                        element.insertAdjacentHTML("afterbegin", "<defs></defs>");
                    }
                    element.querySelector("defs")?.insertAdjacentHTML("afterbegin", newGradient);
                    element.querySelectorAll("path").forEach((path) =>
                        path.setAttribute("stroke", "url(#grad)")
                    );
                }
            });
        }

        gsap.to(".main", {
            scrollTrigger: {
                trigger: ".main",
                start: "top+=1 top",
                end: "bottom top",
                scrub: true,
                pin: true
            },
            y: -150,
            scale: 1.5,
            opacity: 0
        });
    }, []);

    return (
        <div className="main" ref={lottieContainerRef}>
            <div className="glare_purple"></div>
            <div className="glare_blue"></div>
            <div id="lottie-animation">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
                <div className="main__text">
                    <h1 className="main__title">LAYERGAME</h1>
                    <h2 className="main__h2">Blurring the lines between Web2 and Web3</h2>
                </div>
                <BluePlanet />
                <PurplePlanet/>
            </div>

        </div>
    );
};

export default Main;