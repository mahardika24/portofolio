'use client';
import {  useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

// import "../../styles.css";

function Navbar() {

    const [isActive, setIsActive] = useState(false);
    const button = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])


  return (
    <>
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.name}>
                    <p className={styles.s}>S</p>
                    <p className={styles.m}>M</p>
                    <p className={styles.eptrino}>eptrino</p>
                    <p className={styles.ahardika}>ahardika</p>
                </div>
            </div>

            <div className={styles.nav}>
                <Magnetic>
                    <div className={styles.el}>
                        <a>About</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a>Work</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a>Contact</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
        </div>

        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
     

    </>
  );
}

export default Navbar;
