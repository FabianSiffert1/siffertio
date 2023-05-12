import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../utils/reduxStore/reduxStore";

import styles from './Skills.module.scss';
import language from "../../assets/language/language";
import Tooltip from "../../components/Tooltip/Tooltip";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import {toggle} from "../../utils/reduxStore/experienceToggle/experienceToggleSlice";
import {
    androidLogo,
    certificateLogo,
    dockerLogo,
    javaLogo,
    jetpackComposeLogo,
    kotlinLogo,
    mysqlLogo,
    pythonLogo,
    reactLogo,
    reactSpringLogo,
    sassLogo,
    springLogo,
    starFilled,
    starOutline,
    studyCap,
    swiftLogo,
    swiftUILogo,
    typescriptLogo
} from "../../assets/_globalAssetImports";
import SkillBanner, {EXPERIENCE_LEVEL} from "../../components/SkillBanner/SkillBanner";
import {Themes} from "../../components/ThemeMenu/ThemeMenu";
import CollapsibleSection from "../../components/CollapsibleSection/CollapsibleSection";

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
                    currentTheme === Themes.DARK
                        ? styles.darkTheme
                        : currentTheme === Themes.LIGHT
                            ? styles.lightTheme
                            : styles.colorfulTheme
                }
            >
                <div className={styles.programmingSkillsContainer}>
                    <div className={styles.programmingSkillsHeader}>{language.SKILLS_TITLE}</div>
                    <div className={styles.programmingSkillsToggleContainer}>
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
                                <div className={styles.programmingSkillsToggleImages}>
                                    <img src={starFilled} alt="SkillIndicatorFilled"/>
                                    <img src={starFilled} alt="SkillIndicatorFilled"/>
                                    <img src={starOutline} alt="SkillIndicatorOutline"/>
                                </div>
                            </ToggleButton>
                        </Tooltip>
                    </div>
                    <div className={styles.programmingSkillsRowContainer}>
                        <div className={styles.programmingSkillsRow}>
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
                        </div>
                        <div className={styles.programmingSkillsRow}>
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
                                experienceLevel={EXPERIENCE_LEVEL.experienced}
                            />
                            <SkillBanner
                                text={'Jetpack Compose'}
                                image={jetpackComposeLogo}
                                experienceLevel={EXPERIENCE_LEVEL.experienced}
                            />
                            <SkillBanner text={'Android'} image={androidLogo}
                                         experienceLevel={EXPERIENCE_LEVEL.beginner}/>
                        </div>
                        <div className={styles.programmingSkillsRow}>
                            <SkillBanner
                                text="Docker"
                                image={dockerLogo}
                                experienceLevel={EXPERIENCE_LEVEL.beginner}
                            />
                            <SkillBanner
                                text="Python"
                                image={pythonLogo}
                                experienceLevel={EXPERIENCE_LEVEL.beginner}
                            />
                            <SkillBanner
                                text="mySQL"
                                image={mysqlLogo}
                                experienceLevel={EXPERIENCE_LEVEL.moderate}
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
                        <div className={styles.programmingSkillsRow}>
                            <SkillBanner
                                text="Sass"
                                image={sassLogo}
                                experienceLevel={EXPERIENCE_LEVEL.experienced}
                            />
                            <SkillBanner
                                text="React Spring"
                                image={reactSpringLogo}
                                experienceLevel={EXPERIENCE_LEVEL.beginner}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.otherSkillsContainer}>
                    <div className={styles.otherSkillsHeader}>{language.OTHER_SKILLS_TITLE}</div>
                    <div className={styles.otherSkillsContent}>
                        <CollapsibleSection headerImage={studyCap} popUpText={language.ENGLISH_STUDIES_TITLE}
                                            sectionContent={language.ENGLISH_STUDIES_DESCRIPTION}/>
                        <CollapsibleSection headerImage={certificateLogo} popUpText={language.QUALIFICATIONS_TITLE}
                                            sectionContent={language.QUALIFICATIONS_DESCRIPTION}/>
                    </div>
                </div>

            </div>
        </div>
    );
}
