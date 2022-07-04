import styles from "./FadeInText.module.scss";
import React from "react";

export interface FadeInTextProps {
    textToDisplay?: string,
    mainBlockColor?: string,
    mainBlockHeight?: string,
    mainBlockWidth?: string,
    secondaryBlockColor?: string,
    secondaryBlockHeight?:string,
    secondaryBlockWidth?: string,
    fadeInTime?: string,
    mainFontSize?: string,
    secondaryFontSize?: string,
    children?: React.ReactNode,
}

export default function FadeInText(props: FadeInTextProps) {
    return (
        <div className={styles.FadeInTextContainer}>
            <div className={styles.FadeInAnimationContainer}>
                <div className={styles.coloredBlock}
                     style={{
                         backgroundColor: props.mainBlockColor,
                         height: props.mainBlockHeight,
                         width: props.mainBlockWidth,
                         fontSize: props.mainFontSize,
                     }}></div>
                <div className={styles.fadeInText}>
                    {props.textToDisplay && props.textToDisplay}
                </div>
            </div>
            <div className={styles.FadeInPlainTextContainer} style={{
                backgroundColor: props.secondaryBlockColor,
                height: props.secondaryBlockHeight,
                width: props.secondaryBlockWidth,
                fontSize: props.mainFontSize,
            }}>
                {props.children}
            </div>
        </div>

    );
}
