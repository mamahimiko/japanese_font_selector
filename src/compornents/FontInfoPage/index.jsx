import { useState } from "react"
import styles from "./fontInfoPage.module.css"
import CardCompornent from "../Card"
import { fontList } from "../../../data/data"
import { useCaseList } from "../../../data/data"
import Tags from "../Tags"


const FontInfoPage = () => {
    const [showFontCard, setShowFontCard] = useState([])
    console.log(showFontCard)

    const toggleTag = (tag) => {
        if (tag === "all") {
            setShowFontCard((tagList) => {
                return tagList.length === 0 ? ['none'] : []
            })
        } else {
            setShowFontCard((tags) => {
                const filtered = tags.filter(tagList => tagList !== 'none');
                return filtered.includes(tag)
                    ? filtered.filter(tagList => tagList !== tag)
                    : [...filtered, tag];
            });
        }
    }

    const filteredCard = showFontCard.length === 0
        ? fontList
        : fontList.filter(font =>
            showFontCard.some((tag) => font.useCase.includes(tag))
        )


    return (
        <div className="page">
            <p>Here is Font Info Page</p>
            <div className={styles.tagArea}>
                {useCaseList.map((usecase) =>
                    <Tags
                        key={usecase}
                        useCaseTitle={usecase}
                        updateFunction={toggleTag}
                        isSelected={showFontCard.includes(usecase)}
                    />)}
            </div>
            <div className={styles.cardContainer}>
                {filteredCard.map((font) => (
                    <CardCompornent key={font.id} fontInfo={font} />
                ))}
            </div>
        </div >
    )

}

export default FontInfoPage