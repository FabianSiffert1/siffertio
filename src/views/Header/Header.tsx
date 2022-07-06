import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import FadeInText from "../../components/FadeInText/FadeInText";

interface headerProps{
    currentThemeSetter: (theme: string) => void,
}

export default function Header(props : headerProps) {
    function changeTheme(){
        props.currentThemeSetter("lightTheme")
    }
    return (
        <div className={styles.Header}>
            <NavLink to={'/'} >
                <FadeInText textToDisplay={'siffert[.io]'} mainFontSize={"5vh"}/>
                <FadeInText textToDisplay={'a work in progress'} mainFontSize={"2vh"} leftToRightAnimation={false}/>
            </NavLink>
            <button onClick={changeTheme}>
                Theme
            </button>
        </div>
    );
}
