import React from "react"
import styles from "./ImageRouter.module.scss"
import {NavLink} from "react-router-dom"

export interface ImageRouterProps {
    route: string;
    routeKey?: string;
    imagePath: string;
    activeImagePath?:string;
    showRouteKeyAsTooltip?: boolean;
}

function ImageRouter(props: ImageRouterProps) {
	return (
		<div className={styles.ImageRouter}>
			<NavLink
				style={({isActive}) => {
					return {
						color: isActive ? "black" : "",
						/*boxShadow: isActive ? "0 0 0 2px black" : "",*/
					}
				}}
				to={props.route}
				key={props.routeKey}
			>
				{/*if linkActive&&activeImagePath -> imageActive*/}
				{props.imagePath ?
					<img className={styles.image} src={props.imagePath } alt="ImagePlaceholder"/> :
					props.routeKey !== undefined ?
						props.routeKey : "Missing ImageSource & Key Parameters"
				}
				{props.showRouteKeyAsTooltip && <div className={styles.routeToolTip}>
					{props.routeKey}
				</div>}
			</NavLink>
		</div>
	)
}

export default ImageRouter
