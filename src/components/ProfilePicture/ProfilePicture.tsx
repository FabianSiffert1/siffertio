import React from 'react';
import {useSelector} from 'react-redux';
import styles from './ProfilePicture.module.scss';
import {RootState} from '../../utils/reduxStore/reduxStore';
import {Themes} from "../ThemeMenu/ThemeMenu";

export interface ProfilePictureProps {
    name: string;
    title: string;
    basedIn: string;
    image: string;
}

export default function ProfilePicture(props: ProfilePictureProps) {
    const currentTheme = useSelector((state: RootState) => state.theme.value);
    return (
        <div className={styles.ProfilePicture}>
            <div
                className={
                    currentTheme === Themes.DARK
                        ? styles.darkTheme
                        : currentTheme === Themes.LIGHT
                            ? styles.lightTheme
                            : styles.colorfulTheme
                }
            >
                <div className={styles.contentContainer}>
                    <img src={props.image} alt="Profile Picture"/>
                    <div className={styles.textContainer}>
                        <div className={styles.textContainerName}>{props.name}</div>
                        <div className={styles.textContainerJobDescription}>{props.title}</div>
                        <div className={styles.textContainerBasedIn}>{props.basedIn}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
