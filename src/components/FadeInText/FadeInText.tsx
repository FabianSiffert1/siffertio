import styles from "./FadeInText.module.scss";

export interface FadeInTextProps{
    boxColor?: string,
    boxHeight?: number,
    boxWidth?: number
}

export default function FadeInText(props: FadeInTextProps) {
    return (
        <div className={styles.FadeInTextContainer}>
            <div className={styles.coloredBlock}></div>
            <div className={styles.fadeInText}>
              A work in progress
            </div>
        </div>
    );
}
