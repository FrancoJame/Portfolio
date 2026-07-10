import React from "react";

import styles from "./ProjectCard.module.css";
import projectImg from "../../assets/project1.PNG";
import projectImg1 from "../../assets/project2.PNG";
import projectImg2 from "../../assets/project.PNG";



const imageMap = {
    "projectImage": projectImg,
    "projectImage1": projectImg1,
    "projectImage2": projectImg2


};


export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;
    
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageMap[imageSrc]} alt={`Image of ${title}`} />
       <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p> 

        <ul className={styles.skills}>
           {skills.map((skill, id) => (
             <li className={styles.skill} key={id}>{skill}</li>
            ))}
            </ul>   
            <div className={styles.links}>
              <a className={styles.link} href={demo}>Demo</a>
              <a className={styles.link} href={source}>Source</a>
            </div>
        </div>
  );
};
