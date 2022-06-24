import React from 'react';

import {Outlet} from "react-router-dom";
import styles from "./Home.module.scss";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";


function Home() {
    return (
        <div id={"Home"}>
            <Header/>
            <div id={"contentContainer"}>
            <Outlet/>
            </div>
            <Navigation/>
        </div>
    );
}

export default Home;
