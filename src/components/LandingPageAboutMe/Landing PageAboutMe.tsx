import styles from './LandingPageAboutMe.module.css';
import Exp from './Exp';

const LandingPageAboutMe = () => {
    return (
        <div className={styles.LandingPageAboutMe}>
            <div className={styles.AboutMe}>
                <span className={styles.FirstPara}>
                    As a final-year undergraduate pursuing a BTech degree in Computer Science and Engineering, I`m actively on the lookout for full-time gigs and freelance projects.
                </span>
                <span  className={styles.SecondPara}>
                    When I`m not working, you`ll catch me watching anime, reading random stuff, or messing with some fun side projects.
                </span>
            </div>
            <div className={styles.Experience}>
                <div className={styles.WorkingExperience}>
                    <p className={styles.ExperienceTitle}>experience</p>
                    <Exp />
                    <Exp />
                    <Exp />
                    <Exp />
                </div>
                <div className={styles.Achievements}>
                    <p className={styles.ExperienceTitle}>awards</p>
                    <Exp />
                    <Exp />
                </div>
            </div>
        </div>
    )
}

export default LandingPageAboutMe;