import React from 'react';
import styles from './NavigationBar.module.scss';
import language from '../../assets/language/language';

import AnimatedTextRouter from '../../components/AnimatedTextRouter/AnimatedTextRouter';
import {ThemeComponent} from "../../components/ThemeComponent/ThemeComponent";


const routesInNavigationBar: { route: string; routeKey: string }[] = [
    {route: '/', routeKey: language.ROUTE_ABOUT},
    {route: '/bio', routeKey: language.ROUTE_BIOGRAPHY},
    {route: '/projects', routeKey: language.ROUTE_PROJECTS},
];

function NavigationBar() {
    return (
        <div className={styles.NavigationBar}>
            <ThemeComponent>
                <div className={styles.navigationLinks}>
                    <AnimatedTextRouter
                        routesArray={routesInNavigationBar}
                    />
                </div>
            </ThemeComponent>
        </div>
    );
}

export default NavigationBar;
