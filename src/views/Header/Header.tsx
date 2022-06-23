import React from 'react';
import styles from './Header.module.scss';
import LinkContainer from "../../components/LinkContainer/LinkContainer";
import Logo from "../../resources/images/logo.svg";


function Header() {
    return (
        <>
           <LinkContainer imageSource={Logo} link='/index'/>
        </>
    );
}

export default Header;
