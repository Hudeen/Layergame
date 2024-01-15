import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

var svg = document.querySelector(".svg");
var container = document.querySelector(".container");

var options = {
    trigger: container,
    start: "-35px",
    markers: true,
    toggleActions: "restart none none reverse",
};

gsap.from(svg, {
    x: -40,
    opacity: 0,
    duration: .4,
    scrollTrigger: options
});

gsap.to(svg, {
    x: 0,
    opacity: 1,
    duration: .4,
    scrollTrigger: options
});