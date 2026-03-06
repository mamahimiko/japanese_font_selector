import styles from "./fontButton.module.css"


const FontButton = ({ fontName }) => {
    return (
        <>
            <button className={styles.fontButton}>{fontName}</button>
        </>
    )
}

export default FontButton