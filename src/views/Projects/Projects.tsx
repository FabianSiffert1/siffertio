import styles from "./Projects.module.scss";
import language from "../../assets/language/language";
import {DropUpSection} from "../../components/DropUpSection/DropUpSection";

export default function Projects() {

    return (
        <div className={styles.Projects}>
                <DropUpSection isOpened={true} sectionTitle={language.HEADER_TITLE}>
                    HEEEEYA
                </DropUpSection>
                <DropUpSection sectionTitle={"My Future IOS APP"}>
                    HEEEEYAAAA
                </DropUpSection>
        </div>
    );
}
