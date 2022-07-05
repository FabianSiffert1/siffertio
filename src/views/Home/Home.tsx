import React from 'react';
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
    return (
        <div className={styles.Home}>
            {welcomeScreen ? "" : [<Header/>]}
            <div className={welcomeScreen? styles.welcomeScreen : styles.contentContainer}>
                <Outlet/>
            </div>
            <NavigationBar routerPosition={currentLocation}/>
        </div>
    );
}

export default Home;
