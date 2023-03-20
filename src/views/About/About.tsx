import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './About.module.scss';
import language from '../../assets/language/language';
import LinkBanner from '../../components/LinkBanner/LinkBanner';
import {RootState} from '../../utils/reduxStore/reduxStore';
import {emailLogo, githubLogo, profilePicture,} from '../../assets/_globalAssetImports';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';

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
                    <ProfilePicture
                        name={language.NAME}
                        title={language.JOB}
                        image={profilePicture}
                    />
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
