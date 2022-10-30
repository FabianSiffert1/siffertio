import React from "react"
import styles from "./Header.module.scss"
import {NavLink} from "react-router-dom"
import ColoredBarsAndFadeInText from "../../components/ColoredBarsAndFadeInText/ColoredBarsAndFadeInText"
import language from "../../assets/language/language"
import {DropdownMenuTheme} from "../../components/DropdownMenuTheme/DropdownMenuTheme"


const settingsMenuItems: { elementName: string, elementFunction: string }[] = [
	{"elementName": language.THEME_DARK, "elementFunction": language.THEME_DARK_VAR},
	{"elementName": language.THEME_LIGHT, "elementFunction": language.THEME_LIGHT_VAR},
	//{'elementName': language.THEME_COLORFUL, 'elementFunction': language.THEME_COLORFUL_VAR},
]

export default function Header() {
	return (
		<div className={styles.Header}>
			<div className={styles.headerElements}>
				<NavLink to={"/"}>
					<ColoredBarsAndFadeInText textToDisplay={language.HEADER_TITLE} mainFontSize={"7vh"}/>
					<ColoredBarsAndFadeInText textToDisplay={language.HEADER_SUBTITLE} mainFontSize={"2vh"}
						leftToRightAnimation={false}/>
				</NavLink>
				<div className={styles.buttonContainer}>
					<DropdownMenuTheme
						menuTitle={language.THEME_BUTTON} menuElements={settingsMenuItems}/>
				</div>
			</div>
		</div>
	)
}