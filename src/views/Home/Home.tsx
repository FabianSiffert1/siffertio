import React from 'react';

import {Outlet} from "react-router-dom";
import styles from "./Home.module.scss";
import NavigationBar from "../Navigation/NavigationBar";
import Header from "../Header/Header";


function Home() {
    return (
        <div id={"Home"}>
            <Header/>
            <div id={"contentContainer"}>
            <Outlet/>
            </div>
            <NavigationBar/>
        </div>
    );
}

export default Home;
