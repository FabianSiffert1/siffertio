import React from "react";
import styles from "./TableSection.module.scss";

import {useSelector} from "react-redux";
import language from "../../assets/language/language";

export interface TableSectionProps {
    tableTitle?: string;
    tableSubtitle?: string;
    children: any;
}

export function TableSection(props: TableSectionProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)


    return (
        <div className={styles.TableSection}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                {props.tableTitle && <div className={styles.tableTitle}>{props.tableTitle}</div>}
                {props.tableSubtitle && <div className={styles.tableSubtitle}>{props.tableSubtitle}</div>}
                <div className={styles.tableContent}>
                    {React.Children.map(props.children, child => {
                        return <div key={child} className={styles.tableElement}>{child}</div>
                    })}
                </div>
            </div>
        </div>
    );
}
