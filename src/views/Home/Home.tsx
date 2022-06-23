import React from 'react';

import { Outlet} from "react-router-dom";
import styles from "./Home.module.scss";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";

//TODO: EXPORT NAVBAR TO COMPONENT
function Home() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Navigation/>
        </>
    );
}

export default Home;
