import React from 'react';
import styles from "./Home.module.scss";
import {Outlet, useLocation} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";

const Home = () => {
    const currentLocation = useLocation().pathname;
    let attractScreen = undefined;
    if (currentLocation === "/") {
        attractScreen = true;
    }
    return (
        <div className={styles.Home}>
            {attractScreen ? "" : [<Header/>]}
            <div className={attractScreen? styles.attractScreen : styles.contentContainer}>
                <Outlet/>
            </div>
            <NavigationBar routerPosition={currentLocation}/>
        </div>
    );
}

export default Home;
