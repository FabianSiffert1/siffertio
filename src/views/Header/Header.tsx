import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import FadeInText from "../../components/FadeInText/FadeInText";


export default function Header() {
    return (
        <div className={styles.Header}>
            <NavLink to={'/'} >
                <FadeInText textToDisplay={'siffert[.io]'} mainFontSize={"5vh"} mainBlockWidth={"10vw"}/>
                <FadeInText textToDisplay={'a work in progress'} mainFontSize={"2vh"} leftToRightAnimation={false}/>
            </NavLink>
        </div>
    );
}
