import React from "react";
import styles from "./Projects.module.scss";
import language from "../../assets/language/language";
import Project from "../../components/Project/Project";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/reduxStore/reduxStore";

export default function Projects() {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
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
          <div className={styles.projectsColumn}>
            <Project projectTitle={language.PROJECT_SIFFERTIO} pulseColor={"#FFFFFF"}>
              PLACEHOLDER
            </Project>
            <Project projectTitle={language.PROJECT_ROSHAMBO} pulseColor={"yellow"}>
              PLACEHOLDER
            </Project>
          </div>
        </div>
      </div>
    </div>
  );
}