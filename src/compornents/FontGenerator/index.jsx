import { useState } from "react"
import styles from "./fontGenerator.module.css"
import TestArea from "../TestArea"
import FontTabs from "../FontTabs"
import FontButtonContainer from "../FontButtonContainer"


const genres = [
    "Gothic", "Mincho", "Pop", "Hand Writing", "Cool"
]

const FontGenerator = () => {
    const [showFont, setShowFont] = useState(null)

    return (
        <div className="page">

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

export default FontGenerator