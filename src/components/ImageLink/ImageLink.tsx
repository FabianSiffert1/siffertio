import React from "react";
import language from "../../resources/language/language";
import styles from "./ImageLink.module.scss";
import {Link} from "react-router-dom";

export interface LinkRouterProps {
    url: string;
    imagePath?: string;
}


function ImageLink( props :LinkRouterProps) {
    return (
            <div className={styles.ImageLink}>
                <header className={styles.header}>
                    <a
                        className={styles.link}
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={props.imagePath}
                            className={styles.image}
                            alt="TEMP"
                        />
                    </a>
                </header>
            </div>
    );
}

export default ImageLink;
