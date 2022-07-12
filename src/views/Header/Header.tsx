import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import FadeInText from "../../components/FadeInText/FadeInText";
import {TextButton} from "../../components/TextButton/TextButton";
import language from "../../resources/language/language";
import {DropdownMenu} from "../../components/DropdownMenu/DropdownMenu";

interface headerProps {
    currentTheme : string,
    currentThemeSetter: (theme: string) => void,
}

let settingsMenuItems: { elementName: string, elementFunction: string }[] = [
    {'elementName': 'Dark', 'elementFunction': 'darkTheme'},
    {'elementName': 'Light', 'elementFunction': 'lightTheme'},
    {'elementName': 'Colorful', 'elementFunction': 'colorfulTheme'}
];

export default function Header(props: headerProps) {

    function changeTheme() {
        if(props.currentTheme == "darkTheme"){
        props.currentThemeSetter("lightTheme")
        }
        else{
            props.currentThemeSetter("darkTheme")
        }
    }

    return (
        <div className={styles.Header}>
            <div className={styles.headerElements}>
            <NavLink to={'/'}>
                <FadeInText textToDisplay={language.HEADER_TITLE} mainFontSize={"5vh"}/>
                <FadeInText textToDisplay={language.HEADER_SUBTITLE} mainFontSize={"2vh"} leftToRightAnimation={false}/>
            </NavLink>
            <div className={styles.buttonContainer}>
                <DropdownMenu currentTheme={props.currentTheme} currentThemeSetter={props.currentThemeSetter} menuTitle={language.SETTINGS_BUTTON} menuElements={settingsMenuItems}></DropdownMenu>
                {/* <TextButton onClickFunction={changeTheme}>{language.SETTINGS_BUTTON}</TextButton>
            */}</div>
            </div>
        </div>
    );
}
