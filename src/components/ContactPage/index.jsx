import styles from "./contact.module.css"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { getImageURL } from "../../utils/functions";

const Contact = () => {
    return (
        <>
            <h2>Contact</h2>
            <div className={styles.contact_description}>
                <p>Japanese fonts offer endless possibilities—from cute and playful to bold and one-of-a-kind.</p>
                <p>Thinking of opening a ramen shop or sushi restaurant in Stockholm?
                    Looking for a font or logo that truly captures your brand&#39;s vibe?</p>
                <p>Let&#39;s make it happen.</p>
                <p>Feel free to reach out—I&#39;d love to help shape your idea into something memorable!</p>
            </div>

            <div className={styles.profile}>
                <div className={styles.imageContainer}>
                    <img src={getImageURL("profile.png")} className={styles.profile_image} />
                </div>
                <div className={styles.profile_leftContainer}>
                    <h3>Maho Kurauchi</h3>
                    <div className={styles.snsLinks}>
                        <a href="https://www.linkedin.com/in/maho-kurauchi/"><FaLinkedin /></a>
                        <a href="https://github.com/mamahimiko"><FaGithub /></a>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Contact