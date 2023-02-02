import styles from "./ProfilePicture.module.scss";
import React from "react";
import language from "../../assets/language/language";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reduxStore/reduxStore";

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
                <div className={styles.profilePicture}>
                    <img src={props.image} alt="Profile Picture" />
                </div>
                <div className={styles.textContainerName}>{props.name}</div>
                <div className={styles.textContainerTitle}>{props.title}</div>

            </div>
        </div>
    );
}
