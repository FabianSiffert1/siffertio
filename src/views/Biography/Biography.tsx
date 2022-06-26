import styles from "./Biography.module.scss";
import language from "../../resources/language/language";

export default function Biography() {
    return (
        <main className={styles.Biography}>
            <div className={styles.textContainer}>
            <div className={styles.title}>
                <h2>Biography</h2>
            </div>
            <div className={styles.textContent}>
                {language.LOREM}
            </div>
            </div>
        </main>
    );
}
