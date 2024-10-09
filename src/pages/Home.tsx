import Header from './../components/Header/Header'
import SearchBox from './../components/SearchBox/SearchBox'
import JobCard from '../components/JobCard/JobCard'
import Button from '../components/Button/Button'
import styles from './../styles/home.module.css'
import useJobData from '../hooks/useJobData'

const Home: React.FC = () => {
    const { jobs } = useJobData();

    return (
        <div className={styles.homePageComponent}>
            <div className={styles.headerContainer}>
                <Header />
                <div className={styles.searchBox}>
                    <SearchBox />
                </div>
            </div>
            <div className={styles.contentContainer}>
                {jobs?.map((job, index) => {
                    const { imagePath, publicationTime, mode, title, company, location } = job
                    return (
                        <JobCard
                            id={index}
                            key={index}
                            imagePath={imagePath}
                            publicationTime={publicationTime || ""}
                            mode={mode}
                            title={title}
                            company={company}
                            location={location}
                        />
                    )
                })}
            </div>
            <Button text='Load More' />
        </div>
    )
}

export default Home