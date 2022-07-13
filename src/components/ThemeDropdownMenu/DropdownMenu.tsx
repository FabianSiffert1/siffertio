import React, {useState} from "react";
import styles from "./DropdownMenu.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {changeToTheme} from "../../utils/reduxStore/theme/themeSlice";

export interface DropdownMenuProps {
    menuTitle: string;
    menuElements: { elementName: string; elementFunction: string; }[];
}

//TODO: refactor to not be hardcoded to theme selection anymore

export function DropdownMenu(props: DropdownMenuProps) {
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
                 className={currentTheme === "lightTheme" ? styles.dropdownButtonLightTheme : currentTheme === "darkTheme" ? styles.dropdownButtonDarkTheme : styles.dropdownButtonColorfulTheme}>
                <div className={styles.dropdownButton}>
                    {props.menuTitle}
                </div>
            </div>
            <div className={styles.dropdownElements} style={{display: display}}>
                {props.menuElements.map((element: any) =>
                    <div
                        className={currentTheme === "lightTheme" ? styles.elementLightTheme : currentTheme === "darkTheme" ? styles.elementDarkTheme : styles.elementColorfulTheme}
                        onClick={() => changeTheme(element.elementFunction)}>{element.elementName}</div>
                )}

            </div>

        </div>
    );
}
