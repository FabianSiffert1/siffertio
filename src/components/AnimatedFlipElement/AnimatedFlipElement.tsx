import styles from './AnimatedFlipElement.module.scss';
import React from "react";

export interface AnimatedFlipElementProps {
    subtitle?: string;
    source: string;
    altText?: string;
}


export default function AnimatedFlipElement(props: AnimatedFlipElementProps) {
    return (
        <div className={styles.AnimatedFlipElement}>
            <div className={styles.roundImage}>
                <img className={styles.image} src={props.source}
                     alt={props.altText ? props.altText : "Logo.png"}/>
            </div>
        </div>
    );
}