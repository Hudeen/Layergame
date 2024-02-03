import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import PurplePlanet from "../../shared/assets/planets/PurplePlanet";
import "./Orbit.css";

const Orbit: React.FC = () => {

  gsap.set('#galaxy', { transformStyle: "preserve-3d", rotationX: 65, rotationY: 20 });
  gsap.set('.orbit', { transformStyle: "preserve-3d" });
  gsap.set('.planet', { transformStyle: "preserve-3d" });

  
  const earthTimeline = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
  
  useGSAP(() => {
      earthTimeline.fromTo('#earth', 12.44, { rotation: 0 }, { rotation: -360 }, 0)
          .fromTo('#earth .pos', 12.44, { rotation: 0, rotationY: 0, rotationX: -70 }, { rotation: 360, rotationY: 0, rotationX: -70 }, 0);
  }, [earthTimeline]);

  return (
      <div className='universe' id="universe">
          <div id="galaxy">
              <div id="earth" className="orbit">
                  <div className="pos">
                      <div className="planet"><PurplePlanet/></div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Orbit;