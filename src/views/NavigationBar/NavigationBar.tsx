import React from "react";
import styles from "./NavigationBar.module.scss";

import Biography from "../../resources/images/buttons/home2.svg";
import Contact from "../../resources/images/buttons/mailClosed.svg";
import AnimatedTextRouter from "../../components/AnimatedTextRouter/AnimatedTextRouter";

let routesInNavigationBar:{route: string, routeKey: string}[] = [
    {'route': '/biography', 'routeKey': 'Biography'},
    {'route': '/Nonsense', 'routeKey': 'Projects'},
    {'route': '/contact', 'routeKey': 'Contact'}];

function NavigationBar(props: any) {
    return <div className={styles.NavigationBar}>
        <AnimatedTextRouter routesArray={routesInNavigationBar}/>
    </div>
}

export default NavigationBar;
