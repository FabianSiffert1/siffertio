import React from 'react';
import {useSelector} from 'react-redux';
import styles from './Projects.module.scss';
import {RootState} from '../../utils/reduxStore/reduxStore';
import SkillBanner from '../../components/SkillBanner/SkillBanner';
import LinkBanner from '../../components/LinkBanner/LinkBanner';
import {
  fsLogoBW,
  githubLogo,
  reactLogo,
  reactSpringLogo,
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
                focus on simplistic design.
              </div>
              <div className={styles.skillSection}>
                <div className={styles.skillSectionHeader}>Components</div>
                <div className={styles.skillContainer}>
                  <SkillBanner text={'React'} image={reactLogo} />
                  <SkillBanner text={'Sass'} image={sassLogo} />
                  <SkillBanner text={'TypeScript'} image={typescriptLogo} />
                  <SkillBanner text={'React Spring'} image={reactSpringLogo} />
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
          </div>
        </div>
      </div>
    </div>
  );
}
