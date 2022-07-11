import React from "react";
import language from "../../resources/language/language";
import styles from "./TextButton.module.scss";

export interface TextButtonProps {
    onClickFunction: string;
    children: any;
}


export function TextButton(props: TextButtonProps) {
    return (
        <div className={styles.TextButton}>
            <button onClick={props.onClickFunction}>
                {props.children}
            </button>
        </div>
    );
}
