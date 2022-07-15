import React from "react";
import styles from "./FadeInTile.module.scss";

import {useSelector} from "react-redux";
import language from "../../resources/language/language";

export interface FadeInTileProps {
    tileTitle?: string;
    children: any;
}

export function FadeInTile(props: FadeInTileProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
        <div className={styles.FadeInTile}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                {props.tileTitle && <div className={styles.tileTitle}>{props.tileTitle}</div>}
                <div className={styles.tileContent}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
