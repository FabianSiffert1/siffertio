import React from "react";
import styles from "./LoadingAnimation.module.scss";

import {useSelector} from "react-redux";
import language from "../../assets/language/language";

export interface LoadingAnimationProps {
}

export function LoadingAnimation(props: LoadingAnimationProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                <div className={styles.LoadingAnimation}>
                    <div className={styles.dotContainer}>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                    </div>
                </div>
            </div>
    );
}
