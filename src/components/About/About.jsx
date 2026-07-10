import React from 'react'
import styles from  "./About.module.css";

import aboutImg from "../../assets/about.png";
import cursorImg from "../../assets/cursor1.png";
import serverImg from "../../assets/server.png";
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                 <img 
                     className={styles.aboutImage} 
                     src={aboutImg}
                    alt="about"
                                       
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img 
                     className={styles.cursorImg} 
                     src={cursorImg}
                    alt="cursor"
                                       
                />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a frontend developer with experience  in building responsiveand optimized sites
                    </p>
                </div>
                    </li>
                     <li className={styles.aboutItem}>
                        <img 
                     className={styles.cursorImg} 
                     src={serverImg}
                    alt="server"
                                       
                />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                        I have experience developing fast and optimised back-end systems and APIs
                    </p>
                </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                     className={styles.serverImg} 
                     src={cursorImg}
                    alt="UI"
                                       
                />
                <div className={styles.aboutItemText}>
                    <h3>UI Developer</h3>
                    <p>
                        I have designed multiple landing pages and have created systems as well
                    </p>
                </div>
                    </li>
                    
                    
                </ul>
            </div>
        </section>
    )
}
