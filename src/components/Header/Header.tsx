import styles from "./header.module.css"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img src="/triangle1.png" className={styles.triangle} />
            <img src="/triangle2.png" className={styles.triangle2} />
            <img src="/triangle3.png" className={styles.triangle3} />
            <div className={styles.container}>
                <Link to='/' className={styles.logoContainer}>
                    <h1 className={styles.h1}>
                        devjobs
                    </h1>
                </Link>
                <div className={styles.themeSwitcher}>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header