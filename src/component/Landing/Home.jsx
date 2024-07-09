import Navbar from '../Header/Navbar';
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import '../../style.css';

function Home() {

  
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }


  return (
    <>
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <Navbar />
      <div className='overlaypattern absolute top-20 left-1/2 transform -translate-x-1/2'></div> 
    <img className='relative transform lg:translate-y-0 mx-auto z-10 lg:h-full md:h-4/5 max-md:h-3/5 max-md:translate-y-2/3 md:translate-y-1/4 max-sm:h-1/2 max-sm:translate-y-full' src="https://res.cloudinary.com/dz0h00nh2/image/upload/v1720254455/xw7lqpwwrh33zcoyvrqx.png" />


      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText} className='font-face-gm selection:bg-[#386661] selection:text-[#fff]'>SEPTRINO MAHARDIKA</p>
          <p ref={secondText} className='font-face-gm selection:bg-[#386661] selection:text-[#fff]'>SEPTRINO MAHARDIKA</p>
        </div>
      </div>


      <div data-scroll data-scroll-speed={0.5} className={styles.description}>
        <svg  width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="#080808"/>
        </svg>
        <p className='selection:bg-[#386661] selection:text-[#fff]'>Freelance</p>
        <p className='selection:bg-[#386661] selection:text-[#fff]'>UI/UX</p>
      </div>
    </motion.main>

    </>
  )
}

export default Home
