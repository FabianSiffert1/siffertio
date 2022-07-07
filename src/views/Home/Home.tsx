import React, {useState} from 'react';
import styles from "./Home.module.scss";
import {Outlet, useLocation} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";

const Home = () => {
    const [currentTheme, setCurrentTheme] = useState<string>("darkTheme");

    const currentLocation = useLocation().pathname;
    let welcomeScreen = undefined;
    if (currentLocation === "/") {
        welcomeScreen = true;
    }

    let darkTheme = false;
    let lightTheme = false;
    let nextTheme = false;

    switch (currentTheme){
        case("darkTheme"):
            darkTheme = true;
            break;
        case("lightTheme"):
            lightTheme = true;
            break;
    }

    return (
        <div className={styles.Home}>
                {currentTheme}
                {welcomeScreen ? "" : [<Header currentThemeSetter={setCurrentTheme}/>]}
                <div className={welcomeScreen ? styles.welcomeScreen : styles.contentContainer}>
                    <Outlet/>
                </div>
                <NavigationBar routerPosition={currentLocation}/>
        </div>
    );
}

export default Home;
