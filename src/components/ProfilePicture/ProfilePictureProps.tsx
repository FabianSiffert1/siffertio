import styles from './ProfilePicture.module.scss';
import React from "react";

export interface ProfilePictureProps {
    subtitle?: string;
    source: string;
    altText?: string;
}


export default function ProfilePicture(props: ProfilePictureProps) {
    return (
        <div className={styles.RoundImage}>
            <div className={styles.roundImage}>
                <img className={styles.image} src={props.source}
                     alt={props.altText ? props.altText : "Logo.png"}/>
            </div>
        </div>
    );
}