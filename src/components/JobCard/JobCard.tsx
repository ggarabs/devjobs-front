import styles from "./jobcard.module.css"
import { useTheme } from "../../contexts/ThemeContext"
import { Link } from "react-router-dom"
import getTimeAgo from "../../utils/TimeService"

interface JobCardProps {
    id: number,
    imagePath: string,
    mode: string,
    title: string,
    company: string,
    location: string,
    creationDate: Date
}

const JobCard = ({ id, imagePath, mode, title, company, location, creationDate }: JobCardProps) => {
    const { theme } = useTheme()

    const themeClass = styles[`${theme}-mode`] as keyof typeof styles

    return (
        <div className={styles.container}>
            <img src={imagePath} className={styles.logo} />
            <Link to={`/jobs/${id}`} className={`${styles.card} ${themeClass}`}>
                <div className={styles.jobMainInformation}>
                    <div className={styles.jobInformation}>
                        <p className={styles.jobTime}>{getTimeAgo(creationDate)}</p>
                        <div className={styles.jobModeContainer}>
                            <img src="/littleBallChar.png" />
                            <p className={styles.jobMode}>{mode}</p>
                        </div>
                    </div>
                    <h2 className={styles.jobTitle}>{title}</h2>
                    <p className={styles.jobCompany}>{company}</p>
                </div>
                <p className={styles.jobLocation}>{location}</p>
            </Link>
        </div >
    )
}

export default JobCard