import styles from "./testArea.module.css"

const TestArea = ({ fontName }) => {
    return (
        <div className={`${styles.testArea} ${fontName ? styles[fontName.replaceAll(" ", "_")] : ""}`}>
            <p className={styles.japanese_font}>お気に入りの、楽しい日本語フォント。</p>
            <p className={styles.english_font}>Happy Japanese Fonts Collection! ABC 123</p>
        </div>

    )
}

export default TestArea