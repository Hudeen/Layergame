import { useCallback, useEffect, useRef, useState } from "react";
import "./Projects.css";
import { gsap } from 'gsap';
import ProjectCard from "./projectCard/ProjectCard";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  useEffect(() => {
    gsap.to('.card__container', {
      x: -1000, // Adjust the value as per your requirement
      duration: 10, // Adjust the duration as per your requirement

      ease: 'none', // Linear easing
      scrollTrigger: {
        trigger: '.card__container',
        start: 'top center', // Adjust the start position as per your requirement
        end: 'bottom center', // Adjust the end position as per your requirement
        scrub: true, // Smooth scrubbing
        markers: true, // Add markers
      },
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="divider"></div>
      <p className="title">
        Team Project
      </p>
      <div className="card__container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;