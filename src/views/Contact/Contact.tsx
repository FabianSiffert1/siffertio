import styles from "./Contact.module.scss";
import {TableSection} from "../../components/TableSection/TableSection";
import {ImageLink} from "../../components/ImageLink/ImageLink";

import githubLogo from "../../resources/images/github.svg"
import emailLogo from "../../resources/images/buttons/mailClosed.svg"
import language from "../../resources/language/language";


export default function Contact() {
    return (
        <div className={styles.Contact}>
            <TableSection tableTitle={"Find me here"}>
                <ImageLink imageSource={githubLogo} imageSubtitle={"Github"}
                           imageAltText={"Github"}
                           imageLink={language.LINK_GITHUB}/>
                <ImageLink imageSource={emailLogo} imageSubtitle={"Email"}
                           imageAltText={"E-Mail"}
                           imageLink={language.LINK_EMAIL}/>

            </TableSection>
        </div>
    );
}
