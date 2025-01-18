import styles from './LandingPageMyWork.module.css';
import Image from 'next/image';

interface TeckStackProps {
    techName: string;
    techLogo: string;
}

const TeckStack: React.FC<TeckStackProps> = ({techName, techLogo}) => {
    return (
        <div className={styles.TechStack}>
            <span><Image src={`/svg/tech_stack/${techLogo}`} alt="ad" height={20} width={20}/></span>
            <span className='m-2'>{techName}</span>
        </div>
    )
};

export default TeckStack;