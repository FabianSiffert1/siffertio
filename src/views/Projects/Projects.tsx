import React from "react";
import styles from "./Projects.module.scss";
import language from "../../assets/language/language";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reduxStore/reduxStore";
import SkillBanner from "../../components/SkillBanner/SkillBanner";
import ImageLink from "../../components/ImageLink/ImageLink";
import {
  fsLogoBW,
  githubLogo,
  javaLogo,
  jetpackComposeLogo,
  kotlinLogo,
  reactLogo,
  sassLogo,
  springLogo,
  typescriptLogo,
} from "../../assets/_globalAssetImports";

let pulseColorSiffertIO = "#61dafb";
let pulseColorRoshambo = "#7F52FF";

export default function Projects() {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  if (currentTheme === language.THEME_DARK_VAR) {
    pulseColorSiffertIO = "#61dafb";
    pulseColorRoshambo = "#7F52FF";
  } else if (currentTheme === language.THEME_LIGHT_VAR) {
    pulseColorSiffertIO = "#51AAC7";
    pulseColorRoshambo = "#7F52FF";
  } else if (currentTheme === language.THEME_COLORFUL_VAR) {
    pulseColorSiffertIO = "";
    pulseColorRoshambo = "";
  }
  return (
    <div className={styles.Projects}>
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
          <div className={styles.projectsContainer}>
            <div className={styles.projectContent}>
              <div className={styles.projectTitle}>siffert.io</div>
              <div className={styles.textSection}>
                You are here. An attract screen, aka personal
                portfolio, with a focus on simplistic design.
              </div>
              <div className={styles.skillSection}>
                <div className={styles.skillSectionHeader}>Components</div>
                <div className={styles.skillContainer}>
                  <SkillBanner text={"React"} image={reactLogo} />
                  <SkillBanner text={"Sass"} image={sassLogo} />
                  <SkillBanner text={"TypeScript"} image={typescriptLogo} />
                </div>
              </div>
              <div className={styles.linkSection}>
                <div className={styles.linkSectionHeader}>Links</div>
                <div className={styles.linkContainer}>
                  <ImageLink
                    image={fsLogoBW}
                    imageLink={"http://siffert.io"}
                    imagePopUpText={"Deployment"}
                  />
                  <ImageLink
                    imagePopUpText={"Github"}
                    image={githubLogo}
                    imageLink={
                      "https://github.com/FabianSiffert1/siffertio-flex"
                    }
                  />
                </div>
              </div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectTitle}>Roshambo</div>
              <div className={styles.textSection}>
                A work-in-progress Android-App. My way of learning mobile development.
              </div>
              <div className={styles.skillSection}>
                <div className={styles.skillSectionHeader}>Components</div>
                <div className={styles.skillContainer}>
                  <SkillBanner text={"Kotlin"} image={kotlinLogo} />
                  <SkillBanner text="Compose" image={jetpackComposeLogo} />
                  <SkillBanner text={"Java"} image={javaLogo} />
                  <SkillBanner text={"Spring"} image={springLogo} />
                </div>
              </div>
              <div className={styles.linkSection}>
                <div className={styles.linkSectionHeader}>Links</div>
                <div className={styles.linkContainer}>
                  <ImageLink
                    imagePopUpText={"Github"}
                    image={githubLogo}
                    imageLink={
                      "https://github.com/FabianSiffert1/roshambo-android-app"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}