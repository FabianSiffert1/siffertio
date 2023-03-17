import React from 'react';
import styles from './Navigation.module.scss';
import language from '../../assets/language/language';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import {ThemeComponent} from "../../components/ThemeComponent/ThemeComponent";


const routesInNavigationBar: { route: string; routeKey: string }[] = [
    {route: '/', routeKey: language.ROUTE_ABOUT},
    {route: '/bio', routeKey: language.ROUTE_BIOGRAPHY},
    {route: '/projects', routeKey: language.ROUTE_PROJECTS},
];

function Navigation() {
    return (
        <div className={styles.Navigation}>
            <ThemeComponent>
                <div className={styles.navigationLinks}>
                    <NavigationBar
                        routesArray={routesInNavigationBar}
                    />
                </div>
            </ThemeComponent>
        </div>
    );
}

export default Navigation;
