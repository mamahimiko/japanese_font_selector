import styles from "./header.module.css"
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.titleLogo}>
                <h1>Moji-Labo</h1>
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.menu}>
                    <li><a href="#">Fonts</a></li>
                    <li><a href="#">Info</a></li>
                </ul>
            </nav>
            <div className={styles.favIcon}>
                <FaRegHeart />
            </div>
        </div>
    )
}

export default Header