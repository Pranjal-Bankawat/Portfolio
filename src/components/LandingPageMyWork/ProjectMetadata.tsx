import styles from './LandingPageMyWork.module.css';

const ProjectMetadata = () => {
    return (
        <>
            <div className={styles.ProjectMetadataType}>
                <p className={styles.ProjectMetadataTitle}>Type</p>
                <p className={styles.ProjectMetadataText}>Desktop App</p>
            </div>
            <div className={styles.ProjectMetadataYear}>
                <p className={styles.ProjectMetadataTitle}>Year</p>
                <p className={styles.ProjectMetadataText}>2024</p>
            </div>
            <div className={styles.ProjectMetadataEvent}>
                <p className={styles.ProjectMetadataTitle}>Event</p>
                <p className={styles.ProjectMetadataText}>Side Project</p>
            </div>
        </>
    )
};

export default ProjectMetadata;