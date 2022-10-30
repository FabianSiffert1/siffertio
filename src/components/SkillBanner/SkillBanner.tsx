import styles from "./SkillBanner.module.scss";
import React from "react";
import language from "../../assets/language/language";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reduxStore/reduxStore";

export interface SkillBannerProps {
  text: string;
  image: string;
}

export default function SkillBanner(props: SkillBannerProps) {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  return (
    <div className={styles.SkillBanner}>
      <div
        className={
          currentTheme === language.THEME_DARK_VAR
            ? styles.darkTheme
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