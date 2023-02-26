import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './About.module.scss';
import language from '../../assets/language/language';
import SkillBanner, {
  EXPERIENCE_LEVEL,
} from '../../components/SkillBanner/SkillBanner';
import LinkBanner from '../../components/LinkBanner/LinkBanner';
import { RootState } from '../../utils/reduxStore/reduxStore';
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
} from '../../assets/_globalAssetImports';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { toggle } from '../../utils/reduxStore/experienceToggle/experienceToggleSlice';
import Tooltip from '../../components/Tooltip/Tooltip';

export default function About() {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  const showExperience = useSelector(
    (state: RootState) => state.experienceToggle.value,
  );
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
          <ProfilePicture
            name={language.NAME}
            title={language.JOB}
            image={profilePicture}
          />
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
                    <img src={starFilled} alt="SkillIndicatorFilled" />
                    <img src={starFilled} alt="SkillIndicatorFilled" />
                    <img src={starOutline} alt="SkillIndicatorOutline" />
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
          <div className={styles.contactContainer}>
            <div className={styles.contactHeader}>{language.CONTACT_TITlE}</div>
            <div className={styles.contactLinks}>
              <div className={styles.contactLinksRow}>
                <LinkBanner
                  image={githubLogo}
                  text={language.GITHUB}
                  imageAltText={language.GITHUB}
                  url={language.LINK_GITHUB}
                />
                <LinkBanner
                  image={emailLogo}
                  text={language.EMAIL}
                  imageAltText={language.EMAIL}
                  url={language.LINK_EMAIL}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
