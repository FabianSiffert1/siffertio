import styles from "./About.module.scss";
import language from "../../assets/language/language";
import {useSelector} from "react-redux";
import SkillBanner from "../../components/SkillBanner/SkillBanner";
import ImageLink from "../../components/ImageLink/ImageLink";
import RoundImage from "../../components/ProfilePicture/ProfilePictureProps";

import profilePicture from '../../assets/images/profileTeacher.jpg';
import reactLogo from '../../assets/images/reactLogo.svg';
import swiftLogo from '../../assets/images/swiftLogo.svg';
import swiftUILogo from '../../assets/images/swiftUiLogo.svg';
import typescriptLogo from '../../assets/images/typescriptLogo.svg';
import pythonLogo from '../../assets/images/pythonLogo.svg';
import javascriptLogo from '../../assets/images/javascriptLogo.svg';
import dockerLogo from '../../assets/images/dockerLogo.svg';
import mysqlLogo from '../../assets/images/mysqlLogo.svg';
import kotlinLogo from '../../assets/images/kotlinLogo.svg';
import javaLogo from '../../assets/images/javaLogo.svg';
import githubLogo from "../../assets/images/github.svg";
import emailLogo from "../../assets/images/emailLink.svg";


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
                            <SkillBanner text="Typescript" image={typescriptLogo}/>
                            <SkillBanner text="Javascript" image={javascriptLogo}/>
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
