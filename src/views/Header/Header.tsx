import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import FadeInText from "../../components/FadeInText/FadeInText";


function Header() {
    return (
        <div className={styles.Header}>
            <NavLink className="Header_NavLink" to={'/'} key={'AttractScreen'}>
                <FadeInText textToDisplay={"siffert.io"}>a work in progress</FadeInText>
            </NavLink>
        </div>
    );
}

export default Header;
