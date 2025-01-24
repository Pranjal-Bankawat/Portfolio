"use client"

import { useEffect } from 'react';
import styles from './LandingPageMyWork.module.css';
import Project from './Project';
import TechStack from './TechStack';
import anime from 'animejs';

const LandingPageMyWork = () => {

    useEffect(() => {
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
          
                observer.unobserve(entry.target);
              }
            });
        }, {
            threshold: 0.4,
        });

        const projectElements = document.querySelectorAll(`.${styles.TechStacks}`);
        if (projectElements) {
            projectElements.forEach((element) => observer.observe(element));
        }
    },[]);

    const activeSkills = () => {

    }

    const activeProjectsSkills = () => {

    }

    const techStackArr = [
        { "id": "nextjs", "techName": "Next.js", "techLogo": `nextjs.svg` },
        { "id": "angularjs", "techName": "Angular.js", "techLogo": "angular.svg" },
        { "id": "reactjs", "techName": "React.js", "techLogo": "reactjs.svg" },
        { "id": "flutter", "techName": "Flutter", "techLogo": "flutter.svg" },
        { "id": "tailwindcss", "techName": "Tailwind CSS", "techLogo": "tailwind.svg" },
        { "id": "typescript", "techName": "TypeScript", "techLogo": "typescript.svg" },
        { "id": "dotnet", "techName": ".NET", "techLogo": "dotnet.svg" },
        { "id": "python", "techName": "Python", "techLogo": "python.svg" },
        { "id": "stablediffusion", "techName": "Stable Diffusion", "techLogo": "stablediffusion.svg" },
        { "id": "blockchain", "techName": "Blockchain", "techLogo": "blockchain.svg" },
        { "id": "solidity", "techName": "Solidity", "techLogo": "solidity.svg" },
        { "id": "tauri", "techName": "Tauri", "techLogo": "tauri.svg" },
        { "id": "peertopeer", "techName": "Peer to Peer", "techLogo": "peertopeer.svg" },
        { "id": "serverless", "techName": "Serverless", "techLogo": "serverless.svg" },
        { "id": "ipfs", "techName": "IPFS", "techLogo": "ipfs.svg" },
        { "id": "ethereum", "techName": "Ethereum", "techLogo": "ethereum.svg" },
        { "id": "cplusplus", "techName": "C++", "techLogo": "cplusplus.svg" },
        { "id": "java", "techName": "Java", "techLogo": "java.svg" },
        { "id": "csharp", "techName": "C#", "techLogo": "csharp.svg" },
        { "id": "mongodb", "techName": "MongoDB", "techLogo": "mongodb.svg" },
        { "id": "postgresql", "techName": "PostgreSQL", "techLogo": "postgresql.svg" },
        { "id": "mysql", "techName": "MySQL", "techLogo": "mysql.svg" }
    ];

    const projectDataArr = [
        { 
            "name": "DASH",
            "type": "Desktop App", 
            "event": "Side Project", 
            "year": "2024", 
            "description": "DASH - Distributed Adaptive Serverless Hosting offers a peer to peer, cost-effective, and efficient alternative for hosting serverless functions. It delivers a streamlined solution, designed with developers in mind providing simplicity and effectiveness without compromising performance." ,
            "techUsed" : ["nextjs", "tailwindcss", "python", "peertopeer", "tauri", "serverless"],
        },
        { 
            "name": "FLASH DRIVE",
            "type": "Website", 
            "event": "Side Project", 
            "year": "2023", 
            "description": "A Next.js web platform featuring an AI image generator with custom-trained Stable Diffusion model and a few other arcade games. Built with Firebase and EpicRealism image model, it's just a DBMS course project that evolved into a playground for implementing advanced web technologies." ,
            "techUsed" : ["nextjs", "tailwindcss", "python", "peertopeer", "tauri", "serverless"],
        }
    ];

    const techStacks = () => {     
        return techStackArr.map(element => {
            return <TechStack key={element.techName} techName={element.techName} techLogo={element.techLogo} />
        });
    };

    const projects = () => {
        return projectDataArr.map(element => {
            return <Project key={element.name} projectData={element} activeProjectsSkills = {activeProjectsSkills}/>
        });
    }

    return (
        <div className={styles.SelectedWork}>
            <p className={styles.SectionTitle}>Some of my work...</p>
            <div className={styles.ProjectnStack}>
                <div className={styles.Projects}>
                    {projects()}
                </div>
                <div className={styles.TechStacks}>
                    <p className={styles.TechStackTitle}>Tech Stacks</p>
                    <div className='flex flex-wrap gap-3'>
                        {techStacks()}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPageMyWork;