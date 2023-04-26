import {useDispatch, useSelector} from "react-redux";
import React, {useState} from 'react';
import styles from './CollapsibleSection.module.scss';
import {Themes} from "../ThemeMenu/ThemeMenu";
import {RootState} from "../../utils/reduxStore/reduxStore";

interface CollapsibleSectionProps {
    header: string,
    sectionContent?: React.ReactNode,
}


export default function CollapsibleSection(props: CollapsibleSectionProps) {
    const currentTheme = useSelector((state: RootState) => state.theme.value);
    const [collapsed, setCollapsed] = useState(true);

    function handleClick() {
        setCollapsed(!collapsed)
    }

    return (
        <div className={styles.CollapsibleSection}>
            <div
                onClick={handleClick}
                className={
                    currentTheme === Themes.DARK
                        ? styles.collapsibleSectionHeaderDark
                        : currentTheme === Themes.LIGHT
                            ? styles.collapsibleSectionHeaderLight
                            : styles.collapsibleSectionHeaderColorful
                }
            >
                {props.header}
            </div>
            <div className={styles.collapsibleSectionContent}
                 style={collapsed ? {visibility: "hidden", maxHeight: "0.1vh"} : {visibility: "visible"}}>
                <div
                    onClick={handleClick}
                    className={
                        currentTheme === Themes.DARK
                            ? styles.collapsibleSectionContentDark
                            : currentTheme === Themes.LIGHT
                                ? styles.collapsibleSectionContentLight
                                : styles.collapsibleSectionContentColorful
                    }
                >
                    {props.sectionContent && props.sectionContent}
                </div>
            </div>
        </div>
    )
}
