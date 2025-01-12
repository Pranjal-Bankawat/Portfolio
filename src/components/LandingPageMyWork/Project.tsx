import ProjectMetadata from "./ProjectMetadata";
import Image from "next/image"; 
import styles from './LandingPageMyWork.module.css';

const Project = () => {
    return (
        <div className={styles.Project}>
            <div className={styles.ProjectTitle}>
                <div className={styles.ProjectName}>DASH</div>
                <div className={styles.ProjectType}>Desktop App</div>
            </div>
            <div className={styles.ProjectImage}>
                <Image src="/image/project.png" alt="DASH" layout="fill" objectPosition="center" />
            </div>
            <div className={styles.ProjectInfo}>
                <div className={styles.ProjectMetadata}>
                    <ProjectMetadata />
                </div>
                <div className={styles.ProjectDescription}>
                    <p>Description</p>
                    <p>DASH - Distributed Adaptive Serverless Hosting offers a peer to peer, cost-effective, and efficient alternative for hosting serverless functions. It delivers a streamlined solution, designed with developers in mind providing simplicity and effectiveness without compromising performance.</p>
                </div>
                <div className={styles.ProjectCTA}></div>
            </div>
        </div>
    )
};

export default Project;