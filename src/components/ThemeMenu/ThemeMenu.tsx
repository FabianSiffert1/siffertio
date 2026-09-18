import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './ThemeMenu.module.scss';
import {changeToTheme} from '../../utils/reduxStore/theme/themeSlice';
import {RootState} from '../../utils/reduxStore/reduxStore';
import {iconMoon, iconSun} from "../../assets/_globalAssetImports";

export enum Themes {
    LIGHT = "lightTheme",
    DARK = "darkTheme",
    COLORFUL = "colorfulTheme"
}

export interface ThemeDropdownMenuProps {
    menuTitle: string;
    menuElements: { elementName: string; elementFunction: Themes, elementIcon?: string }[];
}

export function ThemeMenu(props: ThemeDropdownMenuProps) {
    const currentTheme: Themes = useSelector((state: RootState) => state.theme.value);
    const themeIcon = currentTheme === Themes.DARK ? iconMoon : iconSun;

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    function handleClick() {
        setIsOpen(!isOpen);
    }

    function changeTheme(themeToDisplay: Themes) {
        dispatch(changeToTheme(themeToDisplay));
        setIsOpen(false);
    }

    return (
        <div className={styles.ThemeMenu}>
            <button
                type="button"
                onClick={handleClick}
                aria-expanded={isOpen}
                aria-label={props.menuTitle}
                className={
                    currentTheme === Themes.DARK
                        ? styles.themeMenuButtonDarkTheme
                        : currentTheme === Themes.LIGHT
                            ? styles.themeMenuButtonLightTheme
                            : styles.themeMenuButtonColorfulTheme
                }
            >
                <img src={themeIcon} alt=""/>
            </button>
            <div className={styles.themeMenuElements} style={{display: isOpen ? 'block' : 'none'}}>
                {props.menuElements.map((element) => (
                    <button
                        type="button"
                        className={
                            currentTheme === Themes.DARK
                                ? styles.elementDarkTheme
                                : currentTheme === Themes.LIGHT
                                    ? styles.elementLightTheme
                                    : styles.elementColorfulTheme
                        }
                        key={element.elementName}
                        style={{
                            display:
                                currentTheme === element.elementFunction ? 'none' : '',
                        }}
                        onClick={() => changeTheme(element.elementFunction)}
                    >
                        {element.elementName}
                    </button>
                ))}
            </div>
        </div>
    );
}
