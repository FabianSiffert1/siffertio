import React, {useState} from "react";
import styles from "./ImageRouter.module.scss";
import {NavLink} from "react-router-dom";

export interface ImageRouterProps {
    url: string;
    navLinkKey?: string;
    imagePath: string;
    activeImagePath?:string;
    showTitle?: boolean;
}

function ImageRouter(props: ImageRouterProps) {
    const [linkActive, setLinkActive] = useState(false);
    return (
        <div className={styles.ImageRouter}>

            <NavLink
                style={({isActive}) => {
                    setLinkActive(true) ;
                    return {
                        color: isActive ? "black" : "",
                    /*boxShadow: isActive ? "0 0 0 2px black" : "",*/
                    };
                }}
                to={props.url}
                key={props.navLinkKey}
            >
                {/*if linkActive&&activeImagePath -> imageActive*/}
                {props.imagePath ?
                    <img className={styles.image} src={props.imagePath } alt="ImagePlaceholder"/> :
                    props.navLinkKey !== undefined ?
                        props.navLinkKey : "Missing ImageSource & Key Parameters"
                }
                {props.showTitle && <div className={styles.linkTitle}>
                    {props.navLinkKey}
                </div>}
            </NavLink>
        </div>
    );
}

export default ImageRouter;
