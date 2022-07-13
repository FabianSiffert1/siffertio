import React, {useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import styles from "./Home.module.scss";

import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";
import {Counter} from "../../components/Counter/Counter";

const Home = () => {
    const defaultTheme = 'lightTheme';
    const [currentTheme, setCurrentTheme] = useState<string>(defaultTheme);

    let atWelcomeScreen = undefined;
    if (useLocation().pathname === "/") {
        atWelcomeScreen = true;
    }

    return (
        <div className={styles.Home}>
            <Counter/>
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
