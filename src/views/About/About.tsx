import React, {useReducer} from "react";
import styles from "./About.module.scss";
import language from "../../assets/language/language";
import {useDispatch, useSelector} from "react-redux";
import SkillBanner from "../../components/SkillBanner/SkillBanner";
import ImageLink from "../../components/ImageLink/ImageLink";
import {RootState} from "../../utils/reduxStore/reduxStore";
import {
    dockerLogo,
    emailLogo,
    githubLogo,
    javaLogo,
    jetpackComposeLogo,
    kotlinLogo,
    mysqlLogo,
    profilePicture,
    pythonLogo,
    reactLogo,
    sassLogo,
    springLogo,
    starFilled,
    starOutline,
    swiftLogo,
    swiftUILogo,
    typescriptLogo,
} from "../../assets/_globalAssetImports";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import {toggle} from "../../utils/reduxStore/experienceToggle/experienceToggleSlice";
import Tooltip from "../../components/Tooltip/Tooltip";

export default function About() {

    const currentTheme = useSelector((state: RootState) => state.theme.value);
    let showExperience = useSelector((state: RootState) => state.experienceToggle.value);
    const dispatch = useDispatch();
    return (
        <div className={styles.About}>
            <div className={styles.content}>
                <div
                    className={
                        currentTheme === language.THEME_DARK_VAR
                            ? styles.darkTheme
                            : currentTheme === language.THEME_LIGHT_VAR
                                ? styles.lightTheme
                                : styles.colorfulTheme
                    }
                >
                    <ProfilePicture name={language.NAME} title={language.JOB} image={profilePicture}/>
                    <div className={styles.skillsContainer}>
                        <div className={styles.skillsHeader}>{language.SKILLS_TITLE}</div>
                        <div className={styles.skillsExperienceContainer}>
                            <Tooltip toggle={showExperience}
                                     text={["Hide experience indicators.", "Show experience indicators."]}>
                                <ToggleButton checked={showExperience} id={"experienceToggle"} onChange={() => {
                                    dispatch(toggle())}}>
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
                                <SkillBanner text="TypeScript" image={typescriptLogo}/>
                                <SkillBanner text="React" image={reactLogo}/>
                                <SkillBanner text="Sass" image={sassLogo}/>
                            </div>
                            <div className={styles.skillsRow}>
                                <SkillBanner text="Swift" image={swiftLogo}/>
                                <SkillBanner text="SwiftUI" image={swiftUILogo}/>
                                <SkillBanner text="Kotlin" image={kotlinLogo}/>
                                <SkillBanner
                                    text={"Jetpack Compose"}
                                    image={jetpackComposeLogo}
                                />
                                <SkillBanner text="Docker" image={dockerLogo}/>
                            </div>
                            <div className={styles.skillsRow}>
                                <SkillBanner text="Python" image={pythonLogo}/>
                                <SkillBanner text="mySQL" image={mysqlLogo}/>
                                <SkillBanner text="Java" image={javaLogo}/>
                                <SkillBanner text="Spring" image={springLogo}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactContainer}>
                        <div className={styles.contactHeader}>{language.CONTACT_TITlE}</div>
                        <div className={styles.contactLinks}>
                            <div className={styles.contactLinksRow}>
                                <ImageLink
                                    image={githubLogo}
                                    imagePopUpText={language.GITHUB}
                                    imageAltText={language.GITHUB}
                                    imageLink={language.LINK_GITHUB}
                                />
                                <ImageLink
                                    image={emailLogo}
                                    imagePopUpText={language.EMAIL}
                                    imageAltText={language.EMAIL}
                                    imageLink={language.LINK_EMAIL}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}