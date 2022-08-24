import React from "react";
import styles from "./ThemeComponent.module.scss";
import language from "../../assets/language/language";


export interface ThemeComponentProps {
    currentTheme : any,
    children: any;
}

export function ThemeComponent(props: ThemeComponentProps) {
    return (
        <div
            className={props.currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : props.currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
            {props.children}
        </div>
    );
}