import styles from "./companycard.module.css";
import { useTheme } from "../../contexts/ThemeContext";

interface CompanyProps {
    imagePath: string;
    largeImagePath: string;
    name: string;
    website: string;
}

const CompanyCard = ({ name, website, imagePath, largeImagePath }: CompanyProps) => {
    const { theme } = useTheme();

    const themeClass = styles[`${theme}-mode`] as keyof typeof styles;

    return (
        <div className={styles.container}>
            <img src={imagePath} className={styles.logo} />
            <img src={largeImagePath} className={styles.largeLogo} />
            <div className={`${styles.card} ${themeClass}`}>
                <div className={styles.companyInformation}>
                    <h1 className={styles.jobName}>{name}</h1>
                    <p className={styles.jobWebsite}>{website}</p>
                </div>
                <a href={`https://${website}`}>
                    <button className={`${styles.button} ${themeClass}`}>
                        Company Site
                    </button>
                </a>
            </div>
        </div>
    );
};

export default CompanyCard;
