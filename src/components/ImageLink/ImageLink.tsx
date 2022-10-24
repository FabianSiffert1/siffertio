import React from "react";
import styles from "./ImageLink.module.scss";

import {useSelector} from "react-redux";
import language from "../../assets/language/language";

export interface ImageLinkProps {
    imageSubtitle?: string;
    imageSource: string;
    imageAltText?: string;
    imageLink: string;
}

export default function ImageLink(props: ImageLinkProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
        <div className={styles.ImageLink}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                <a href={props.imageLink} target="_blank" rel="noreferrer">
                    <img className={styles.imageContainer} src={props.imageSource}
                         alt={props.imageAltText ? props.imageAltText : "Logo.png"}/>
                    <div className={styles.imageSubtitle}>{props.imageSubtitle}</div>
                </a>
            </div>
        </div>
    );
}
