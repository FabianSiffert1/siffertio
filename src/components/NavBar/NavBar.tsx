import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./NavBar.module.scss";

//TODO: BORDER ON ACTIVE NAVLINK

function NavBar(props: any) {
    return <div className={styles.NavBar}>
        <nav
            className={styles.nav}
        >
            <NavLink
                style={({isActive}) => {
                    return {
                        display: "inline-block",
                        margin: "1rem 0",
                        padding: "1rem",
                        color: isActive ? "red" : "",
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
                        color: isActive ? "red" : "",
                    };
                }}
                to={`/contact`}
                key="Contact"
            >
                Contact
            </NavLink>
        </nav>
    </div>
}

export default NavBar;
