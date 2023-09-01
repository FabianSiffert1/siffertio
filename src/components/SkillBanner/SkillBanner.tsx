import React from 'react';
import {useSelector} from 'react-redux';
import styles from './SkillBanner.module.scss';
import {RootState} from '../../utils/reduxStore/reduxStore';
import {Themes} from "../ThemeMenu/ThemeMenu";

// eslint-disable-next-line
export enum EXPERIENCE_LEVEL {
    beginner,
    moderate,
    experienced,
}

export interface SkillBannerProps {
    text: string;
    imagePath: string;
    experienceLevel?: EXPERIENCE_LEVEL;
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
            experienceLevelClassName = null;
    }
    return (
        <div className={styles.SkillBanner}>
            <div
                className={
                    currentTheme === Themes.DARK
                        ? `${styles.darkTheme} ${
                            showExperience && experienceLevelClassName
                        } `
                        : currentTheme === Themes.LIGHT
                            ? `${styles.lightTheme} ${
                                showExperience && experienceLevelClassName
                            } `
                            : `${styles.colorfulTheme} ${
                                showExperience && experienceLevelClassName
                            } `
                }
            >
                <div className={styles.imageContainer}>
                    <img src={props.imagePath} alt="SkillBanner"/>
                </div>
                <div className={styles.textContainer}>{props.text}</div>
            </div>
        </div>
    );
}
