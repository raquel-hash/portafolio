import styles from "./Contact.module.css";
import emailIcon from "./../../../assets/contact/emailIcon.png";
import linkedinIcon from "./../../../assets/contact/linkedinIcon.png";
import githubIcon from "./../../../assets/contact/githubIcon.png";

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contacto</h2>
                <p>¡No dudes en ponerte en contacto!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={emailIcon} alt="Email icon" />
                    <a href="mailto:quelcaraquel1@gmail.com">quelcaraquel1@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={linkedinIcon}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/raquel-quelca">linkedin.com/raquel-quelca</a>
                </li>
                <li className={styles.link}>
                    <img src={githubIcon} alt="Github icon" />
                    <a href="https://www.github.com/raquel-hash">github.com/raquel-hash</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact
