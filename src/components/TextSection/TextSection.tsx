import React from "react";
import styles from "./TextSection.module.scss";

import {useSelector} from "react-redux";
import language from "../../assets/language/language";

export interface TextSectionProps {
    textSectionTitle?: string;
    children: any;
}

export function TextSection(props: TextSectionProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
        <div className={styles.TextSection}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                {props.textSectionTitle && <div className={styles.textSectionTitle}>{props.textSectionTitle}</div>}
                <div className={styles.textSectionContent}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
