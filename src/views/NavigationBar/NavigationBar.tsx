import React from "react";
import styles from "./NavigationBar.module.scss";
import language from "../../assets/language/language";

import AnimatedTextRouter from "../../components/AnimatedTextRouter/AnimatedTextRouter";
import {useSelector} from "react-redux";


export interface NavigationBarProps {
    routerPosition?: string;
    currentTheme?: string;
}

let routesInNavigationBar: { route: string, routeKey: string }[] = [
    {'route': '/', 'routeKey': language.ROUTE_ABOUT},
    {'route': '/projects', 'routeKey': language.ROUTE_PROJECTS},
    //{'route': '/contact', 'routeKey': language.ROUTE_CONTACT}
];


function NavigationBar(props: NavigationBarProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
        <div  className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.dropdownButtonColorfulTheme}>
            <div className={styles.NavigationBar}>
                <AnimatedTextRouter currentTheme={props.currentTheme} routesArray={routesInNavigationBar}/>
            </div>
        </div>
    )
}

export default NavigationBar;
