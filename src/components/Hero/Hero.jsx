import React from "react";
import styles from  "./Hero.module.css";

import heroImg from "../../assets/hero.png";
export const Hero = () => {
    return (  
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Frank James</h1>
                <p className={styles.description}>
                    I'm a Fullstack Developer with 2 years of experience using React and NodeJS. 
                    Reach out if you would like to help you more
                    </p>
                <a href="mailto:francis256@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img 
                        className={styles.heroImg} 
                        src={heroImg}
                       alt="hero"
                       
                     />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};  