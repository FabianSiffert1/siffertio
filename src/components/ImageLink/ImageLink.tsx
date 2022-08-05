import React from "react";
import styles from "./ImageLink.module.scss";

import {useSelector} from "react-redux";
import language from "../../resources/language/language";

export interface ImageLinkProps {
    imageSubtitle?: string;
    imageSource: string;
    imageAltText?: string;
    imageLink: string
}

export function ImageLink(props: ImageLinkProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
        <div className={styles.ImageLink}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                <a href={props.imageLink} className={styles.image} target="_blank" rel="noreferrer">
                    <img src={props.imageSource} alt={props.imageAltText ? props.imageAltText : "Logo.png"}/>
                </a>
                {props.imageSubtitle && <div className={styles.imageSubtitle}>{props.imageSubtitle}</div>}
            </div>
        </div>
    );
}
