import React from "react";
import styles from "./ContentSection.module.scss";

export interface ContentSectionProps {
    sectionText?: string;
    children: any;
}

export function ContentSection(props: ContentSectionProps) {
    return (
        <div className={styles.ContentSection}>
            { props.sectionText && <div className={styles.contentText}>
                {props.sectionText}
            </div>}
            <div className={styles.content}>
                    {props.children}
            </div>
        </div>
    );
}
