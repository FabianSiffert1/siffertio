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
            <ImageRouter route={'/biography'} routeKey={'Biography'} imagePath={Biography} showRouteKeyAsTooltip={true}/>
            <ImageRouter route={'/contact'} routeKey={'Projects'} imagePath={Tool} showRouteKeyAsTooltip={true}/>
            <ImageRouter route={'/contact'} routeKey={'Contact'} imagePath={Contact} activeImagePath={ActiveContact} showRouteKeyAsTooltip={true}/>
            <button className={styles.settingsButton}>
                <img className={styles.settingsButtonImage} src={DarkMode} alt="DarkModeToggle"
                     onClick={toggleDarkMode}/>
            </button>
        </div>
    </div>
}

export default NavigationBar;
