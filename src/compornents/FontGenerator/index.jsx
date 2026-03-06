import { useState } from "react"
import styles from "./fontGenerator.module.css"
import FontButton from "../FontButton"
import FontButtonContainer from "../FontButtonContainer"


const genres = [
    "Gothic", "Mincho", "Pop", "Hand Writing", "Cool"
]

const FontGenerator = () => {
    return (
        <div className="page">
            <div className={styles.viwer}>
                <p>これは日本語のかわいいフォントです。</p>
                <p>This is Japanese lovely fonts.</p>
            </div>
            <div className={styles.buttonContainerWrapper}>
                {genres.map((genre, index) =>
                    <FontButtonContainer fontfGenre={genre} />
                )}
            </div>
        </div>

    )

}

export default FontGenerator