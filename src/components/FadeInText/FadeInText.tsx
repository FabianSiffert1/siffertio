import styles from "./FadeInText.module.scss";
import React from "react";

export interface FadeInTextProps {
    textToDisplay?: string,
    mainBlockColor?: string,
    mainBlockHeight?: string,
    mainBlockWidth?: string,
    mainFontSize?: string,
    secondaryFontSize?: string,
    leftToRight?: boolean,
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
                     }}></div>
                {props.textToDisplay &&
                    <div className={styles.mainFadeInText} style={{
                        fontSize: props.mainFontSize,
                    }}>
                        {props.textToDisplay}
                    </div>
                }
            </div>
            {props.children &&
                <div className={styles.FadeInPlainTextContainer} style={{
                    fontSize: props.secondaryFontSize,
                }}>
                    {props.children}
                </div>
            }
        </div>

    );
}
