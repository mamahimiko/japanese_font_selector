import styles from "./fontButton.module.css"

const FontButton = ({ fontName, passFontData }) => {

    const handleClick = () => {
        passFontData(fontName)
    }

    return (
        <>
            <button
                onClick={handleClick}
                className={styles.fontButton}>
                {fontName}
            </button>
        </>
    )
}

export default FontButton