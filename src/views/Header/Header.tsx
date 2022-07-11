import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import FadeInText from "../../components/FadeInText/FadeInText";
import {TextButton} from "../../components/TextButton/TextButton";

interface headerProps {
    currentTheme : string,
    currentThemeSetter: (theme: string) => void,
}

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
                <FadeInText textToDisplay={'siffert[.io]'} mainFontSize={"5vh"}/>
                <FadeInText textToDisplay={'a work in progress'} mainFontSize={"2vh"} leftToRightAnimation={false}/>
            </NavLink>
            <div className={styles.buttonContainer}>
                {/*<TextButton onClickFunction={changeTheme}>Theme</TextButton>*/}
                <button onClick={changeTheme}>
                    Theme
                </button>
            </div>
            </div>
        </div>
    );
}
