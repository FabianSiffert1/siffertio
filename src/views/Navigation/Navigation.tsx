import React from 'react';
import styles from './Navigation.module.scss';
import language from '../../assets/language/language';

import NavigationLinks from '../../components/NavigationLinks/NavigationLinks';
import {ThemeComponent} from "../../components/ThemeComponent/ThemeComponent";


const routesInNavigationBar: { route: string; routeKey: string }[] = [
    {route: '/skills', routeKey: language.ROUTES_SKILLS},
    {route: '/', routeKey: language.ROUTE_ABOUT},
    {route: '/projects', routeKey: language.ROUTE_PROJECTS},
];

function Navigation() {
    return (
        <div className={styles.Navigation}>
            <ThemeComponent>
                <div className={styles.navigationLinks}>
                    <NavigationLinks
                        routesArray={routesInNavigationBar}
                    />
                </div>
            </ThemeComponent>
        </div>
    );
}

export default Navigation;
