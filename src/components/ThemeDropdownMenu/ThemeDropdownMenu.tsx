import React, {useState} from "react";
import styles from "./ThemeDropdownMenu.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {changeToTheme} from "../../utils/reduxStore/theme/themeSlice";
import language from "../../resources/language/language";

export interface ThemeDropdownMenuProps {
    menuTitle: string;
    menuElements: { elementName: string; elementFunction: string; }[];
}

export function ThemeDropdownMenu(props: ThemeDropdownMenuProps) {
    const [display, setDisplay] = useState('none');
    const currentTheme = useSelector((state: any) => state.theme.value)
    const dispatch = useDispatch()

    function handleClick() {
        if (display === 'none') {
            setDisplay('block')
        } else setDisplay('none')
    }

    function changeTheme(themeToDisplay: string) {
        dispatch(changeToTheme(themeToDisplay))
        setDisplay('none');
    }

    return (
        <div className={styles.DropdownMenu}>
            <div onClick={handleClick}
                 className={currentTheme === language.THEME_DARK_VAR ? styles.dropdownButtonDarkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.dropdownButtonLightTheme : styles.dropdownButtonColorfulTheme}>
                {props.menuTitle}
            </div>
            <div className={styles.dropdownElements} style={{display: display}}>
                {props.menuElements.map((element: any) =>
                    <div
                        className={currentTheme === language.THEME_DARK_VAR ? styles.elementDarkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.elementLightTheme : styles.elementColorfulTheme}
                        key={element.elementName}
                        onClick={() => changeTheme(element.elementFunction)}>{element.elementName}</div>
                )
                }

            </div>

        </div>
    );
}
