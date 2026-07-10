import React from 'react';
import styles from "./Experience.module.css";

import skillsData from "../../data/skills.json";
import historyData from "../../data/history.json"; // 1. Import your history data

// Skill Icons
import htmlIcon from "../../skills/html.png";
import cssIcon from "../../skills/css.png";
import reactIcon from "../../skills/react.png";
import nodeIcon from "../../skills/nodejs.png";
import djangoIcon from "../../skills/django.png";
import pythonIcon from "../../skills/python.png";

// 2. Import your Company Icons from the skills folder
import codeIcon from "../../skills/code.png";
import stratcomIcon from "../../skills/stratcom.png";

const imageMapper = {
    "HTML": htmlIcon,
    "CSS": cssIcon,
    "REACT": reactIcon,
    "NODE JS": nodeIcon,
    "DJANGO": djangoIcon,
    "PYTHON": pythonIcon,

    "CODE": codeIcon,
    "STRATCOM": stratcomIcon
};

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
              
                <div className={styles.skills}>
                    {skillsData.map((skill, id) => {
                        return (
                            <div  className={styles.skill} key={id}>
                                <div className={styles.skillImageContainer}>
                                <img src={imageMapper[skill.title]} alt={skill.title} />
                                <p>{skill.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* History/Work Experience List */}
                <ul className={styles.history}>
                    {historyData.map((historyItem, id) => {
                        return (
                            <li className={styles.historyItem} key={id}>
                                {/* Uses the mapper to pull the imported company icon */}
                                <img src={imageMapper[historyItem.imagesrc]} alt={historyItem.orginisation} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.orginisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experience.map((desc, descId) => {
                                            return <li key={descId}>{desc}</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>

                        );
                    })}
                 </ul>
                
             </div>
        </section>
    );
};