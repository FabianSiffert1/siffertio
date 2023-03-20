import React from 'react';
import {useSelector} from "react-redux";
import styles from './ToggleButton.module.scss';
import language from "../../assets/language/language";
import {RootState} from "../../utils/reduxStore/reduxStore";

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
                    currentTheme === language.THEME_DARK_VAR
                        ? styles.darkTheme
                        : currentTheme === language.THEME_LIGHT_VAR
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
