import React from "react";
import styles from "./ThemeDropdownMenu.module.scss";
import {useSelector} from "react-redux";
import language from "../../resources/language/language";

export interface FadeInTextProps {
    children: any;
}

export function FadeInText(props: FadeInTextProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
        <div className={styles.FadeInText}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                <div className={styles.textContent}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
