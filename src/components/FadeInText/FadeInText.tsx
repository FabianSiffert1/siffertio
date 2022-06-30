import styles from "./FadeInText.module.scss";

export interface FadeInTextProps{
    boxColor?: string,
    boxHeight?: number,
    boxWidth?: number
}

export default function FadeInText(props: FadeInTextProps) {
    return (
        <div className={styles.FadeInTextContainer}>
            <span className={styles.FadeInColoredBlock}></span>
            FADEINMEBRUDI
        </div>
    );
}
