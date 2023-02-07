import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SkillBanner.module.scss';
import language from '../../assets/language/language';
import { RootState } from '../../utils/reduxStore/reduxStore';

// eslint-disable-next-line
export enum EXPERIENCE_LEVEL {
  beginner,
  moderate,
  experienced,
}

export interface SkillBannerProps {
  text: string;
  image: string;
  experienceLevel?: EXPERIENCE_LEVEL
}

export default function SkillBanner(props: SkillBannerProps) {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  const showExperience = useSelector(
    (state: RootState) => state.experienceToggle.value,
  );
  let experienceLevelClassName;
  switch (props.experienceLevel) {
    case EXPERIENCE_LEVEL.beginner:
      experienceLevelClassName = styles.beginner;
      break;
    case EXPERIENCE_LEVEL.moderate:
      experienceLevelClassName = styles.moderate;
      break;
    case EXPERIENCE_LEVEL.experienced:
      experienceLevelClassName = styles.experienced;
      break;
    default:
      experienceLevelClassName = styles.beginner;
  }
  return (
    <div className={styles.SkillBanner}>
      <div
        className={
          currentTheme === language.THEME_DARK_VAR
            ? `${styles.darkTheme} ${
                showExperience && experienceLevelClassName
              } `
            : currentTheme === language.THEME_LIGHT_VAR
            ? `${styles.lightTheme} ${
                showExperience && experienceLevelClassName
              } `
            : `${styles.colorfulTheme} ${
                showExperience && experienceLevelClassName
              } `
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
