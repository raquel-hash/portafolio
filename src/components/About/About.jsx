import styles from "./About.module.css";
import aboutImage from "/assets/about/aboutImage.png";
import cursorIcon from "/assets/about/cursorIcon.png";
import serverIcon from "/assets/about/serverIcon.png";
import uiIcon from "/assets/about/uiIcon.png";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Acerca de mi</h2>
            <div className={styles.content}>
                <img
                    src={aboutImage}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={uiIcon} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Desarrolladora Frontend</h3>
                            <p>
                                Tengo experiencia creando interfaces responsivas y optimizadas con Angular y React Native.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={serverIcon} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Desarrolladora Backend</h3>
                            <p>
                                He trabajado con NestJS, Laravel y .NET para construir APIs y gestionar bases de datos eficientes.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Gestión de Bases de Datos</h3>
                            <p>
                                Experiencia en PostgreSQL y MySQL para el diseño y optimización de bases de datos relacionales.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
