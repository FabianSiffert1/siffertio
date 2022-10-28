import React from "react"
import styles from "./ImageLink.module.scss"

import {useSelector} from "react-redux"
import language from "../../assets/language/language"
import {RootState} from "../../utils/reduxStore/reduxStore"

export interface ImageLinkProps {
    imagePopUpText?: string;
    imageSource: string;
    imageAltText?: string;
    imageLink: string;
}

export default function ImageLink(props: ImageLinkProps) {
	const currentTheme = useSelector((state: RootState) => state.theme.value)

	return (
		<div className={styles.ImageLink}>
			<div
				className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
				<a href={props.imageLink} target="_blank" rel="noreferrer">
					<img className={styles.imageContainer} src={props.imageSource}
						alt={props.imageAltText ? props.imageAltText : "Logo.png"}/>
					<div className={styles.imagePopUpText}>{props.imagePopUpText}</div>
				</a>
			</div>
		</div>
	)
}
