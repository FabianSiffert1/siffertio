import React from 'react';
import {useSelector} from 'react-redux';
import styles from './Projects.module.scss';
import {RootState} from '../../utils/reduxStore/reduxStore';
import SkillBanner from '../../components/SkillBanner/SkillBanner';
import LinkBanner from '../../components/LinkBanner/LinkBanner';
import {
  androidLogo,
  fsLogoBW,
  githubLogo, jetpackComposeLogo, kotlinLogo, logoPlaystore, logoSatellite,
  reactLogo,
  sassLogo,
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
                You are here. A personal portfolio with a
                focus on simplistic design. <br/>
                A pet project written over the course of
                apprenticeship. <br/>
                Be aware: Code quality may vary.
              </div>
              <div className={styles.skillSection}>
                <div className={styles.skillSectionHeader}>Components</div>
                <div className={styles.skillContainer}>
                  <SkillBanner text={'React'} imagePath={reactLogo} />
                  <SkillBanner text={'Sass'} imagePath={sassLogo} />
                  <SkillBanner text={'TypeScript'} imagePath={typescriptLogo} />
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
              <div className={styles.projectTitle}>satellite</div>
              <div className={styles.textSection}>
                A telephony app with more than 100.000 monthly users.
              </div>
              <div className={styles.skillSection}>
                <div className={styles.skillSectionHeader}>Components</div>
                <div className={styles.skillContainer}>
                  <SkillBanner text={'Kotlin'} imagePath={kotlinLogo} />
                  <SkillBanner text={'Jetpack Compose'} imagePath={jetpackComposeLogo} />
                  <SkillBanner text={'Android'} imagePath={androidLogo} />
                </div>
              </div>
              <div className={styles.linkSection}>
                <div className={styles.linkSectionHeader}>Links</div>
                <div className={styles.linkContainer}>
                  <LinkBanner
                      image={logoPlaystore}
                      url={'https://play.google.com/store/apps/details?id=de.sipgate.app.satellite&hl=en&gl=US&pli=1'}
                      text={'Playstore'}
                      invertColorsInDarkMode={false}
                  />
                  <LinkBanner
                      text={'Website'}
                      image={logoSatellite}
                      url={'https://satellite.me'}
                      invertColorsInDarkMode={false}
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
