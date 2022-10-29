import React from "react";
import styles from "./ProjectsView.module.scss";
import language from "../../assets/language/language";
import Project from "../../components/Project/Project";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reduxStore/reduxStore";

let pulseColorSiffertIO = "#61dafb";
let pulseColorRoshambo = "#7F52FF";

export default function ProjectsView() {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  if(currentTheme === language.THEME_DARK_VAR) {
	  pulseColorSiffertIO = "#61dafb";
	  pulseColorRoshambo = "#7F52FF";
  } else if (currentTheme === language.THEME_LIGHT_VAR){
		pulseColorSiffertIO = "#51AAC7";
		pulseColorRoshambo = "#7F52FF";
	}
  else if (currentTheme === language.THEME_COLORFUL_VAR) {
	  pulseColorSiffertIO = "";
	  pulseColorRoshambo = "";
  }
  return (
    <div className={styles.Projects}>
      <div className={styles.content}>
        <div
          className={
            currentTheme === language.THEME_DARK_VAR
              ? styles.darkTheme
              : currentTheme === language.THEME_LIGHT_VAR
              ? styles.lightTheme
              : styles.colorfulTheme
          }
        >
          <div className={styles.projectsContainer}>
            <Project projectTitle={language.PROJECT_SIFFERTIO} pulseColor={pulseColorSiffertIO}>
              SIFFERTIO
            </Project>
            <Project projectTitle={language.PROJECT_ROSHAMBO} pulseColor={pulseColorRoshambo}>
              Roshambo
            </Project>
          </div>
        </div>
      </div>
    </div>
  );
}