import React from 'react';
import styles from './PageNotFound.module.scss';
import language from "../../resources/language/language";

import {NavLink} from "react-router-dom";


export default function PageNotFound() {
    return (
        <main className={styles.PageNotFound}>
            <NavLink to={"/biography"} key={"Biography"}>
                <div className={styles.container}>
                    <div className={styles.glitch} data-text={language.PAGE_NOT_FOUND_TITLE}>
                        <div className={styles.glow}>{language.PAGE_NOT_FOUND_TITLE}</div>
                        <p className={styles.subtitle}>{language.PAGE_NOT_FOUND_SUBTITLE}</p>
                    </div>
                </div>
                <div className={styles.scanlines}></div>
            </NavLink>
        </main>
    );
}

