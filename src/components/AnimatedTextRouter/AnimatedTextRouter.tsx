import React from "react";
import styles from "./AnimatedTextRouter.module.scss";
import {NavLink, useLocation} from "react-router-dom";

export interface AnimatedTextRouterProps {
    routesArray: any;
    style?: string;
}


function AnimatedTextRouter(props: AnimatedTextRouterProps) {
    const currentLocation = useLocation().pathname;
    return (<>
            {props.routesArray.map((element: any) => <div className={styles.AnimatedTextRouter} key={element.routeKey}>
                    <NavLink
                        to={element.route}
                        key={element.routeKey}
                    >
                        <div className={currentLocation === element.route ? styles.activeLink : styles.inActiveLink}>
                            {element.routeKey}
                        </div>
                    </NavLink>
                </div>
            )}
        </>
    );
}


export default AnimatedTextRouter;
