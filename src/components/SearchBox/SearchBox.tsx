import { useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from "./searchbox.module.css"

const SearchBox: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { theme } = useTheme()

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        alert(`Você pesquisou: ${inputRef.current?.value}`)
    }

    const themeClass = styles[`${theme}-mode`] as keyof typeof styles
    const filterImg = theme === 'light' ? 'greyFilter.png' : 'whiteFilter.png'

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={`${styles.container} ${themeClass}`}>
                <div className={`${styles.titleContainer} ${themeClass}`}>
                    <div className={styles.magnifierContainer}>
                        <img src="blueMagnifier.png" className={styles.magnifierImg} />
                    </div>
                    <input type="text" ref={inputRef} placeholder='Filter by title...' className={`${styles.input} ${themeClass}`} />
                </div>
                <div className={`${styles.locationContainer} ${themeClass}`}>
                    <div className={styles.pinContainer}>
                        <img src="location.png" className={styles.pinImg} />
                    </div>
                    <input type="text" ref={inputRef} placeholder='Filter by location...' className={`${styles.input} ${themeClass}`} />
                </div>
                <div className={styles.fullTimeModeContainer}>
                    <label htmlFor="fullTime" className={styles.fullTimeCheckboxContainer}>
                        <div className={styles.checkImgContainer}>
                            <input type="checkbox" id="fullTime" ref={inputRef} placeholder='Filter by Title...' className={`${styles.checkbox} ${themeClass}`} />
                        </div>
                        <p className={`${styles.label} ${themeClass}`}>Full Time</p>
                    </label>
                </div>
                <img src={filterImg} className={styles.filter} />
                <button type="submit" className={styles.button}>
                    <img src="magnifier.png" className={styles.img} />
                    <p className={styles.buttonLabel}>Search</p>
                </button>
            </div>
        </form>
    )
}

export default SearchBox;