import styles from "./Biography.module.scss";
import language from "../../resources/language/language";

export default function Biography() {
    return (
        <main className={styles.Biography}>
            <h2>Biography</h2>
            <div className={styles.textContent}>
                {language.LOREM}
            </div>
        </main>
    );
}
