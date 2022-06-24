import React from "react";
import language from "../../resources/language/language";
import styles from "./ImageRouter.module.scss";
import {NavLink} from "react-router-dom";


function ImageRouter(props: any) {
    return (
        <NavLink
            className={styles.ImageRouter}
            style={({isActive}) => {
                return {
                    display: "inline-block",
                    margin: "1rem 0",
                    padding: "1rem",
                    color: isActive ? "black" : "",
                    border: isActive ? "solid black" : "none",

                };
            }}
            to={props.url}
            key={props.navLinkKey}
        >

            {props.imagePath ?
                <img className={styles.image} src={props.imagePath} alt="ImagePlaceholder"/> :
                props.navLinkKey !== undefined ?
                    props.navLinkKey : "Missing ImageSource & Key Parameters"
            }
        </NavLink>

    );
}

export default ImageRouter;
