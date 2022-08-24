import React from "react";
import styles from "./ColoredShape.module.scss";


export interface ColoredShapeProps {
    color?: string;
    title?: string;
}

export function ColoredShape(props: ColoredShapeProps) {
    return (
        <div className={styles.ColoredShapeContainer}>
            <div className={styles.coloredShape}>
                {props.title && <div className={styles.coloredShapeTitle}> {props.title} </div>}
            </div>
        </div>
    );
}
