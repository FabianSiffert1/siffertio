import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink, useLocation} from 'react-router-dom';
import {RootState} from '../../utils/reduxStore/reduxStore';

import styles from './NavigationLinks.module.scss';
import {Themes} from "../ThemeMenu/ThemeMenu";

export interface NavigationLinkProps {
    routesArray: { route: string; routeKey: string }[];
    style?: string;
}

function NavigationLinks(props: NavigationLinkProps) {
    const currentTheme = useSelector((state: RootState) => state.theme.value);
    const currentLocation = useLocation().pathname;
    return (
        <>
            {props.routesArray.map((element) => (
                <div className={styles.NavigationLinks} key={element.routeKey}>
                    <NavLink to={element.route} key={element.routeKey}>
                        <div
                            className={
                                currentLocation === element.route
                                    ? currentTheme === Themes.DARK
                                        ? styles.activeLinkDarkTheme
                                        : currentTheme === Themes.LIGHT
                                            ? styles.activeLinkLightTheme
                                            : styles.activeLinkColorfulTheme
                                    : currentTheme === Themes.DARK
                                        ? styles.inactiveLinkDarkTheme
                                        : currentTheme === Themes.LIGHT
                                            ? styles.inactiveLinkLightTheme
                                            : styles.inactiveLinkColorfulTheme
                            }
                        >
                            {element.routeKey}
                        </div>
                    </NavLink>
                </div>
            ))}
        </>
    );
}

export default NavigationLinks;
