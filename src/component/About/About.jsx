import '../../style.css';
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp } from './animation';

export default function About() {

    const phrase = "Hi, I'm interested in visuals, art and I'd love to help you create a unique art design. ";
    const description = useRef(null);
    const isInView = useInView(description)

    return (
        <>

            <div className='overlaypattern2 absolute border-t-0 border-b-0 translate-y-12 left-1/2 transform -translate-x-1/2'></div> 
            <p className='text-white font-semibold text-3xl relative top-20 lg:pl-16 md:pl-10 max-sm:pl-7 max-md:pl-10 selection:bg-[#386661] selection:text-[#fff]'>About</p>
                
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p className=' selection:bg-[#386661] selection:text-[#fff]'>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>

        <div className='grid lg:grid-cols-3 justify-between md:gap-y-20 max-sm:gap-y-16 max-md:gap-y-20 md:grid-cols-2 max-sm:grid-cols-1  '>
            <div>
                <span className={styles.subTittle}>. Experience</span>
                <h1 className={styles.isi}>4+ Projects</h1>
            </div>
            <div>
                <span className={styles.subTittle}>. District</span>
                <h1 className={styles.isi}>Malang</h1>
            </div>
            <div>
                <span className={styles.subTittle}>. Location </span>
                <h1 className={styles.isi}>Indonesia</h1>
            </div>
        </div>
            
            </div>
        </div>

        </>
    )
}
