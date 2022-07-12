import React from "react";
import styles from "./AnimatedTextRouter.module.scss";

import {NavLink, useLocation} from "react-router-dom";

export interface AnimatedTextRouterProps {
    routesArray: any;
    style?: string;
    currentTheme?: string;
}


function AnimatedTextRouter(props: AnimatedTextRouterProps) {
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
    const currentLocation = useLocation().pathname;
    return (<>
            {props.routesArray.map((element: any) => <div className={styles.AnimatedTextRouter} key={element.routeKey}>
                    <NavLink
                        to={element.route}
                        key={element.routeKey}
                    >
                        <div className={currentLocation === element.route ? darkTheme ? styles.activeLinkDarkTheme : lightTheme ? styles.activeLinkLightTheme : styles.activeLinkColorfulTheme : styles.inActiveLink}>
                            {element.routeKey}
                        </div>
                    </NavLink>
                </div>
            )}
        </>
    );
}


export default AnimatedTextRouter;
