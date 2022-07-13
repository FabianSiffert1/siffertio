import styles from "./Biography.module.scss";
import language from "../../resources/language/language";
import {useSelector} from "react-redux";

export default function Biography() {
    const currentTheme = useSelector((state: any) => state.theme.value)
    return (
        <div className={styles.Biography}>
            <div className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme: currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
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
                        <br/>
                        <br/>
                        {language.LOREM}
                        <br/>
                        <br/>
                        {language.LOREM}
                        <br/>
                        <br/>
                        {language.LOREM}
                    </div>
                </div>
            </div>
        </div>
    );
}
