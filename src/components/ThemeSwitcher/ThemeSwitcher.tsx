import { useEffect, useState } from "react"
import { useTheme } from './../../contexts/ThemeContext';
import styles from "./themeswitcher.module.css"

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme()
    const [hoverImg, setHoverImg] = useState('bluecircle.png')

    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode'
    }, [theme])

    const themeClass = styles[`${theme}-mode`] as keyof typeof styles

    return (
        <div className={styles.container}>
            <img src="/sun.png" className={styles.img} />
            <button className={styles.rectangle} onMouseOver={() => setHoverImg('hoverbluecircle.png')} onMouseOut={() => setHoverImg('bluecircle.png')} onClick={toggleTheme}>
                <img src="/Rectangle.png" className={styles.rectangleImg} />
                <img src={`/${hoverImg}`} className={`${styles.blueCircle} ${themeClass}`} />
            </button>
            <img src="/moon.png" className={styles.img} />
        </div >
    )
}

export default ThemeSwitcher