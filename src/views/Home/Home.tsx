import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import styles from "./Home.module.scss";
import language from "../../assets/language/language";

import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";
import {useSelector} from "react-redux";
import {ThemeComponent} from "../../components/ThemeComponent/ThemeComponent";


const Home = () => {

    const currentTheme = useSelector((state: any) => state.theme.value)

    let atWelcomeScreen = undefined;
    if (useLocation().pathname === "/") {
        atWelcomeScreen = true;
    }

    return (
        <div className={styles.Home}>
            <ThemeComponent currentTheme={currentTheme}>
                {atWelcomeScreen ? "" : [<Header/>]}
                <div className={atWelcomeScreen ? styles.welcomeScreen : styles.contentContainer}>
                    <Outlet/>
                </div>
                <NavigationBar currentTheme={currentTheme} routerPosition={"/"}/>
            </ThemeComponent>
        </div>
    );
}

export default Home;
