import React, { CSSProperties, useState } from "react";
import styles from "./Project.module.scss";

export interface ProjectProps {
  children: React.ReactNode;
  projectTitle?: string;
  pulseColor?: string;
}

export default function Project(this: any, props: ProjectProps) {
  const [hidden, setHidden] = useState(true);
  function handleClick() {
    setHidden(!hidden);
  }

  const projectPulseColorStyle = {
    "--pulse-color": props.pulseColor,
  } as React.CSSProperties;

  return (
    <div
      className={styles.Project}
      style={projectPulseColorStyle}
      onClick={handleClick}
    >
      <div className={styles.projectHeader}>
        {props.projectTitle && (
          <div className={styles.projectTitle}>{props.projectTitle}</div>
        )}
      </div>
      <div className={`${styles.projectContent} ${hidden && styles.hide} `}>
        {props.children}
      </div>
    </div>
  );
}