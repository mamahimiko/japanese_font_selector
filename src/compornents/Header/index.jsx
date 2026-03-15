import styles from "./header.module.css"
import { FaRegHeart } from "react-icons/fa";

const Header = ({ updateFunction }) => {
    return (
        <div className={styles.header}>
            <div className={styles.titleLogo}>
                <h1 onClick={() => updateFunction(null)}>Moji-Labo</h1>
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.menu}>
                    <li onClick={() => updateFunction("fontInfo")}>Fonts</li>
                    <li onClick={() => updateFunction("about")}>About us</li>
                </ul>
            </nav>
            <div className={styles.favIcon}>
                <FaRegHeart />
            </div>
        </div>
    )
}

export default Header