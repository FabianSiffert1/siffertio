import styles from "./FadeInText.module.scss";
import React from "react";

export interface FadeInTextProps {
    textToDisplay?: string,
    blockColor?: string,
    blockHeight?: string,
    blockWidth?: string,
    fadeInTime?: string,
    children?: React.ReactNode,
}

export default function FadeInText(props: FadeInTextProps) {
    return (
        <div className={styles.FadeInTextContainer}>
            <div className={styles.FadeInAnimationContainer}>
                <div className={styles.coloredBlock}
                     style={{
                         backgroundColor: props.blockColor,
                         height: props.blockHeight,
                         width: props.blockWidth
                     }}></div>
                <div className={styles.fadeInText}>
                    {props.textToDisplay && props.textToDisplay}
                </div>
            </div>
            <div className={styles.FadeInPlainTextContainer}>
                {props.children}
            </div>
        </div>

    );
}
