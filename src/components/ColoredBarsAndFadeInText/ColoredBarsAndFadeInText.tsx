import React from 'react';
import {useSelector} from "react-redux";
import styles from './ColoredBarsAndFadeInText.module.scss';
import {Themes} from "../ThemeMenu/ThemeMenu";
import {RootState} from "../../utils/reduxStore/reduxStore";

export interface FadeInTextProps {
    textToDisplay?: string;
    mainBlockColor?: string;
    mainBlockHeight?: string;
    mainBlockWidth?: string;
    mainFontSize?: string;
    secondaryFontSize?: string;
    leftToRightAnimation?: boolean;
    children?: React.ReactNode;
}

export default function ColoredBarsAndFadeInText(props: FadeInTextProps) {
    const currentTheme = useSelector((state: RootState) => state.theme.value);
    return (
        <div className={styles.FadeInTextContainer}>
            <div
                className={
                    currentTheme === Themes.DARK
                        ? styles.darkTheme
                        : currentTheme === Themes.LIGHT
                            ? styles.lightTheme
                            : styles.colorfulTheme
                }
            >
                <div className={styles.fadeInTitleContainer}>
                    <div className={styles.fadeInAnimationContainer}>
                        <div className={styles.fadeinMainTitleContainer}>
                            <div
                                className={
                                    props.leftToRightAnimation
                                        ? styles.coloredBlockLeftToRight
                                        : styles.coloredBlockRightToLeft
                                }
                                style={{
                                    backgroundColor: props.mainBlockColor,
                                    height: props.mainBlockHeight,
                                    width: props.mainBlockWidth,
                                }}
                            ></div>
                            {props.textToDisplay && (
                                <div
                                    className={styles.fadeInMainTitleText}
                                    style={{
                                        fontSize: props.mainFontSize,
                                    }}
                                >
                                    {props.textToDisplay}
                                </div>
                            )}
                        </div>
                    </div>
                    {props.children && (
                        <div
                            className={styles.fadeInSubtitleContainer}
                            style={{
                                fontSize: props.secondaryFontSize,
                            }}
                        >
                            {props.children}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
ColoredBarsAndFadeInText.defaultProps = {
    leftToRightAnimation: true,
};
