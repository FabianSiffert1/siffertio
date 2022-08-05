import React from 'react';
import styles from './Welcome.module.scss';
import language from "../../assets/language/language";

import {NavLink} from "react-router-dom";


export default function Welcome() {
    return (
        <main className={styles.Welcome}>
            <NavLink to={"/biography"} key={"Biography"}>
                <div className={styles.container}>
                    <div className={styles.glitch} data-text={language.WELCOME_TITLE}>
                        <div className={styles.glow}>{language.WELCOME_TITLE}</div>
                        <p className={styles.subtitle}>{language.WELCOME_SUBTITLE}</p>
                    </div>
                </div>
                <div className={styles.scanlines}></div>
            </NavLink>
        </main>
    );
}

