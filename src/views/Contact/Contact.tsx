import styles from "./Contact.module.scss";
import {TableSection} from "../../components/TableSection/TableSection";
import {ImageLink} from "../../components/ImageLink/ImageLink";

import githubLogo from "../../resources/images/github.svg"


export default function Contact() {
    return (
        <div className={styles.Contact}>
            <TableSection tableTitle={"Find me here"}>
                <ImageLink imageSource={githubLogo} imageSubtitle={"Github"}
                           imageAltText={"Github"}
                           imageLink={"https://github.com/FabianSiffert1?tab=repositories"}/>
            </TableSection>
        </div>
    );
}
