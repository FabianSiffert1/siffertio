import React from 'react';

import {Outlet, useLocation} from "react-router-dom";
import styles from "./Home.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";


const Home = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    let attractScreen = undefined;
    if(currentLocation === "/"){
        attractScreen = true;
    }
    return (
        <div className={styles.Home}>
                {attractScreen ? "" :  <Header/>}
            <div className={styles.contentContainer}>
                <Outlet/>
            </div>
            {attractScreen ? "" :  <NavigationBar/>}
        </div>
    );
}

export default Home;
