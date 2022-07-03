import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import FadeInText from "../../components/FadeInText/FadeInText";


function Header() {
    return (
        <div className={styles.Header}>
            <NavLink to={'/'} key={'AttractScreen'}>
                <FadeInText blockColor={"#212121"} textToDisplay={"siffert.io"}></FadeInText>
            </NavLink>
        </div>
    );
}

export default Header;
