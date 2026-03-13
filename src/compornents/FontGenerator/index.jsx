import { useState } from "react"
import styles from "./fontGenerator.module.css"
import TestArea from "../TestArea"
import FontButtonContainer from "../FontButtonContainer"


const genres = [
    "Gothic", "Mincho", "Pop", "Hand Writing", "Cool"
]

const FontGenerator = () => {
    const [showFont, setShowFont] = useState(null)
    return (
        <div className="page">

            <TestArea fontName={showFont} />

            <div className={styles.buttonContainerWrapper}>
                {genres.map((genre, index) =>
                    <FontButtonContainer fontfGenre={genre} passFontData={setShowFont} />
                )}
            </div>
        </div>
    )

}

export default FontGenerator