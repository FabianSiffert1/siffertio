import styles from "./Tooltip.module.scss";
import React, {ReactNode} from "react";

export interface TooltipProps {
    text: [string, string?],
    toggle?: boolean,
    children: ReactNode
}


export default function Tooltip(props: TooltipProps) {
    const [show, setShow] = React.useState(false);
    return (
        <div className={styles.Tooltip}>
            <div className={styles.tooltipContainer} style={show ? { visibility: "visible" } : {} }>
                {typeof props.toggle != undefined && props.toggle ? props.text[0] : props.text[1]}
                {typeof props.toggle == undefined && props.text[0]}
            </div>
            <div className={styles.childrenContainer}  onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {props.children}
            </div>
        </div>
    );
}


Tooltip.defaultProps = {
    text: "Placeholder Tooltip",
};

