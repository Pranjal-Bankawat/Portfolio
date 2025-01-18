import styles from './LandingPageMyWork.module.css';

const ProjectMetadata = () => {
    return (
        <>
            <div className={styles.ProjectMetadataType}>
                <div>Type</div>
                <div>Desktop App</div>
            </div>
            <div className={styles.ProjectMetadataYear}>
                <div>Year</div>
                <div>2024</div>
            </div>
        </>
    )
};

export default ProjectMetadata;