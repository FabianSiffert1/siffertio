import React from 'react';
import styles from './Welcome.module.scss';
import {NavLink} from "react-router-dom";


export default function Welcome() {
    return (
        <main className={styles.Welcome}>
            <NavLink to={"/biography"} key={"Biography"}>
                <div className={styles.container}>
                    <div className={styles.glitch} data-text="siffert.io">
                        <div className={styles.glow}>siffert.io</div>
                        <p className={styles.subtitle}>a work in progress</p>
                    </div>
                </div>
                <div className={styles.scanlines}></div>
            </NavLink>
        </main>
    );
}

