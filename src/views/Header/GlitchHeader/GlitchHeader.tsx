import React from "react"
import styles from "./GlitchHeader.module.scss"
import {NavLink} from "react-router-dom"


function GlitchHeader() {
	return (
		<div className={styles.Header}>
			<NavLink to={"/"} key={"AttractScreen"}>
				<div title="siffert.io">siffert.io</div>
			</NavLink>
		</div>
	)
}

export default GlitchHeader
