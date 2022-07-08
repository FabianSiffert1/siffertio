import React, {useState} from 'react';
import styles from "./Home.module.scss";
import {Outlet, useLocation} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";

const Home = () => {
    const [currentTheme, setCurrentTheme] = useState<string>(`darkTheme`);

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
                {currentTheme}
                {welcomeScreen ? "" : [<Header currentTheme={currentTheme} currentThemeSetter={setCurrentTheme}/>]}
                <div className={welcomeScreen ? styles.welcomeScreen : styles.contentContainer}>
                    <Outlet/>
                </div>
                <NavigationBar routerPosition={currentLocation} />
            </div>
        </div>
    );
}

export default Home;
