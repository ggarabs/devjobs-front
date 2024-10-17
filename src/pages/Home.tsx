import Header from './../components/Header/Header'
import SearchBox from './../components/SearchBox/SearchBox'
import JobCard from '../components/JobCard/JobCard'
import Button from '../components/Button/Button'
import styles from './../styles/home.module.css'
import useJobData from '../hooks/useJobData'

const Home: React.FC = () => {
    const { jobs, isLoading } = useJobData();

    if (isLoading) {
        return <h1>TÁ CARREGANDO AINDA</h1>
    }

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
                    const { mode, title, country, creationDate } = job
                    const { name, imagePath } = job.company

                    return (
                        <JobCard
                            id={index}
                            key={index}
                            imagePath={imagePath}
                            mode={mode}
                            title={title}
                            company={name}
                            location={country}
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