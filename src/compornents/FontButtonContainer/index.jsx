import styles from "./fontButtonContainer.module.css"
import FontButton from "../FontButton"
import { fontList } from "../../../data/data"


const FontButtonContainer = ({ fontfGenre }) => {

    return (
        <div className={styles.fontButtonContainer}>
            <h3>{fontfGenre}</h3>
            <div className={styles.fontButton}>
                {fontList.filter(list => list.genre === fontfGenre)
                    .map((font) =>
                        <FontButton key={font.id} fontName={font.name} />
                    )
                }
            </div>
        </div>
    )
}

export default FontButtonContainer