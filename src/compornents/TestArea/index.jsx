import styles from "./testArea.module.css"

const TestArea = ({ fontName }) => {
    return (
        <div className={`${styles.testArea} ${fontName ? styles[fontName.replaceAll(" ", "_")] : ""}`}>
            <p className={styles.japanese_font}>これは日本語のかわいいフォントです。</p>
            <p className={styles.english_font}>This is Japanese lovely fonts.</p>
        </div>

    )
}

export default TestArea