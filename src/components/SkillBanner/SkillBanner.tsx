import styles from './SkillBanner.module.scss';
import React from "react";


export interface SkillBannerProps {
    text: string;
    color?: string;
}


export default function SkillBanner(props: SkillBannerProps) {
    return (
        <div className={styles.SkillBanner}>
                <div className={styles.container} style={{
                    backgroundColor: props.color,
                }}>
                    <div className={styles.text}>
                        {props.text}
                    </div>
                </div>
        </div>
    );
}