import styles from "./ColoredBarsAndFadeInText.module.scss";
import React from "react";

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
  return (
    <div className={styles.FadeInTextContainer}>
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
  );
}
ColoredBarsAndFadeInText.defaultProps = {
  leftToRightAnimation: true,
};
