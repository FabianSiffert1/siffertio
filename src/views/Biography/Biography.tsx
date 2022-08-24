import styles from "./Biography.module.scss";
import language from "../../assets/language/language";
import {TextSection} from "../../components/TextSection/TextSection";
import {ColoredShape} from "../../components/ColoredShape/ColoredShape";

export default function Biography() {
    return (
        <div className={styles.Biography}>
            <ColoredShape title={"Biography"}/>
            <div className={styles.content}>
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
        </div>
    );
}
