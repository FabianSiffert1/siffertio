import styles from "./SkillBanner.module.scss";
import React from "react";
import language from "../../assets/language/language";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reduxStore/reduxStore";

export enum experienceLevel {
    beginner,
    moderate,
    experienced,
}

export interface SkillBannerProps {
  text: string;
  image: string;
  experienceLevel?: experienceLevel;
}

export default function SkillBanner(props: SkillBannerProps) {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  let showExperience = useSelector((state: RootState) => state.experienceToggle.value);
    let experienceLevelClassName;
    switch (props.experienceLevel) {
        case experienceLevel.beginner:
            experienceLevelClassName = styles.beginner;
            break;
        case experienceLevel.moderate:
            experienceLevelClassName = styles.moderate;
            break;
        case experienceLevel.experienced:
            experienceLevelClassName = styles.experienced;
            break;
        default:
            experienceLevelClassName = styles.beginner;
    }
    console.log(experienceLevelClassName)
  return (
    <div className={styles.SkillBanner}>
      <div
        className={
          currentTheme === language.THEME_DARK_VAR
            ? `${styles.darkTheme} ${showExperience && experienceLevelClassName} `
            : currentTheme === language.THEME_LIGHT_VAR
            ? styles.lightTheme
            : styles.colorfulTheme
        }
      >
        <div className={styles.imageContainer}>
          <img src={props.image} alt="SkillBanner" />
        </div>
        <div className={styles.textContainer}>{props.text}</div>
      </div>
    </div>
  );
}