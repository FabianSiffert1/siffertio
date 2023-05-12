import {useSelector} from "react-redux";
import React, {useState} from 'react';
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'
import {Themes} from "../ThemeMenu/ThemeMenu";
import {RootState} from "../../utils/reduxStore/reduxStore";
import styles from './CollapsibleSection.module.scss';

interface CollapsibleSectionProps {
    popUpText?: string,
    headerImage: string,
    sectionContent?: React.ReactNode,
}


export default function CollapsibleSection(props: CollapsibleSectionProps) {
    const currentTheme = useSelector((state: RootState) => state.theme.value);
    const [open, setOpen] = useState(false);

    const springApi = useSpringRef();
    const {size, ...rest} = useSpring({
        ref: springApi,
        config: config.stiff,
        from: {size: "20%"},
        to: {
            size: open ? "80%" : "20%",
        }
    });

    const transApi = useSpringRef();
    const transition = useTransition(open ? props.sectionContent : [], {
        ref: transApi,
        trail: 2,
        from: {opacity: 0, scale: 0},
        enter: {opacity: 1, scale: 1},
        leave: {opacity: 0, scale: 0}
    });

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6
    ]);

    return (
        <div className={styles.CollapsibleSection}>
            <animated.div
                className={
                    currentTheme === Themes.DARK
                        ? styles.collapsibleSectionHeaderDark
                        : currentTheme === Themes.LIGHT
                            ? styles.collapsibleSectionHeaderLight
                            : styles.collapsibleSectionHeaderColorful
                }
                style={{...rest, width: size, height: size}}
                onClick={() => setOpen(!open)}
            >
                {transition((style) => (
                    <animated.div
                        className={styles.item}
                        style={{...style,}}
                    >
                        <div className={styles.collapsibleSectionContent}>
                            <div
                                className={
                                    currentTheme === Themes.DARK
                                        ? styles.collapsibleSectionContentDark
                                        : currentTheme === Themes.LIGHT
                                            ? styles.collapsibleSectionContentLight
                                            : styles.collapsibleSectionContentColorful
                                }
                            >
                                {props.sectionContent && props.sectionContent}
                            </div>
                        </div>

                    </animated.div>
                ))}
                <img className={styles.headerImage} src={props.headerImage} alt={props.popUpText}/>
            </animated.div>
        </div>
    )
}
