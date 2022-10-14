import styles from "./About.module.scss";
import language from "../../assets/language/language";
import ImageShape from "../../components/ImageShape/ImageShape";
//import profilePicture from '../../assets/images/profile.jpg';
import profilePicture from '../../assets/images/Icons/logoFSWhite2.svg';
import SkillBanner from "../../components/SkillBanner/SkillBanner";

export default function About() {

    return (
        <div className={styles.About}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <ImageShape source={profilePicture} altText={"Fabian Siffert"}/>
                </div>
                <div className={styles.titles}>
                    <div className={styles.mainTitle}>Fabian Siffert</div>
                    <div className={styles.subTitle}>Dev</div>
                </div>
            </div>
            <div className={styles.skills} style={{paddingTop: "10vh"}}>
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
    );
}
