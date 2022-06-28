import React from "react";
import styles from "./NavigationBar.module.scss";

import Biography from "../../resources/images/buttons/home2.svg";
import Contact from "../../resources/images/buttons/mailClosed.svg";
import AnimatedTextRouter from "../../components/AnimatedTextRouter/AnimatedTextRouter";

const routesInNavigationBar = [
    'A','B'
]

function NavigationBar(props: any) {
    return <div className={styles.NavigationBar}>
        <AnimatedTextRouter route={'/biography'} routeKey={'Biography'} routeArray={routesInNavigationBar}/>
        <AnimatedTextRouter route={'/NONSENSE'} routeKey={'Projects'}/>
        <AnimatedTextRouter route={'/contact'} routeKey={'Contact'}/>
    </div>
}

export default NavigationBar;
