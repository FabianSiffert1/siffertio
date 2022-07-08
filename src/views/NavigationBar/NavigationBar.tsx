import React from "react";
import styles from "./NavigationBar.module.scss";

import AnimatedTextRouter from "../../components/AnimatedTextRouter/AnimatedTextRouter";

export interface NavigationBarProps {
    routerPosition?: string;
    currentTheme?: string;
}

let routesInNavigationBar: { route: string, routeKey: string }[] = [
    {'route': '/biography', 'routeKey': 'Biography'},
    {'route': '/Nonsense', 'routeKey': 'Projects'},
    {'route': '/contact', 'routeKey': 'Contact'}];


function NavigationBar(props: NavigationBarProps) {
    return (
        <div className={styles.darkTheme}>
            <div className={styles.NavigationBar}>
                <AnimatedTextRouter routesArray={routesInNavigationBar}/>
            </div>
        </div>
    )
}

export default NavigationBar;
