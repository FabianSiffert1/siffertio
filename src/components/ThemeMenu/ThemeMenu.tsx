import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './ThemeMenu.module.scss';
import {changeToTheme} from '../../utils/reduxStore/theme/themeSlice';
import language from '../../assets/language/language';
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
    const [themeIcon, setThemeIcon] = useState(iconSun)

    function updateThemeIcon(themeToDisplay: string) {
        if (themeToDisplay === Themes.DARK) {
            setThemeIcon(iconMoon)
            // eslint-disable-next-line no-console
            console.log("themesDark");
        }
        if (themeToDisplay === Themes.LIGHT) {
            setThemeIcon(iconSun)
            // eslint-disable-next-line no-console
            console.log("themesLight");
        }

    }

    const [display, setDisplay] = useState('none');
    const dispatch = useDispatch();


    function handleClick() {
        if (display === 'none') {
            setDisplay('block');
        } else setDisplay('none');
    }

    function changeTheme(themeToDisplay: string) {
        dispatch(changeToTheme(themeToDisplay));
        updateThemeIcon(themeToDisplay)
        setDisplay('none');
    }

    return (
        <div className={styles.ThemeMenu}>
            <div
                onClick={handleClick}
                className={
                    currentTheme === Themes.DARK
                        ? styles.themeMenuButtonDarkTheme
                        : currentTheme === Themes.LIGHT
                            ? styles.themeMenuButtonLightTheme
                            : styles.themeMenuButtonColorfulTheme
                }
            >
                {themeIcon && <img src={themeIcon} alt="themeIcon"/> || props.menuTitle}
            </div>
            <div className={styles.themeMenuElements} style={{display}}>
                {props.menuElements.map((element) => (
                    <div
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
                                currentTheme === Themes.DARK &&
                                element.elementName === language.THEME_DARK
                                    ? 'none'
                                    : currentTheme === Themes.LIGHT &&
                                    element.elementName === language.THEME_LIGHT
                                        ? 'none'
                                        : currentTheme === Themes.COLORFUL &&
                                        element.elementName === language.THEME_COLORFUL
                                            ? 'none'
                                            : '',
                        }}
                        onClick={() => changeTheme(element.elementFunction)}
                    >
                        {element.elementName}
                    </div>
                ))}
            </div>
        </div>
    );
}
