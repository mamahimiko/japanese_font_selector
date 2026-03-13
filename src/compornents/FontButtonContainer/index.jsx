import styles from "./fontButtonContainer.module.css"
import FontButton from "../FontButton"
import { fontList } from "../../../data/data"


const FontButtonContainer = ({ fontfGenre, passFontData }) => {

    return (
        <div className={styles.fontButtonContainer}>
            <div className={styles.fontButton}>
                {fontList.filter(list => list.genre === fontfGenre)
                    .map((font) =>
                        <FontButton key={font.id} fontName={font.name} passFontData={passFontData} />
                    )
                }
            </div>
        </div>
    )
}

export default FontButtonContainer