import styles from "./Biography.module.scss";
import language from "../../assets/language/language";
import {TextSection} from "../../components/TextSection/TextSection";

export default function Biography() {
    return (
        <div className={styles.Biography}>
            INSERT "BIOGRAPHY" COLOREDSHAPE COMPONENT HERE
            <TextSection textSectionTitle={'Biography'}>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
            </TextSection>
        </div>
    );
}
