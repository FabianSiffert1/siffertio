import React from "react";
import language from "../../resources/language/language";
import styles from "./LinkContainer.module.scss";
import {NavLink} from "react-router-dom";


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

function ImageLink(navLink : boolean, url : string, image : string) {
	return (
		<NavLink
			className={styles.NavLink}
			style={({isActive}) => {
				return {
					display: "inline-block",
					margin: "1rem 0",
					padding: "1rem",
					color: isActive ? "black" : "",
					border: isActive? "solid black" : "",

				};
			}}
			to={`/biography`}
			key="biography"
		>
			Biography
		</NavLink>
	);
}

export default ImageLink;
