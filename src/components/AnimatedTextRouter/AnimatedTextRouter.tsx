import React from "react";
import styles from "./AnimatedTextRouter.module.scss";

import {NavLink, useLocation} from "react-router-dom";
import language from "../../assets/language/language";
import {useSelector} from "react-redux";

export interface AnimatedTextRouterProps {
    routesArray: { route: string; routeKey: string; }[];
    style?: string;
    currentTheme?: string;
}


function AnimatedTextRouter(props: AnimatedTextRouterProps) {
    const currentTheme = useSelector((state: any) => state.theme.value)
    const currentLocation = useLocation().pathname;
    return (<>
            {props.routesArray.map((element: any) => <div className={styles.AnimatedTextRouter} key={element.routeKey}>
                    <NavLink
                        to={element.route}
                        key={element.routeKey}
                    >
                        <div
                            className={currentLocation === element.route ? currentTheme === language.THEME_DARK_VAR ? styles.activeLinkDarkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.activeLinkLightTheme : styles.activeLinkColorfulTheme : styles.inActiveLink}>
                            {element.routeKey}
                        </div>
                    </NavLink>
                </div>
            )}
        </>
    );
}


export default AnimatedTextRouter;
