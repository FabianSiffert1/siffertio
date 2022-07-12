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
            <div className={styles.dropdownButton} onClick={handleClick}>
                {props.menuTitle}
            </div>
            <div className={styles.dropdownElements} style={{display: display}}>
                {props.menuElements.map((element:any) =>
                    <div className={styles.element} onClick={() => changeTheme(element.elementFunction)}>{element.elementName}</div>
                 )}

            </div>

        </div>
    );
}
