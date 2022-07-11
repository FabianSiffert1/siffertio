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
    let darkTheme = false;
    let lightTheme = false;
    let colorfulTheme = false;

    switch (props.currentTheme) {
        case("lightTheme"):
            lightTheme = true;
            break;
        case("colorfulTheme"):
            colorfulTheme = true;
            break;
        default:
            darkTheme = true;
    }

    return (
        <div className={darkTheme ? styles.darkTheme : lightTheme ? styles.lightTheme : styles.colorfulTheme}>
            <div className={styles.NavigationBar}>
                <AnimatedTextRouter currentTheme={props.currentTheme} routesArray={routesInNavigationBar}/>
            </div>
        </div>
    )
}

export default NavigationBar;
