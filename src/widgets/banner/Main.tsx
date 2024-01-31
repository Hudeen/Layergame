import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import groovyWalkAnimation from "./animation.json";
import "./Main.css";

const Main: React.FC = () => {
    useEffect(() => {
        const newGradient = `
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(92, 107, 184, 0.8);stop-opacity:1" />
          <stop offset="61.5%" style="stop-color:rgba(92, 107, 184, 0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(92, 107, 184, 0);stop-opacity:1" />
        </linearGradient>
      `;

        const elementsToChange = document.querySelectorAll("#__lottie_element_65, #__lottie_element_79, #__lottie_element_107");
        elementsToChange.forEach((element) => {
            if (element) {
                const defs = element.querySelector("defs");
                if (!defs) {
                    element.insertAdjacentHTML("afterbegin", "<defs></defs>");
                }
                element.querySelector("defs")?.insertAdjacentHTML("afterbegin", newGradient);
                element.querySelectorAll("path").forEach(path => path.setAttribute("stroke", "url(#grad)"));
            }
        });

        gsap.registerPlugin(ScrollTrigger);


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".main",
                start: "top+=1 top",
                end: "bottom top",
                scrub: true,
                pin: true,
                immediateRender: true
            }
        });

        tl.to(".main", {
            y: 0,
            scale: 1.6,
            opacity: 0,
        })

        // gsap.to("#lottie-animation", {
        //     y: 0,
        //     opacity: 0,
        //     scale: 1.5,
        //     scrollTrigger: {
        //         trigger: "#lottie-animation",
        //         start: "-50px top",
        //         end: "bottom center",
        //         scrub: true,
        //         pin: true,
        //         markers: true
        //     }
        // });

    }, []);

    return (
        <div className="main">
            <div className="main__text">
                <h1 className="main__title">LAYERGAME</h1>
                <h2 className="main__h2">Blurring the lines between Web2 and Web3</h2>
            </div>
            <div id="lottie-animation">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Main;


