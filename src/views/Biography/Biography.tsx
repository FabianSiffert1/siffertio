import styles from "./Biography.module.scss";
import language from "../../resources/language/language";

export default function Biography() {
    return (
        <div className={styles.Biography}>
            <div className={styles.textContainer}>
                <div className={styles.textTitle}>
                    Biography
                </div>
                <div className={styles.textContent}>
                    {language.LOREM}
                    <br/>
                    <br/>
                    <br/>
                    {language.LOREM}
                    <br/>
                    <br/>
                    <br/>
                    {language.LOREM}
                    <br/>
                    <br/>
                    <br/>
                    {language.LOREM}
                </div>
            </div>
        </div>
    );
}
