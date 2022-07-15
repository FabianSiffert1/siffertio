import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import FadeInText from "../../components/ColoredBarsAndFadeInText/FadeInText";
import language from "../../resources/language/language";
import {ThemeDropdownMenu} from "../../components/ThemeDropdownMenu/ThemeDropdownMenu";

interface headerProps {
}

let settingsMenuItems: { elementName: string, elementFunction: string }[] = [
    {'elementName': language.THEME_DARK, 'elementFunction': language.THEME_DARK_VAR},
    {'elementName': language.THEME_LIGHT, 'elementFunction': language.THEME_LIGHT_VAR},
];

export default function Header(props: headerProps) {
    return (
        <div className={styles.Header}>
            <div className={styles.headerElements}>
                <NavLink to={'/'}>
                    <FadeInText textToDisplay={language.HEADER_TITLE} mainFontSize={"5vh"}/>
                    <FadeInText textToDisplay={language.HEADER_SUBTITLE} mainFontSize={"2vh"}
                                leftToRightAnimation={false}/>
                </NavLink>
                <div className={styles.buttonContainer}>
                    <ThemeDropdownMenu
                        menuTitle={language.THEME_BUTTON} menuElements={settingsMenuItems}/>
                </div>
            </div>
        </div>
    );
}
