import Header from './../components/Header/Header'
import SearchBox from './../components/SearchBox/SearchBox'
import JobCard from '../components/JobCard/JobCard'
import Button from '../components/Button/Button'
import styles from './../styles/home.module.css'
import useJobData from '../hooks/useJobData'
import useCompanyData from '../hooks/useCompanyData'

const Home: React.FC = () => {
    const { jobs } = useJobData();

    const { companies, isLoading } = useCompanyData();

    if (isLoading) {
        console.log("Carregando");
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
                    const { mode, title, country, creationDate, company: companyId } = job
                    const companyDetails = companies?.find(comp => comp.id === companyId);

                    if (!companyDetails) throw new Error("Deu ruim");

                    const { imagePath, name } = companyDetails
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