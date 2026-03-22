import styles from "./header.module.css"
import Logo from "../../assets/mojilab-logo.png"
import Navigation from "../Navigation"

const Header = ({ updateFunction }) => {
    return (
        <div className={styles.header}>
            <div className={styles.titleLogo}>
                <img className={styles.logo} src={Logo} onClick={() => updateFunction(null)}></img>
            </div>
            <Navigation updateFunction={updateFunction} />

        </div>
    )
}

export default Header