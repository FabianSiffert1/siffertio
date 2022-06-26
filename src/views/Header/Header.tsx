import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";


function Header() {
    return (
        <div className={styles.Header}>
            <NavLink to={'/'} key={'AttractScreen'}>
                <div>Siffert.io</div>
                <div>
                    <span>  &#123;a work in progress&#125; </span>
                </div>

            </NavLink>
        </div>
    );
}

export default Header;
