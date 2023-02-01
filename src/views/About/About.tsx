import React from "react";
        import styles from "./About.module.scss";
        import language from "../../assets/language/language";
        import { useSelector } from "react-redux";
        import SkillBanner from "../../components/SkillBanner/SkillBanner";
        import ImageLink from "../../components/ImageLink/ImageLink";
        import { RootState } from "../../utils/reduxStore/reduxStore";
        import {
        dockerLogo,
        emailLogo,
        githubLogo,
        javaLogo,
        javascriptLogo,
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

        export default function About() {
        const currentTheme = useSelector((state: RootState) => state.theme.value);
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
<div className={styles.aboutMe}>
<img
className={styles.profilePicture}
        src={profilePicture}
        alt={"Fabian Siffert"}
        />
        </div>
<div className={styles.skillsContainer}>
<div className={styles.skillsHeader}>{language.SKILLS_TITLE}</div>
<div className={styles.skillsRowContainer}>
<div className={styles.skillsRow}>
<SkillBanner text="TypeScript" image={typescriptLogo} />
<SkillBanner text="React" image={reactLogo} />
<SkillBanner text="Sass" image={sassLogo} />
        </div>
<div className={styles.skillsRow}>
<SkillBanner text="Swift" image={swiftLogo} />
<SkillBanner text="SwiftUI" image={swiftUILogo} />
<SkillBanner text="Kotlin" image={kotlinLogo} />
<SkillBanner
text={"Jetpack Compose"}
        image={jetpackComposeLogo}
        />
<SkillBanner text="Docker" image={dockerLogo} />
        {/*<SkillBanner text={"Javascript"} image={javascriptLogo} /> */}
        </div>
<div className={styles.skillsRow}>
<SkillBanner text="Python" image={pythonLogo} />
<SkillBanner text="mySQL" image={mysqlLogo} />
<SkillBanner text="Java" image={javaLogo} />
<SkillBanner text="Spring" image={springLogo} />
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