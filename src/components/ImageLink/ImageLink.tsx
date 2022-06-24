import React from "react";
import language from "../../resources/language/language";
import styles from "./ImageLink.module.scss";


function ImageLink( url: string, imageSource: string) {
    return (
            <div className={styles.ImageLink}>
                <header className={styles.header}>
                    <a
                        className={styles.link}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={imageSource}
                            className={styles.image}
                            alt="TEMP"
                        />
                    </a>
                </header>
            </div>
    );
}

export default ImageLink;
