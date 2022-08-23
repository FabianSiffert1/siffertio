import styles from "./Projects.module.scss";
import language from "../../assets/language/language";
import {DropUpSection} from "../../components/DropUpSection/DropUpSection";
import {ImageLink} from "../../components/ImageLink/ImageLink";
import githubLogo from "../../assets/images/github.svg";
import deploymentLogo from "../../assets/images/buttons/home2.svg"
import {LoadingAnimation} from "../../components/LoadingAnimation/LoadingAnimation";
import {ContentSection} from "../../components/ContentSection/ContentSection";

export default function Projects() {
    return (
        <div className={styles.Projects}>
            INSERT "PROJECT" COLOREDSHAPE COMPONENT HERE
            <DropUpSection isOpened={false} sectionTitle={language.PROJECTS_SIFFERTIO}>
                <ContentSection sectionText={"My personal portfolio - you're here"}>
                    <ImageLink imageSource={githubLogo} imageSubtitle={"Github"}
                                         imageAltText={"Github"}
                                         imageLink={language.LINK_GITHUB}
                               size={"1vh"}
                    />
                    <ImageLink imageSource={deploymentLogo} imageSubtitle={"Deployment"}
                               imageAltText={"Deployment"}
                               imageLink={""}/>
                </ContentSection>
            </DropUpSection>
            <DropUpSection sectionTitle={language.SKILLS_IOS}>
                <div style={{padding: "1vw"}}>
                    Soon™
                </div>
                <LoadingAnimation/>
            </DropUpSection>
        </div>
    );
}
