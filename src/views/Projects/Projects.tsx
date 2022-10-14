import styles from "./Projects.module.scss";
import language from "../../assets/language/language";
import {DropUpSection} from "../../components/DropUpSection/DropUpSection";
import {ImageLink} from "../../components/ImageLink/ImageLink";
import githubLogo from "../../assets/images/github.svg";
import deploymentLogo from "../../assets/images/buttons/home2.svg"
import {LoadingAnimation} from "../../components/LoadingAnimation/LoadingAnimation";
import {ContentSection} from "../../components/ContentSection/ContentSection";
import SkillBanner from "../../components/SkillBanner/SkillBanner";

export default function Projects() {
    return (
        <div className={styles.Projects}>
            <DropUpSection sectionTitle={language.PROJECTS_SIFFERTIO}>
                <ContentSection sectionText={"My personal portfolio - you're here"}>
                    <SkillBanner text="React" />
                    <SkillBanner text="Typescript"/>
                    <ImageLink imageSource={githubLogo} imageSubtitle={"Github"}
                                         imageAltText={"Github"}
                                         imageLink={language.LINK_GITHUB}
                    />
                    <ImageLink imageSource={deploymentLogo} imageSubtitle={"Deployment"}
                               imageAltText={"Deployment"}
                               imageLink={""}/>
                </ContentSection>
            </DropUpSection>
            <DropUpSection sectionTitle={language.SKILLS_ANDROID}>
                <div style={{padding: "1vw", display: "flex" , flexDirection: "row"}}>
                    Soon<LoadingAnimation/>
                </div>
            </DropUpSection>
            <DropUpSection sectionTitle={language.SKILLS_IOS}>
                <div style={{padding: "1vw", display: "flex" , flexDirection: "row"}}>
                    Soon<LoadingAnimation/>
                </div>
            </DropUpSection>
        </div>
    );
}
