import React from 'react';
import {useSelector} from 'react-redux';
import styles from './Projects.module.scss';
import {RootState} from '../../utils/reduxStore/reduxStore';
import SkillBanner from '../../components/SkillBanner/SkillBanner';
import LinkBanner from '../../components/LinkBanner/LinkBanner';
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
} from '../../assets/_globalAssetImports';
import {Themes} from "../../components/ThemeMenu/ThemeMenu";

export default function Projects() {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  return (
    <div className={styles.Projects}>
      <div className={styles.content}>
        <div
            className={
              currentTheme === Themes.DARK
                  ? styles.darkTheme
                  : currentTheme === Themes.LIGHT
                      ? styles.lightTheme
                      : styles.colorfulTheme
            }
        >
          <div className={styles.projectsContainer}>
            <div className={styles.projectContent}>
              <div className={styles.projectTitle}>siffert.io</div>
              <div className={styles.textSection}>
                You are here. An attract screen, aka personal portfolio, with a
                focus on simplistic design.
              </div>
              <div className={styles.skillSection}>
                <div className={styles.skillSectionHeader}>Components</div>
                <div className={styles.skillContainer}>
                  <SkillBanner text={'React'} image={reactLogo} />
                  <SkillBanner text={'Sass'} image={sassLogo} />
                  <SkillBanner text={'TypeScript'} image={typescriptLogo} />
                </div>
              </div>
              <div className={styles.linkSection}>
                <div className={styles.linkSectionHeader}>Links</div>
                <div className={styles.linkContainer}>
                  <LinkBanner
                    image={fsLogoBW}
                    url={'http://siffert.io'}
                    text={'Deployment'}
                  />
                  <LinkBanner
                    text={'Github'}
                    image={githubLogo}
                    url={'https://github.com/FabianSiffert1/siffertio'}
                  />
                </div>
              </div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectTitle}>Roshambo</div>
              <div className={styles.textSection}>
                A work-in-progress Android-App. My way of learning mobile
                development.
              </div>
              <div className={styles.skillSection}>
                <div className={styles.skillSectionHeader}>Components</div>
                <div className={styles.skillContainer}>
                  <SkillBanner text={'Kotlin'} image={kotlinLogo} />
                  <SkillBanner
                    text="Jetpack Compose"
                    image={jetpackComposeLogo}
                  />
                  <SkillBanner text={'Java'} image={javaLogo} />
                  <SkillBanner text={'Spring'} image={springLogo} />
                </div>
              </div>
              <div className={styles.linkSection}>
                <div className={styles.linkSectionHeader}>Links</div>
                <div className={styles.linkContainer}>
                  <LinkBanner
                    text={'Github'}
                    image={githubLogo}
                    url={
                      'https://github.com/FabianSiffert1/roshambo-android-kotlin'
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
