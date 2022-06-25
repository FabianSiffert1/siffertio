import React from "react";
import styles from "./NavigationBar.module.scss";
import {NavLink} from "react-router-dom";
import ImageRouter from "../../components/ImageRouter/ImageRouter";
import Biography from "../../resources/images/buttons/home2.svg";
import Contact from "../../resources/images/buttons/mailClosed.svg";

function NavigationBar(props: any) {
    return <div className={styles.NavigationBar}>
        <ImageRouter url={'/biography'} navLinkKey={'Biography'} imagePath={Biography}/>
        <ImageRouter url={'/contact'} navLinkKey={'Contact'} imagePath={Contact}/>
    </div>
}

export default NavigationBar;
