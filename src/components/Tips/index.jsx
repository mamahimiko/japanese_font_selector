import { useState } from "react"
import FontTypeCard from "../FontTypeCard"
import styles from "./tips.module.css"
import FontButtonContainer from "../FontButtonContainer"
import { fontTypeList } from "../../../data/data"



const Tips = () => {

    return (
        <div className={styles.FontSelector}>
            <div className={styles.pageTitle}>
                <h2>Tips</h2>
            </div>
            <div>
                <div className={styles.description}>
                    <p>Japanese fonts are typefaces designed to display Japanese characters, including hiragana,
                        katakana, and kanji. Compared to alphabet-based fonts, they handle a much larger number of
                        characters—often thousands to tens of thousands.
                    </p>
                </div>
                <p>There are several main categories:</p>
                <div className={styles.cardContainer}>
                    {fontTypeList.map((font, index) => <FontTypeCard key={index} datas={font} />)}
                </div>

                <div className={styles.description}>
                    <p>In Japanese typography, balancing readability and visual style is especially important.
                        The best font choice depends on the context, such as web design, print, or branding.
                    </p>
                </div>
                <div>
                    <p>Things to keep in mind when using Japanese fonts:</p>
                </div>
                <div className={styles.wrap}>
                    <ul>
                        <li>Character support varies</li>
                        <p>Not all fonts include every kanji, so some characters may not display correctly.</p>

                        <li>File size can be large</li>
                        <p>Because of the vast number of characters, Japanese font files tend to be much heavier, which can impact website performance.</p>

                        <li>Readability is critical</li>
                        <p>Decorative fonts may look appealing but can be difficult to read, especially for longer text.</p>


                        <li>Cultural nuance matters</li>
                        <p>Certain styles can give very specific impressions (traditional, modern, casual, etc.), so choosing the right tone is important.</p>

                    </ul>
                </div>
            </div>
        </div >
    )

}

export default Tips