"use client";

import ProjectMetadata from "./ProjectMetadata";
import Image from "next/image"; 
import styles from './LandingPageMyWork.module.css';
import { useEffect } from "react";
import anime from "animejs";

interface ProjectDataProps {
    name: string;
    type: string;
    event: string;
    year: string;
    description: string;
    techUsed: string[];
}

interface ProjectProps {
    projectData: ProjectDataProps;

}

const Project: React.FC<ProjectProps> = ({ projectData }) => {

    useEffect(() => {
        animateProjectOnScroll();
    });

    const animateProjectOnScroll = () => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                anime({
                  targets: entry.target,
                  opacity: [0, 1],
                  scale: [0.5, 1],
                  duration: 2000,
                  easing: 'easeOutExpo',
                });

                console.log('project that entered the viewport: ', entry);
          
                observer.unobserve(entry.target);
              }
            });
        }, {
            threshold: 0.4,
        });

        const projectElements = document.querySelectorAll(`.${styles.Project}`);
        if (projectElements) {
            projectElements.forEach((element) => observer.observe(element));
        }
    }

    return (
        <div className={styles.Project}>
            <div className={styles.ProjectTitle}>
                <div className={styles.ProjectName}>{projectData.name}</div>
                <div className={styles.ProjectType}>{projectData.type}</div>
            </div>
            <div className={styles.ProjectImage}>
                <Image src="/image/project.png" alt="DASH" fill objectPosition="center" />
            </div>
            <div className={styles.ProjectInfo}>
                <div className={styles.ProjectMetadata}>
                    <ProjectMetadata />
                </div>
                <div className={styles.ProjectDescription}>
                    <p className={styles.ProjectDescriptionTitle}>Description</p>
                    <p className={styles.ProjectDescriptionText}>{projectData.description}</p>
                </div>
                <div className={styles.ProjectCTA}>
                    <div className={styles.ProjectCTACover}>
                        <Image src="/svg/MyWorkCTA.svg" alt="arrow"  fill objectPosition="center"  />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Project;