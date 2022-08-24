import styles from "./Contact.module.scss";
import {ImageLink} from "../../components/ImageLink/ImageLink";

import githubLogo from "../../assets/images/github.svg"
import emailLogo from "../../assets/images/emailLink.svg"
import language from "../../assets/language/language";
import {ColoredShape} from "../../components/ColoredShape/ColoredShape";
import {DropUpSection} from "../../components/DropUpSection/DropUpSection";
import {ContentSection} from "../../components/ContentSection/ContentSection";


export default function Contact() {
    return (
        <div className={styles.Contact}>
            <ColoredShape title={"Contact"}/>
            <div className={styles.content}>
                <DropUpSection sectionTitle={"Find me here"}>
                    <ContentSection>
                    <ImageLink imageSource={githubLogo} imageSubtitle={"Github"}
                               imageAltText={"Github"}
                               imageLink={language.LINK_GITHUB}/>
                    <ImageLink imageSource={emailLogo} imageSubtitle={"E-Mail"}
                               imageAltText={"E-Mail"}
                               imageLink={language.LINK_EMAIL}/>
                    </ContentSection>
                </DropUpSection>
            </div>
        </div>
    );
}
