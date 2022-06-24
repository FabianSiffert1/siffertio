import React from "react";
import styles from "./NavigationBar.module.scss";
import {NavLink} from "react-router-dom";


function NavigationBar(props: any) {
    return <nav
        className={styles.Navigation}
    >
        <NavLink
            className={styles.NavLink}
            style={({isActive}) => {
                return {
                    display: "inline-block",
                    margin: "1rem 0",
                    padding: "1rem",
                    color: isActive ? "black" : "",
                    border: isActive ? "solid black" : "",

                };
            }}
            to={`/biography`}
            key="biography"
        >
            Biography
        </NavLink>
        <NavLink
            style={({isActive}) => {
                return {
                    display: "inline-block",
                    margin: "1rem 0",
                    padding: "1rem",
                    color: isActive ? "black" : "",
                    border: isActive ? "solid black" : "",
                };
            }}
            to={`/contact`}
            key="Contact"
        >
            Contact
        </NavLink>
    </nav>
}

export default NavigationBar;
