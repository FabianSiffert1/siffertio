import React, {useState} from 'react';
import styles from "./Home.module.scss";
import {Outlet, useLocation} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";

const Home = () => {
    const defaultTheme = 'lightTheme';
    const [currentTheme, setCurrentTheme] = useState<string>(defaultTheme);

    let atWelcomeScreen = undefined;
    if (useLocation().pathname === "/") {
        atWelcomeScreen = true;
    }


    return (
        <div className={styles.Home}>
            <div
                className={currentTheme === "lightTheme" ? styles.lightTheme : currentTheme === "darkTheme" ? styles.darkTheme : styles.colorfulTheme}>
                {atWelcomeScreen ? "" : [<Header currentTheme={currentTheme} currentThemeSetter={setCurrentTheme}/>]}
                <div className={atWelcomeScreen ? styles.welcomeScreen : styles.contentContainer}>
                    <Outlet/>
                </div>
                <NavigationBar currentTheme={currentTheme} routerPosition={"/"}/>
            </div>
        </div>
    );
}

export default Home;
