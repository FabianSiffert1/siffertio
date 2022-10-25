import styles from "./About.module.scss";
import language from "../../assets/language/language";
import {useSelector} from "react-redux";
import SkillBanner from "../../components/SkillBanner/SkillBanner";
import ImageLink from "../../components/ImageLink/ImageLink";
import RoundImage from "../../components/ProfilePicture/ProfilePictureProps";

import profilePicture from '../../assets/images/profileTeacher.jpg';
import reactLogo from '../../assets/images/logos/reactLogo.svg';
import swiftLogo from '../../assets/images/logos/swiftLogo.svg';
import swiftUILogo from '../../assets/images/logos/swiftUiLogo.svg';
import typescriptLogo from '../../assets/images/logos/typescriptLogo.svg';
import pythonLogo from '../../assets/images/logos/pythonLogo.svg';
import javascriptLogo from '../../assets/images/logos/javascriptLogo2.svg';
import dockerLogo from '../../assets/images/logos/dockerLogo.svg';
import mysqlLogo from '../../assets/images/logos/mysqlLogo.svg';
import kotlinLogo from '../../assets/images/logos/kotlinLogo.svg';
import javaLogo from '../../assets/images/logos/javaLogo.svg';
import githubLogo from "../../assets/images/github.svg";
import emailLogo from "../../assets/images/emailLink.svg";
import {SectionHeader} from "../../components/SectionHeader/SectionHeader";


export default function About() {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
        <div className={styles.About}>
            <div className={styles.content}>
                <div
                    className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                    <div className={styles.aboutMe}>
                        <RoundImage source={profilePicture} altText={"Fabian Siffert"} subtitle={"Fabian Siffert"}/>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skillsRow}>
                            <SkillBanner text="React" image={reactLogo}/>
                            <SkillBanner text="Python" image={pythonLogo}/>
                            <SkillBanner text="TypeScript" image={typescriptLogo}/>
                            <SkillBanner text="JavaScript" image={javascriptLogo}/>
                            <SkillBanner text="Java" image={javaLogo}/>
                        </div>
                        <div className={styles.skillsRow}>
                            <SkillBanner text="mySQL" image={mysqlLogo}/>
                            <SkillBanner text="Swift" image={swiftLogo}/>
                            <SkillBanner text="SwiftUI" image={swiftUILogo}/>
                            <SkillBanner text="Docker" image={dockerLogo}/>
                            <SkillBanner text="Kotlin" image={kotlinLogo}/>
                        </div>
                    </div>
                    <SectionHeader title={"Get in touch"}/>
                    <div className={styles.contact}>
                                <ImageLink imageSource={githubLogo} imageSubtitle={"Github"}
                                           imageAltText={"Github"}
                                           imageLink={language.LINK_GITHUB}/>
                                <ImageLink imageSource={emailLogo} imageSubtitle={"E-Mail"}
                                           imageAltText={"E-Mail"}
                                           imageLink={language.LINK_EMAIL}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
