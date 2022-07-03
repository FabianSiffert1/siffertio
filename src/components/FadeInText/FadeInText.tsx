import styles from "./FadeInText.module.scss";

export interface FadeInTextProps {
    textToDisplay?: string,
    blockColor?: string,
    blockHeight?: string,
    blockWidth?: string,
    fadeInTime?: string
}

export default function FadeInText(props: FadeInTextProps) {
    return (
        <div className={styles.FadeInTextContainer}>
            <div className={styles.coloredBlock}
                 style={{backgroundColor: props.blockColor, height: props.blockHeight, width: props.blockWidth}}></div>
            <div className={styles.fadeInText}>
                {props.textToDisplay && props.textToDisplay}
            </div>
        </div>
    );
}
