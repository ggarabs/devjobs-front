import Header from "../components/Header/Header";
import LargeButton from "../components/LargeButton/LargeButton";
import styles from "./../styles/jobpage.module.css";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import { useParams } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import useJobData from "../hooks/useJobData";
import getTimeAgo from "../utils/TimeService";

const JobPage: React.FC = () => {
    const { theme } = useTheme();
    const { jobs, isLoading } = useJobData();
    const { jobId } = useParams();

    if (isLoading) {
        console.log("Carregando");
        return <h1>TÁ CARREGANDO AINDA</h1>
    }

    if (!Array.isArray(jobs)) throw new Error("Deu merda");
    if (!jobId) throw new Error("Deu mais merda ainda");

    const currJob = jobs[+jobId];

    const {
        mode,
        title,
        country,
        jobDescription,
        generalRequirements,
        generalAssignments,
        requirements,
        assignments,
        creationDate
    } = currJob || {};

    const { name, website, imagePath, largeImagePath } = currJob.company || {};

    const themeClass = styles[`${theme}-mode`] as keyof typeof styles;

    return (
        <div className={styles.jobPageComponent}>
            <header className={styles.headerContainer}>
                <Header />
                <div className={styles.companyCardContainer}>
                    <CompanyCard
                        name={name || ""}
                        website={website || ""}
                        imagePath={imagePath || ""}
                        largeImagePath={largeImagePath || ""}
                    />
                </div>
            </header>
            <main className={`${styles.card} ${themeClass}`}>
                <div className={styles.applicationMainInfo}>
                    <div className={styles.generalInfo}>
                        <div className={styles.jobMainInformation}>
                            <div className={styles.jobInformation}>
                                <p className={styles.publicationTime}>
                                    {getTimeAgo(new Date(creationDate))}
                                </p>
                                <div className={styles.jobModeContainer}>
                                    <img src="/littleBallChar.png" />
                                    <p className={styles.jobMode}>{mode}</p>
                                </div>
                            </div>
                            <h2 className={styles.jobTitle}>{title}</h2>
                            <p className={styles.jobLocation}>{country}</p>
                        </div>
                        <div className={styles.cardButton}>
                            <LargeButton text="Apply Now" />
                        </div>
                    </div>
                </div>
                <div className={`${styles.jobDescription} ${themeClass}`}>
                    <p>{jobDescription}</p>
                </div>
                <div className={styles.requirementsSection}>
                    <div className={styles.mainRequirementsContainer}>
                        <h2 className={styles.jobTitle}>Requirements</h2>
                        <p
                            className={`${styles.jobRequirements} ${themeClass}`}
                        >
                            {generalRequirements}
                        </p>
                    </div>
                    {requirements ?
                        <ul className={styles.requirementsList}>
                            {requirements?.map((requirement, index) => (
                                <li
                                    key={index.toString()}
                                    className={styles.listItem}
                                >
                                    <img
                                        src="/oval.png"
                                        className={styles.listItemPoint}
                                    />
                                    <p
                                        className={`${styles.jobRequirements} ${themeClass}`}
                                    >
                                        {requirement.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        : <></>}
                </div>
                <div className={styles.assignmentsContainer}>
                    <div className={styles.mainAssignmentsContainer}>
                        <h2 className={styles.jobTitle}>What You Will Do</h2>
                        <p
                            className={`${styles.jobRequirements} ${themeClass}`}
                        >
                            {generalAssignments}
                        </p>
                    </div>
                    {assignments ?
                        <ol className={styles.assignmentsList}>
                            {assignments?.map((assignment, index) => (
                                <li
                                    key={index.toString()}
                                    className={styles.listItem}
                                >
                                    <p className={styles.numberList}>
                                        {index + 1}
                                    </p>
                                    <p
                                        className={`${styles.jobRequirements} ${themeClass}`}
                                    >
                                        {assignment.description}
                                    </p>
                                </li>
                            ))}
                        </ol> : <></>}
                </div>
            </main>
            <footer className={`${styles.applyButtonContainer} ${themeClass}`}>
                <div className={`${styles.footerJobContainer}`}>
                    <div
                        className={`${styles.footerJobDescription} ${themeClass}`}
                    >
                        <h2 className={`${styles.footerJobTitle} ${themeClass}`}>{title}</h2>
                        <p
                            className={`${styles.footerCompanyName} ${themeClass}`}
                        >
                            {name}
                        </p>
                    </div>
                    <div
                        className={`${styles.footerButtonContainer} ${themeClass}`}
                    >
                        <LargeButton text="Apply Now" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default JobPage;
