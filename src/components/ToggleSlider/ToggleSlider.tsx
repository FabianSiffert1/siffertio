import styles from "./ToggleSlider.module.scss";
import React from "react";

export interface ToggleSwitchProps {
    id: string,
    checked: boolean,
    onChange: (...args: any[]) => void,
    name?: string,
    optionLabels: any[],
}


export default function ToggleSlider(props: ToggleSwitchProps) {
    return (
                <div className={styles.ToggleSlider}>
                    <input type="checkbox" id={props.id} name={props.name} checked={props.checked} onChange={props.onChange} className={styles.checkbox}/>
                    <label className={styles.label} htmlFor={props.id}>{props.checked? props.optionLabels[0] : props.optionLabels[1]}</label>
                </div>
    );
}


ToggleSlider.defaultProps = {
    optionLabels: ["Yes", "No"],
};

