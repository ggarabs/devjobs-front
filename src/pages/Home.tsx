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
                    const { imagePath, mode, title, company, location, creationDate } = job
                    return (
                        <JobCard
                            id={index}
                            key={index}
                            imagePath={imagePath}
                            mode={mode}
                            title={title}
                            company={company}
                            location={location}
                            creationDate={new Date(creationDate)}
                        />
                    )
                })}
            </div>
            <Button text='Load More' />
        </div>
    )
}

export default Home