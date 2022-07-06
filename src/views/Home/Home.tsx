import React, {useState} from 'react';
import styles from "./Home.module.scss";
import {Outlet, useLocation} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";

const Home = () => {
    const currentLocation = useLocation().pathname;
    let welcomeScreen = undefined;
    if (currentLocation === "/") {
        welcomeScreen = true;
    }

    const [currentTheme, setCurrentTheme] = useState<string>("darkTheme");

    return (
        <div className={styles.Home}>
            {currentTheme}
            {welcomeScreen ? "" : [<Header currentThemeSetter = {setCurrentTheme}/>]}
            <div className={welcomeScreen? styles.welcomeScreen : styles.contentContainer}>
                <Outlet/>
            </div>
            <NavigationBar routerPosition={currentLocation}/>
        </div>
    );
}

export default Home;
