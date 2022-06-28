import React from "react";
import styles from "./NavigationBar.module.scss";

import Biography from "../../resources/images/buttons/home2.svg";
import Contact from "../../resources/images/buttons/mailClosed.svg";
import {NavLink} from "react-router-dom";

function NavigationBar(props: any) {
    return <div className={styles.NavigationBar}>
        <div className={styles.NavigationItems}>
                <div className={styles.activeLink}> <NavLink to={'/biography'} key={'Biography'}>Biography</NavLink></div>
            <div className={styles.inactiveLink}> <NavLink to={'/contact'} key={'Contact'}>Contact</NavLink></div>
        </div>
    </div>
}

export default NavigationBar;
