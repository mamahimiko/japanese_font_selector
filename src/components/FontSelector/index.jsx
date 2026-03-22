import { useState } from "react"
import styles from "./fontSelector.module.css"
import TestArea from "../TestArea"
import FontTabs from "../FontTabs"
import FontButtonContainer from "../FontButtonContainer"


const genres = [
    "Gothic", "Mincho", "Pop", "Hand Writing", "Cool"
]

const FontSelector = () => {
    const [showFont, setShowFont] = useState(null)

    return (
        <div className={styles.FontSelector}>
            <div className={styles.pageTitle}>
                <h2>Explore & Experiment with Japanese Typefaces</h2>
            </div>
            <TestArea fontName={showFont} />
            <p>Choose Font Styles</p>
            <FontTabs labels={genres.map((genre, index) => genre)}>
                {genres.map((genre, index) =>
                    <FontButtonContainer fontfGenre={genre} passFontData={setShowFont} />
                )}
            </FontTabs>
        </div >
    )

}

export default FontSelector