import React, {useState} from "react";
import styles from "./AnimatedTextRouter.module.scss";
import {NavLink} from "react-router-dom";

export interface AnimatedTextRouterProps {
    route: string;
    routeKey: string;
    style?: string;
    routeArray? : any;
}


function AnimatedTextRouter(props: AnimatedTextRouterProps) {
    let itsActive = true;
    return (
        <div className={styles.AnimatedTextRouter}>
            <NavLink
                style={({isActive}) => {
                    return {
                        color: isActive ? "black" : "",
                    };
                }}
                to={props.route}
                key={props.routeKey}
            >
                <div className={itsActive ? styles.activeLink : styles.inActiveLink}>
                    {props.routeKey}
                    {props.routeArray? props.routeArray.map((element: any) => <div>{element}</div>) : ""}
                </div>
            </NavLink>
        </div>
    );
}


export default AnimatedTextRouter;
