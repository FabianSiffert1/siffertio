import React, {useState} from "react";
import styles from "./DropdownMenu.module.scss";

export interface DropdownMenuProps {
    menuTitle: string;
    menuElements: { elementName: string; elementFunction: string; }[];
    currentTheme: string;
    currentThemeSetter: (theme: string) => any;
}


export function DropdownMenu(props: DropdownMenuProps) {
    const [display, setDisplay] = useState('none');
    function handleClick() {
        if (display === 'none') {
            setDisplay('block')
        } else setDisplay('none')
    }

    function changeTheme(themeToDisplay: string) {
        props.currentThemeSetter(themeToDisplay);
        setDisplay('none');
    }

    return (
        <div className={styles.DropdownMenu}>
            <div onClick={handleClick}
                className={props.currentTheme === "lightTheme" ? styles.dropdownButtonLightTheme : props.currentTheme === "darkTheme" ? styles.dropdownButtonDarkTheme : styles.dropdownButtonColorfulTheme}>
                <div className={styles.dropdownButton} >
                    {props.menuTitle}
                </div>
            </div>
            <div className={styles.dropdownElements} style={{display: display}}>
                {props.menuElements.map((element: any) =>
                    <div
                        className={props.currentTheme === "lightTheme" ? styles.elementLightTheme : props.currentTheme === "darkTheme" ? styles.elementDarkTheme : styles.elementColorfulTheme}
                         onClick={() => changeTheme(element.elementFunction)}>{element.elementName}</div>
                )}

            </div>

        </div>
    );
}
