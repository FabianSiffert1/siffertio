import React from "react"
import styles from "./SectionHeader.module.scss"


export interface SectionHeaderProps {
    title: string;
	color?: string;
}

export function SectionHeader(props: SectionHeaderProps) {
	return (
		<div className={styles.SectionHeaderContainer}>
			<div className={styles.sectionHeaderContent}>
				<div className={styles.sectionHeaderTitle} style={{color: props.color}}> {props.title} </div>
			</div>
		</div>
	)
}
