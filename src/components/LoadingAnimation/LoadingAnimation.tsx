import React from "react";
import styles from "./LoadingAnimation.module.scss";

import {useSelector} from "react-redux";
import language from "../../assets/language/language";

export interface LoadingAnimationProps {
}

export function LoadingAnimation(props: LoadingAnimationProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
        <div className={styles.LoadingAnimation}>
            <div className={styles.dotContainer}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>
    );
}
