import React from 'react';
import {useSelector} from 'react-redux';
import styles from './ProfilePicture.module.scss';
import language from '../../assets/language/language';
import {RootState} from '../../utils/reduxStore/reduxStore';

export interface ProfilePictureProps {
    name: string;
    title: string;
    image: string;
}

export default function ProfilePicture(props: ProfilePictureProps) {
    const currentTheme = useSelector((state: RootState) => state.theme.value);
    return (
        <div className={styles.ProfilePicture}>
            <div
                className={
                    currentTheme === language.THEME_DARK_VAR
                        ? styles.darkTheme
                        : currentTheme === language.THEME_LIGHT_VAR
                            ? styles.lightTheme
                            : styles.colorfulTheme
                }
            >
                <div className={styles.contentContainer}>
                    <img src={props.image} alt="Profile Picture"/>
                    <div className={styles.textContainer}>
                        <div className={styles.textContainerName}>{props.name}</div>
                        <div className={styles.textContainerJobDescription}>{props.title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
