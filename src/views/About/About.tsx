import styles from "./About.module.scss";
import ImageShape from "../../components/AnimatedFlipElement/AnimatedFlipElement";
import profilePicture from '../../assets/images/profileTeacher.jpg';
//import profilePicture from '../../assets/images/Icons/logoFSWhite2.svg';
import SkillBanner from "../../components/SkillBanner/SkillBanner";
import language from "../../assets/language/language";
import {useSelector} from "react-redux";


export default function About() {
    const currentTheme = useSelector((state: any) => state.theme.value)

    return (
        <div className={styles.About}>
            <div className={styles.content}>
                <div
                    className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                    <div className={styles.aboutMe}>
                        <ImageShape source={profilePicture} altText={"Fabian Siffert"}/>
                        <div className={styles.description}>
                            <div className={styles.name}>
                                Fabian Siffert
                            </div>
                            <div className={styles.job}>
                                Dev
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <div className={styles.skillsRow}>
                            <SkillBanner text="React"/>
                            <SkillBanner text="Python"/>
                            <SkillBanner text="Typescript"/>
                            <SkillBanner text="Javascript"/>
                            <SkillBanner text="Java"/>
                        </div>
                        <div className={styles.skillsRow}>
                            <SkillBanner text="mySQL"/>
                            <SkillBanner text="Swift"/>
                            <SkillBanner text="SwiftUI"/>
                            <SkillBanner text="Docker"/>
                            <SkillBanner text="Kotlin"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
