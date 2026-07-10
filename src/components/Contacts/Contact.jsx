import React from 'react'

import styles from "./Contact.module.css";
import emailImg from "../../assets/mail.png";
import linkedImg from "../../assets/linkedin.png";
import githubImg from "../../assets/github.png";


export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img 
              className={emailImg} 
              src={emailImg}
              alt="mail"                   
            />
            <a href="mailto:francis256james@gmail.com">francis256james@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img 
              className={emailImg} 
              src={linkedImg}
              alt="linkedin"                   
            />
            <a href="https://www.linkedin.com/frankjames256">linkedin.com/FrankJames</a>
        </li>
        <li className={styles.link}>
          <img 
              className={emailImg} 
              src={githubImg}
              alt="github"                   
            />
            <a href="https://github.com/FrancoJame">Github.com/FrancoJame</a>
        </li>
      </ul>
  </footer>
 
}


