import React from "react";
import styles from "./NavigationBar.module.scss";

import AnimatedTextRouter from "../../components/AnimatedTextRouter/AnimatedTextRouter";

export interface NavigationBarProps {
    routerPosition?: string;
}

let routesInNavigationBar: { route: string, routeKey: string }[] = [
    {'route': '/biography', 'routeKey': 'Biography'},
    {'route': '/Nonsense', 'routeKey': 'Projects'},
    {'route': '/contact', 'routeKey': 'Contact'}];


function NavigationBar(props: NavigationBarProps) {
    return (
        <div className={styles.NavigationBar}>
            <AnimatedTextRouter routesArray={routesInNavigationBar}/>
        </div>
    )
}

export default NavigationBar;
