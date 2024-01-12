import {useSelector} from "react-redux";
import React from 'react';
import {Themes} from "../ThemeMenu/ThemeMenu";
import {RootState} from "../../utils/reduxStore/reduxStore";
import styles from './CollapsibleSection.module.scss';

interface CollapsibleSectionProps {
    popUpText?: string,
    headerImage: string,
    sectionContent?: React.ReactNode,
}


export default function CollapsibleSection(props: CollapsibleSectionProps) {
    const currentTheme = useSelector((state: RootState) => state.theme.value);



    return (
        <div className={styles.CollapsibleSection}>
            <div
                className={
                    currentTheme === Themes.DARK
                        ? styles.collapsibleSectionHeaderDark
                        : currentTheme === Themes.LIGHT
                            ? styles.collapsibleSectionHeaderLight
                            : styles.collapsibleSectionHeaderColorful
                }
            >
                <img className={styles.headerImage} src={props.headerImage} alt={props.popUpText}/>
                <div className={styles.sectionContent}>
                        {props.sectionContent && props.sectionContent}
                </div>
                </div>
        </div>
    )
}
