import React from "react";
import styles from "./NavigationBar.module.scss";
import ImageRouter from "../../components/ImageRouter/ImageRouter";
import Biography from "../../resources/images/buttons/home2.svg";
import Contact from "../../resources/images/buttons/mailClosed.svg";
import DarkMode from "../../resources/images/buttons/darkMode.svg";

function NavigationBar(props: any) {
    const toggleDarkMode = () => {
        alert("Toggling Dark/Lightmode");
    }
    return <div className={styles.NavigationBar}>
        <ImageRouter url={'/biography'} navLinkKey={'Biography'} imagePath={Biography}/>
        <ImageRouter url={'/contact'} navLinkKey={'Contact'} imagePath={Contact}/>
        {/*TEMP DARK MODE BUTTON POS*/}
        <button className={styles.settingsButton}>
            <img className={styles.settingsButtonImage} src={DarkMode} alt="DarkModeToggle" onClick={toggleDarkMode}/>
        </button>
    </div>
}

export default NavigationBar;
