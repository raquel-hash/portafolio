import { useState } from "react";

import styles from "./Navbar.module.css";
import closeIcon from "/assets/nav/closeIcon.png";
import menuIcon from "/assets/nav/menuIcon.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portafolio
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                            ? closeIcon
                            : menuIcon
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">Acerca de mi</a>
                    </li>
                    <li>
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li>
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
