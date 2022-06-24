import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./NavBar.module.scss";

//TODO: BORDER ON ACTIVE NAVLINK

function NavBar(props: any) {
    return <nav
            className={styles.nav}
        >
            <NavLink
                className={styles.NavLink}
                style={({isActive}) => {
                    return {
                        display: "inline-block",
                        margin: "1rem 0",
                        padding: "1rem",
                        color: isActive ? "black" : "",
                        border: isActive? "solid black" : "",

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
                        border: isActive? "solid black" : "",
                    };
                }}
                to={`/contact`}
                key="Contact"
            >
                Contact
            </NavLink>
        </nav>
}

export default NavBar;
