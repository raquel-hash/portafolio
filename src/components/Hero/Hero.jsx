import styles from "./Hero.module.css";
import heroImage from "/assets/hero/heroImage.png";

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hola, soy Raquel</h1>
                <p className={styles.description}>
                    Soy desarrolladora de software con interés en el desarrollo web y móvil. Me gusta resolver problemas y aprender nuevas tecnologías. ¡Hablemos!                </p>
                <a href="mailto:quelcaraquel1@gmail.com" className={styles.contactBtn}>
                    Contactame
                </a>
            </div>
            <img
                src={heroImage}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero
