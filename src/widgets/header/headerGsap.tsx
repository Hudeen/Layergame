import React, { useEffect } from 'react'; // Импортируем React и хук useEffect
import { gsap } from 'gsap'; // Импортируем библиотеку GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Импортируем плагин ScrollTrigger для GSAP

gsap.registerPlugin(ScrollTrigger); // Используем плагин ScrollTrigger из GSAP

const HeaderGsap: React.FC = () => { // Определяем компонент React с именем HeaderGsap
   useEffect(() => { // Используем хук useEffect для выполнения кода при монтировании компонента
       const svg = document.querySelector(".svg") as HTMLElement;
       const container = document.querySelector(".container") as HTMLElement;

       const options = { // Определяем опции для плагина ScrollTrigger (это делается для того, чтобы не повторять код)
           trigger: container,
           start: "-35px",
         //   markers: true,
           toggleActions: "restart none none reverse",
       };

       gsap.from(svg, { // Создаем первую анимацию при прокрутке вниз для элемента SVG с помощью GSAP
           x: -40,
           opacity: 0,
           duration: .4,
           scrollTrigger: options
       });

       gsap.to(svg, { // Создаем вторую анимацию при прокрутке вверх для элемента SVG с помощью GSAP
           x: 0,
           opacity: 1,
           duration: .4,
           scrollTrigger: options
       });
   }, []); // Хук useEffect будет вызван только один раз, когда компонент впервые отображается

    return ( // Сам html
        <div>
           <div className="container">
              <svg className="svg" width="59" height="50" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path
                    d="M54 1H3.41422L23.1357 20.7215C25.4956 23.0814 25.4762 26.9134 23.0926 29.2494L2.93892 49H54C56.2091 49 58 47.2091 58 45V5C58 2.79086 56.2091 1 54 1Z"
                    stroke="url(#paint0_linear_96_16)" strokeWidth="2" />
                 <path
                    d="M47 31H31C30.45 31 30 30.55 30 30C30 29.45 30.45 29 31 29H47C47.55 29 48 29.45 48 30C48 30.55 47.55 31 47 31ZM47 26H31C30.45 26 30 25.55 30 25C30 24.45 30.45 24 31 24H47C47.55 24 48 24.45 48 25C48 25.55 47.55 26 47 26ZM48 20C48 20.55 47.55 21 47 21H31C30.45 21 30 20.55 30 20C30 19.45 30.45 19 31 19H47C47.55 19 48 19.45 48 20Z"
                    fill="url(#paint1_linear_96_16)" />
                 <defs>
                    <linearGradient id="paint0_linear_96_16" x1="59" y1="0" x2="-3.02193" y2="5.0378"
                       gradientUnits="userSpaceOnUse">
                       <stop stop-color="#30BBEE" />
                       <stop offset="1" stop-color="#C659FC" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_96_16" x1="48" y1="19" x2="28.9965" y2="20.9789"
                       gradientUnits="userSpaceOnUse">
                       <stop stop-color="#30BBEE" />
                       <stop offset="1" stop-color="#C659FC" />
                    </linearGradient>
                 </defs>
              </svg>
           </div>
        </div>
    );
};

export default HeaderGsap;
