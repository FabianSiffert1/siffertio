import React from 'react';
import styles from "./Home.module.scss";
import {Outlet, useLocation} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";
import FadeInText from "../../components/FadeInText/FadeInText";


const Home = () => {
    const currentLocation = useLocation().pathname;
    let attractScreen = undefined;
    if (currentLocation === "/") {
        attractScreen = true;
    }
    return (
        <div className={styles.Home}>
            {attractScreen ? "" : [<Header/>,
                <FadeInText blockColor={'lightgreen'} textToDisplay={"A work in progress"}/>,<FadeInText blockColor={"lightpink"}></FadeInText> ]}
            <div className={attractScreen ? styles.attractScreen : styles.contentContainer}>
                <Outlet/>
            </div>
            {attractScreen ? "" : <NavigationBar routerPosition={currentLocation}/>}
        </div>
    );
}

export default Home;
