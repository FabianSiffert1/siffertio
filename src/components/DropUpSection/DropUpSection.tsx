import React, {useState} from "react";
import styles from "./DropUpSection.module.scss";

import {useSelector} from "react-redux";
import language from "../../assets/language/language";

export interface DropUpSectionProps {
    children?: any;
    sectionTitle?: any;
    isOpened?: boolean;
}

export function DropUpSection(props: DropUpSectionProps) {
    const [display, setDisplay] = useState('block');
    const currentTheme = useSelector((state: any) => state.theme.value)
    function handleClick() {
        if (display === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    return (
        <div className={styles.DropUpSection}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                <div onClick={handleClick} className={styles.dropUpColoredBar}>
                    <div className={styles.dropUpTitle}>
                        {props.sectionTitle && props.sectionTitle}
                    </div>
                </div>
                <div className={styles.dropUpContent} style={{display: display}}>
                    {props.children && props.children}
                </div>
                {display != 'block' ? <div onClick={handleClick} className={styles.dropUpIndicator}>
                    {display === 'block' ? "" : '^' }
                </div> : "" }
            </div>
        </div>
    );
}