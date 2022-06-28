import React, {useState} from "react";
import styles from "./AnimatedTextRouter.module.scss";
import {NavLink} from "react-router-dom";

export interface AnimatedTextRouterProps {
    routesArray: any;
    style?: string;
}


function AnimatedTextRouter(props: AnimatedTextRouterProps) {
    let itsActive = true;
    return (<>
            {props.routesArray.map((element: any) => <div className={styles.AnimatedTextRouter}>
                    <NavLink
                        to={element.route}
                        key={element.routeKey}
                    >
                        <div className={itsActive ? styles.activeLink : styles.inActiveLink}>
                            {element.routeKey}
                        </div>
                    </NavLink>
                </div>
            )}
        </>
    );
}


export default AnimatedTextRouter;
