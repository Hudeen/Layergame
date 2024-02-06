import "./Projects.css";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import ProjectCard from "./projectCard/ProjectCard";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.to('.card__container', {
      scrollTrigger: {
        trigger: '.card__container',
        start: 'top center-=220',
        end: 'bottom+=800 center',
        scrub: true,
        pin: ".wrapper",
        toggleActions: 'restart none none reverse',
        pinType: "transform"
      },
      x: -2500
    });

    const progressValue = document.querySelector('.progress-value');
    gsap.to(progressValue, {
      scrollTrigger: {
        trigger: '.card__container',
        start: 'top center-=200',
        end: 'bottom+=800 center',
        scrub: 1,
      },
      width: "100%",
    });


  }, []);

  return (
    <div className="wrapper">
      <div className="progress">
        <div className="progress-value"></div>
      </div>
      <p className="title">
        Team Project
      </p>
      <div className="card__container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;