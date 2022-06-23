import React from "react";
import styles from "./Navigation.module.scss";
import LinkContainer from "../../components/LinkContainer/LinkContainer";
import Logo from "../../resources/images/logo.svg";
import NavBar from "../../components/NavBar/NavBar";


function Navigation(props: any) {
    return  <div className={styles.Navigation}>
        {/*<LinkContainer imageSource={Logo} link='/index'/> */}
        <NavBar/>
    </div>
}

export default Navigation;
