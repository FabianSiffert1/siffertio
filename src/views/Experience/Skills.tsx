import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../utils/reduxStore/reduxStore";

import styles from './Skills.module.scss';
import language from "../../assets/language/language";
import Tooltip from "../../components/Tooltip/Tooltip";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import {toggle} from "../../utils/reduxStore/experienceToggle/experienceToggleSlice";
import {
    dockerLogo, javaLogo,
    jetpackComposeLogo,
    kotlinLogo, mysqlLogo, pythonLogo,
    reactLogo,
    sassLogo, springLogo,
    starFilled,
    starOutline,
    swiftLogo, swiftUILogo,
    typescriptLogo
} from "../../assets/_globalAssetImports";
import SkillBanner, {EXPERIENCE_LEVEL} from "../../components/SkillBanner/SkillBanner";

export default function Skills() {
    const currentTheme = useSelector((state: RootState) => state.theme.value);
    const showExperience = useSelector(
        (state: RootState) => state.experienceToggle.value,
    );
    const dispatch = useDispatch();
    return (
        <div className={styles.Skills}>
            <div
                className={
                    currentTheme === language.THEME_DARK_VAR
                        ? styles.darkTheme
                        : currentTheme === language.THEME_LIGHT_VAR
                            ? styles.lightTheme
                            : styles.colorfulTheme
                }
            >
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsHeader}>{language.SKILLS_TITLE}</div>
                    <div className={styles.skillsExperienceContainer}>
                        <Tooltip
                            toggle={showExperience}
                            text={[
                                'Hide experience indicators.',
                                'Show experience indicators.',
                            ]}
                        >
                            <ToggleButton
                                checked={showExperience}
                                id={'experienceToggle'}
                                onChange={() => {
                                    dispatch(toggle());
                                }}
                            >
                                <div className={styles.skillsExperienceContainerImages}>
                                    <img src={starFilled} alt="SkillIndicatorFilled"/>
                                    <img src={starFilled} alt="SkillIndicatorFilled"/>
                                    <img src={starOutline} alt="SkillIndicatorOutline"/>
                                </div>
                            </ToggleButton>
                        </Tooltip>
                    </div>
                    <div className={styles.skillsRowContainer}>
                        <div className={styles.skillsRow}>
                            <SkillBanner
                                text="TypeScript"
                                image={typescriptLogo}
                                experienceLevel={EXPERIENCE_LEVEL.experienced}
                            />
                            <SkillBanner
                                text="React"
                                image={reactLogo}
                                experienceLevel={EXPERIENCE_LEVEL.experienced}
                            />
                            <SkillBanner
                                text="Sass"
                                image={sassLogo}
                                experienceLevel={EXPERIENCE_LEVEL.experienced}
                            />
                        </div>
                        <div className={styles.skillsRow}>
                            <SkillBanner
                                text="Swift"
                                image={swiftLogo}
                                experienceLevel={EXPERIENCE_LEVEL.beginner}
                            />
                            <SkillBanner
                                text="SwiftUI"
                                image={swiftUILogo}
                                experienceLevel={EXPERIENCE_LEVEL.beginner}
                            />
                            <SkillBanner
                                text="Kotlin"
                                image={kotlinLogo}
                                experienceLevel={EXPERIENCE_LEVEL.moderate}
                            />
                            <SkillBanner
                                text={'Jetpack Compose'}
                                image={jetpackComposeLogo}
                                experienceLevel={EXPERIENCE_LEVEL.moderate}
                            />
                            <SkillBanner
                                text="Docker"
                                image={dockerLogo}
                                experienceLevel={EXPERIENCE_LEVEL.beginner}
                            />
                        </div>
                        <div className={styles.skillsRow}>
                            <SkillBanner
                                text="Python"
                                image={pythonLogo}
                                experienceLevel={EXPERIENCE_LEVEL.beginner}
                            />
                            <SkillBanner
                                text="mySQL"
                                image={mysqlLogo}
                                experienceLevel={EXPERIENCE_LEVEL.experienced}
                            />
                            <SkillBanner
                                text="Java"
                                image={javaLogo}
                                experienceLevel={EXPERIENCE_LEVEL.moderate}
                            />
                            <SkillBanner
                                text="Spring"
                                image={springLogo}
                                experienceLevel={EXPERIENCE_LEVEL.beginner}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
