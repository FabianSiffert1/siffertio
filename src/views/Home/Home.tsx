import React from 'react';
import styles from "./Home.module.scss";
import {Outlet, useLocation} from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Header from "../../components/Header/Header";


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
            <div className={ attractScreen ? styles.attractScreen :styles.contentContainer}>
                <Outlet/>
            </div>
            {attractScreen ? "" :  <NavigationBar/>}
        </div>
    );
}

export default Home;
