import { useCallback, useEffect, useRef, useState } from "react";
import "./Projects.css";
import { gsap } from 'gsap';
import ProjectCard from "./projectCard/ProjectCard";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [sliderOffset, setSliderOffset] = useState(0);

  const onMouseEnterGood = useCallback(() => {
    const currentOffset = sliderOffset;
    const newOffset = currentOffset === 0 ? -100 : 0;
    setSliderOffset(newOffset);

    gsap.to('.card__container', {
      x: newOffset + '%',
      duration: 0.5,
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    // Блокируем вертикальный скролл
    document.body.style.overflowY = 'hidden';
  }, [sliderOffset]);

  const onMouseLeave = useCallback(() => {
    // Восстанавливаем вертикальный скролл
    document.body.style.overflowY = 'auto';
  }, []);

  useEffect(() => {
    return () => {
      // Восстанавливаем вертикальный скролл при размонтировании компонента
      document.body.style.overflowY = 'auto';
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="wrapper" onMouseEnter={onMouseEnterGood} onMouseLeave={onMouseLeave}>
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