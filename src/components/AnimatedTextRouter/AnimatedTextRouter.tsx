import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink, useLocation} from 'react-router-dom';
import {RootState} from '../../utils/reduxStore/reduxStore';

import styles from './AnimatedTextRouter.module.scss';
import language from '../../assets/language/language';

export interface AnimatedTextRouterProps {
    routesArray: { route: string; routeKey: string }[];
    style?: string;
}

function AnimatedTextRouter(props: AnimatedTextRouterProps) {
    const currentTheme = useSelector((state: RootState) => state.theme.value);
    const currentLocation = useLocation().pathname;
    return (
        <>
            {props.routesArray.map((element) => (
                <div className={styles.AnimatedTextRouter} key={element.routeKey}>
                    <NavLink to={element.route} key={element.routeKey}>
                        <div
                            className={
                                currentLocation === element.route
                                    ? currentTheme === language.THEME_DARK_VAR
                                        ? styles.activeLinkDarkTheme
                                        : currentTheme === language.THEME_LIGHT_VAR
                                            ? styles.activeLinkLightTheme
                                            : styles.activeLinkColorfulTheme
                                    : currentTheme === language.THEME_DARK_VAR
                                        ? styles.inactiveLinkDarkTheme
                                        : currentTheme === language.THEME_LIGHT_VAR
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

export default AnimatedTextRouter;
