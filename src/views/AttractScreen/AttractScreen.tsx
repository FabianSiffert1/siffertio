import styles from "./AttractScreen.module.scss";

export default function AttractScreen() {
    return (
        <main className={styles.AttractScreen}>
            <div className={styles.textContent}>
                <div className={styles.container}>
                    <div className={styles.glitch} data-text="Siffert.io">
                        <div className={styles.glow}>Siffert.io</div>
                        <p className={styles.subtitle}>Work In Progress</p>
                    </div>
                </div>
                <div className={styles.scanlines}></div>
            </div>
        </main>
    );
}
