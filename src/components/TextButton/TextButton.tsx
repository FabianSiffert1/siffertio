import React from "react";
import styles from "./TextButton.module.scss";

export interface TextButtonProps {
    onClickFunction: any;
    children: any;
}


export function TextButton(props: TextButtonProps) {
    return (
            <button className={styles.TextButton} onClick={props.onClickFunction}>
                {props.children}
            </button>
    );
}
