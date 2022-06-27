import React from "react";
import styles from "./NavigationBar.module.scss";

import ImageRouter from "../../components/ImageRouter/ImageRouter";

import Biography from "../../resources/images/buttons/home2.svg";
import Contact from "../../resources/images/buttons/mailClosed.svg";
import Tool from "../../resources/images/buttons/toolSmall.svg";
import ActiveContact from "../../resources/images/buttons/mailOpen.svg";
import DarkMode from "../../resources/images/buttons/darkMode.svg";

function NavigationBar(props: any) {
    const toggleDarkMode = () => {
        alert("Toggling Dark/Lightmode");
    }
    return <div className={styles.NavigationBar}>
        <div className={styles.NavigationItems}>
            <ImageRouter url={'/biography'} navLinkKey={'Biography'} imagePath={Biography} showTitle={true}/>
            <ImageRouter url={'/contact'} navLinkKey={'Contact'} imagePath={Contact} activeImagePath={ActiveContact} showTitle={true}/>
            <ImageRouter url={'/contact'} navLinkKey={'Tools'} imagePath={Tool} showTitle={true}/>
            <button className={styles.settingsButton}>
                <img className={styles.settingsButtonImage} src={DarkMode} alt="DarkModeToggle"
                     onClick={toggleDarkMode}/>
            </button>
        </div>
    </div>
}

export default NavigationBar;
