import { useState } from "react";
import styles from "./navigation.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navigation = ({ updateFunction }) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const showMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <nav className={styles.navigation}>
            <div className={styles.hambuger_icon}>
                <GiHamburgerMenu onClick={showMobileMenu} />
            </div>
            <div className={`${styles.menu} ${mobileMenu ? styles.active : " "}`}>
                <div className={styles.close_button}>
                    <RxCross2 onClick={showMobileMenu} />
                </div>
                <ul>
                    <li onClick={() => updateFunction(null)}>Home</li>
                    <li onClick={() => updateFunction("fontInfo")}>Font List</li>
                    <li onClick={() => updateFunction("tips")}>Tips</li>
                    <li onClick={() => updateFunction("contact")}>Contact</li>
                </ul>
            </div>
        </nav>

    )
}

export default Navigation