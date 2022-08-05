import styles from "./Projects.module.scss";
import language from "../../assets/language/language";
import {TableSection} from "../../components/TableSection/TableSection";

export default function Projects() {

    return (
        <div className={styles.Projects}>
            <TableSection tableTitle={"Things I've done (as a programmer)"}>
                <div>{language.HEADER_TITLE}</div>

                <div>{language.WELCOME_SUBTITLE}</div>
            </TableSection>
        </div>
    );
}
