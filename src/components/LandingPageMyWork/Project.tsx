import ProjectMetadata from "./ProjectMetadata";
import Image from "next/image"; 
import styles from './LandingPageMyWork.module.css';

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