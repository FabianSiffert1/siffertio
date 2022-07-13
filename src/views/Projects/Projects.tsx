import {useSelector} from "react-redux";

import styles from "./Projects.module.scss";
import language from "../../resources/language/language";

export default function Projects() {
    const currentTheme = useSelector((state: any) => state.theme.value)
    return (
        <div className={styles.Projects}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                {language.PROJECTS_TITLE}
            </div>
        </div>
    );
}
