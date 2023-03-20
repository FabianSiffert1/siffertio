import React from 'react';
import {useSelector} from "react-redux";
import styles from './ToggleButton.module.scss';
import {RootState} from "../../utils/reduxStore/reduxStore";
import {Themes} from "../ThemeMenu/ThemeMenu";

export interface ToggleButtonProps {
    id: string;
    checked: boolean;
    onChange: () => void;
    name?: string;
    children?: React.ReactNode;
}

export default function ToggleButton(props: ToggleButtonProps) {
    const currentTheme = useSelector((state: RootState) => state.theme.value);
    return (
        <div className={styles.ToggleButton}>
            <div
                className={
                    currentTheme === Themes.DARK
                        ? styles.darkTheme
                        : currentTheme === Themes.LIGHT
                            ? styles.lightTheme
                            : styles.colorfulTheme
                }
            >
                <input
                    type="checkbox"
                    id={props.id}
                    name={props.name}
                    checked={props.checked}
                    onChange={props.onChange}
                    className={styles.checkbox}
                />
                <label htmlFor={props.id} className={styles.toggleStateIndicator}>
                    {props.children}
                </label>
            </div>
        </div>
    );
}
