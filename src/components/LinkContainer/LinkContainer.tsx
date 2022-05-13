import React from "react";
import language from "../../resources/language/language";
import styles from "./LinkContainer.module.scss";


//TODO: styles.header:dark -> CSS Subclass
function LinkContainer(props: any) {
	return (
		<div className={styles.LinkContainer}>
			<header className={styles.header}>
				<a
					className={styles.link}
					href={props.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={props.imageSource}
						className={styles.logo}
						alt={language.LOGO}
					/>
				</a>
			</header>
		</div>
	);
}
export default LinkContainer;
