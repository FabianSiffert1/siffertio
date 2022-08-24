import styles from "./Biography.module.scss";
import language from "../../assets/language/language";
import {TextSection} from "../../components/TextSection/TextSection";
import {SectionHeader} from "../../components/sectionHeader/SectionHeader";

export default function Biography() {
    return (
        <div className={styles.Biography}>
            <SectionHeader title={"Biography"}/>
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
