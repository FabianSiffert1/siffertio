import styles from "./About.module.scss";
import language from "../../assets/language/language";
import {TextSection} from "../../components/TextSection/TextSection";
import {SectionHeader} from "../../components/sectionHeader/SectionHeader";

export default function About() {
    return (
        <div className={styles.About}>
            <SectionHeader title={"About"}/>
            <div className={styles.content}>
                <TextSection>
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
