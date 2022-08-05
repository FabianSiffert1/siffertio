import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import styles from "./Home.module.scss";
import language from "../../resources/language/language";

import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";
import {useSelector} from "react-redux";


const Home = () => {

    const currentTheme = useSelector((state: any) => state.theme.value)

    let atWelcomeScreen = undefined;
    if (useLocation().pathname === "/") {
        atWelcomeScreen = true;
    }

    return (
        <div className={styles.Home}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                {atWelcomeScreen ? "" : [<Header/>]}
                <div className={atWelcomeScreen ? styles.welcomeScreen : styles.contentContainer}>
                    <Outlet/>
                </div>
                <NavigationBar currentTheme={currentTheme} routerPosition={"/"}/>
            </div>
        </div>
    );
}

export default Home;
