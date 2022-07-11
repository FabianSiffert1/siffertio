import React, {useState} from 'react';
import styles from "./Home.module.scss";
import {Outlet, useLocation} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";

const Home = () => {
    const defaultTheme ='lightTheme';
    const [currentTheme, setCurrentTheme] = useState<string>(defaultTheme);

    const currentLocation = useLocation().pathname;
    let welcomeScreen = undefined;
    if (currentLocation === "/") {
        welcomeScreen = true;
    }

    let darkTheme = false;
    let lightTheme = false;
    let colorfulTheme = false;

    switch (currentTheme) {
        case("lightTheme"):
            lightTheme = true;
            break;
        case("colorfulTheme"):
            colorfulTheme = true;
            break;
        default:
            darkTheme = true;
    }

    return (
        <div className={styles.Home}>
            <div className={darkTheme ? styles.darkTheme : lightTheme ? styles.lightTheme : styles.colorfulTheme}>
                {welcomeScreen ? "" : [<Header currentTheme={currentTheme} currentThemeSetter={setCurrentTheme}/>]}
                <div className={welcomeScreen ? styles.welcomeScreen : styles.contentContainer}>
                    <Outlet/>
                </div>
                <NavigationBar currentTheme={currentTheme} routerPosition={currentLocation} />
            </div>
        </div>
    );
}

export default Home;
