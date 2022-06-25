import React from 'react';

import {Outlet} from "react-router-dom";
import styles from "./Home.module.scss";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";


function Home() {
    return (
        <div className={styles.Home}>
            <Header/>
            <div className={styles.contentContainer}>
                <Outlet/>
            </div>
            <NavigationBar/>
        </div>
    );
}

export default Home;
