import React, {useState} from "react";
import styles from "./DropdownMenu.module.scss";

export interface DropdownMenuProps {
    children?: any;
    menuTitle: string;
}

function Element() {
    return (
        <div className={styles.elements}>
            World
        </div>

    )
}


export function DropdownMenu(props: DropdownMenuProps) {
    const [display, setDisplay] = useState('none');
    function handleClick() {
        if (display === 'none') {
            setDisplay('block')
        } else setDisplay('none')
    }

    function emptyHandleClick() {
        return;
    }

    return (
        <div className={styles.DropdownMenu}>
            <div className={styles.dropdownButton} onClick={handleClick}>
                {props.menuTitle}
            </div>
            <div className={styles.dropdownElements} onClick={emptyHandleClick} style={{display: display}}>
                123
                {props.children}
            </div>

        </div>
    );
}
