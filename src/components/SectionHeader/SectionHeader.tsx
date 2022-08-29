import React from "react";
import styles from "./SectionHeader.module.scss";


export interface SectionHeaderProps {
    color?: string;
    title?: string;
}

export function SectionHeader(props: SectionHeaderProps) {
    return (
        <div className={styles.SectionHeaderContainer}>
            <div className={styles.sectionHeaderContent}>
                {props.title && <div className={styles.sectionHeaderTitle}> {props.title} </div>}
            </div>
        </div>
    );
}
