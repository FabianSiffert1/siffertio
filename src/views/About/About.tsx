import styles from "./About.module.scss";
import language from "../../assets/language/language";
import {SectionHeader} from "../../components/SectionHeader/SectionHeader";
import ImageShape from "../../components/ImageShape/ImageShape";
//import profilePicture from '../../assets/images/profile.jpg';
import profilePicture from '../../assets/images/Icons/logoFSWhite2.svg';

export default function About() {
    return (
        <div className={styles.About}>
            <SectionHeader title={language.SECTION_ABOUT}/>
            <div className={styles.content}>
                <div className={styles.image}>
                    <ImageShape source={profilePicture} altText={"Fabian Siffert"}/>
                </div>
                <div className={styles.titles}>
                    <div className={styles.mainTitle}>Fabian Siffert</div>
                    <div className={styles.subTitle}>Dev</div>
                </div>
            </div>
        </div>
    );
}
