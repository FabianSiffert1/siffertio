import styles from "./Biography.module.scss";
import language from "../../resources/language/language";
import {useSelector} from "react-redux";
import {FadeInTile} from "../../components/FadeInTile/FadeInTile";

export default function Biography() {
    const currentTheme = useSelector((state: any) => state.theme.value)
    return (
        <div className={styles.Biography}>
            <FadeInTile tileTitle={'Biography'}>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
                <p>
                    {language.LOREM}
                </p>
            </FadeInTile>
        </div>
    );
}
