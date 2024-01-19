import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import groovyWalkAnimation from "./bleat.json";
import "./main.css";
import text from '../../assets/LAYERGAME.svg'

const Main: React.FC = () => {
    useEffect(() => {
        const newGradient = `
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgba(92, 107, 184, 0.8);stop-opacity:1" />
            <stop offset="61.5%" style="stop-color:rgba(92, 107, 184, 0);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(92, 107, 184, 0);stop-opacity:1" />
          </linearGradient>
        `;

        const elementsToChange = document.querySelectorAll("#lottie-animation svg");
        elementsToChange.forEach((element) => {
            if (element) {
                const defs = element.querySelector("defs");
                if (!defs) {
                    element.insertAdjacentHTML("afterbegin", "<defs></defs>");
                }
                element.querySelector("defs")?.insertAdjacentHTML("afterbegin", newGradient);
                element.querySelector("path")?.setAttribute("stroke", "url(#grad)");
            }
        });

        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#lottie-animation", {
            opacity: 0,
            scale: 1.5,
            duration: 0.2,
            scrollTrigger: {
                trigger: "#lottie-animation",
                start: "-50px top",
                end: "bottom center",
                scrub: true,
                markers: true
            },
        });
    }, []);

    return (
        <div className="main">
            <div id="lottie-animation">
                <Lottie className="planet1" animationData={groovyWalkAnimation} loop={true} />
                <Lottie className="planet2" animationData={groovyWalkAnimation} loop={true} />
                <Lottie className="planet3" animationData={groovyWalkAnimation} loop={true} />
            </div>
            <div className="main__text">
                <h1 className="main__title">LAYERGAME</h1>
                <h2>Blurring the lines between Web2 and Web3</h2>
            </div>
        </div>
    );
};

export default Main;


