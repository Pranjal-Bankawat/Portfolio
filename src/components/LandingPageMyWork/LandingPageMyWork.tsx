import styles from './LandingPageMyWork.module.css';
import Project from './Project';
import TeckStack from './TechStack';

const LandingPageMyWork = () => {
    return (
        <div className={styles.SelectedWork}>
            <p className={styles.SectionTitle}>Some of my work...</p>
            <div className={styles.ProjectnStack}>
                <Project />
                <div className={styles.TeckStacks}>
                    <p>Tech Stacks</p>
                    <TeckStack />
                </div>
            </div>
        </div>
    )
};

export default LandingPageMyWork;