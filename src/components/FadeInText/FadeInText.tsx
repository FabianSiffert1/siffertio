import styles from "./FadeInText.module.scss";
import React from "react";

export interface FadeInTextProps {
    textToDisplay?: string,
    mainBlockColor?: string,
    mainBlockHeight?: string,
    mainBlockWidth?: string,
    mainFontSize?: string,
    secondaryFontSize?: string,
    leftToRightAnimation? : boolean,
    children?: React.ReactNode,
}

export default function FadeInText(props: FadeInTextProps) {
    return (
        <div className={styles.FadeInTextContainer}>
            <div className={styles.FadeInAnimationContainer}>
                {props.leftToRightAnimation ? <div className={styles.coloredBlockLeftToRight}
                     style={{
                         backgroundColor: props.mainBlockColor,
                         height: props.mainBlockHeight,
                         width: props.mainBlockWidth,
                     }}
                ></div> :
                    <div className={styles.coloredBlockRightToLeft}
                               style={{
                                   backgroundColor: props.mainBlockColor,
                                   height: props.mainBlockHeight,
                                   width: props.mainBlockWidth,
                               }}
                ></div>}
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
FadeInText.defaultProps = {
 leftToRightAnimation: true,
}
