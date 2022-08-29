import styles from './ImageShape.module.scss';
import React from "react";

export interface ImageShapeProps {
    subtitle?: string;
    source: string;
    altText?: string;
}


export default function ImageShape(props: ImageShapeProps) {
    return (
        <div className={styles.ImageShape}>
            <div className={styles.roundImage}>
                <img className={styles.image} src={props.source}
                     alt={props.altText ? props.altText : "Logo.png"}/>
            </div>
        </div>
    );
}