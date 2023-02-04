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
    swiftLogo,
    swiftUILogo,
    typescriptLogo,
} from "../../assets/_globalAssetImports";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import ToggleSlider from "../../components/ToggleSlider/ToggleSlider";
import {toggle} from "../../utils/reduxStore/experienceToggle/experienceToggleSlice";

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
                    <ProfilePicture name="Fabian Siffert" title="Software Developer" image={profilePicture}/>
                    <div className={styles.skillsContainer}>
                        <div className={styles.skillsHeader}>{language.SKILLS_TITLE}</div>
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
                                {/*<SkillBanner text={"Javascript"} image={javascriptLogo} /> */}
                            </div>
                            <div className={styles.skillsRow}>
                                <SkillBanner text="Python" image={pythonLogo}/>
                                <SkillBanner text="mySQL" image={mysqlLogo}/>
                                <SkillBanner text="Java" image={javaLogo}/>
                                <SkillBanner text="Spring" image={springLogo}/>
                            </div>
                            <div className={styles.experienceIndicatorContainer}>
                                <ToggleSlider checked={showExperience} id={"experienceToggle"} onChange={()=>{dispatch(toggle())} }/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactContainer}>
                        <div className={styles.contactHeader}>{language.CONTACT_TITlE}</div>
                        <div className={styles.contactLinks}>
                            <div className={styles.contactLinksRow}>
                                <ImageLink
                                    image={githubLogo}
                                    imagePopUpText={"Github"}
                                    imageAltText={"Github"}
                                    imageLink={language.LINK_GITHUB}
                                />
                                <ImageLink
                                    image={emailLogo}
                                    imagePopUpText={"E-Mail"}
                                    imageAltText={"E-Mail"}
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