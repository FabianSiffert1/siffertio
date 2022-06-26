import React from 'react';

import {Outlet, useLocation} from "react-router-dom";
import styles from "./Home.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";


const Home = () => {
    const location = useLocation();
    return (
        <div className={styles.Home}>
            <Header/>
            <div>
                {location.pathname}
            </div>
            <div className={styles.contentContainer}>
                <Outlet/>
            </div>
            <NavigationBar/>
        </div>
    );
}

export default Home;
