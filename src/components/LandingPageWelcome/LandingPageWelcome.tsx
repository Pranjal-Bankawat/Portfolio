"use client";

import styles from './LandingPageWelcome.module.css';
import { useEffect } from "react";
import anime from 'animejs';

const LandingPageWelcome = () => {

    useEffect(() => {
        console.log('LandingPageWelcome mounted');
        animateTextIn();
    
    }, []);

    const animateTextIn = () => {
        anime({
            targets: `.${styles.Introduction} span`,
            delay: anime.stagger(50,{direction: 'reverse'}),
            easing: 'easeInOutQuad',
            translateY: [100,0],
        });
        console.log(styles.Introduction);
    }
    return (
        <div className={styles.LandingPageWelcome}>
            <div className={styles.HeroTextBox}>
                <span className={styles.Salutation}>Hi,</span>
                <div className={styles.Introduction}>
                    <div><span className='py-1'>I'm Pranjal Bankawat,</span></div>
                    <div><span className='py-1'>a Software Engineer crafting</span></div>
                    <div><span className='py-1'>Digital Experiences</span></div>
                </div>
            </div>
        </div>
    )
};

export default LandingPageWelcome;