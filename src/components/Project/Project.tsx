import React, { CSSProperties } from "react";
import styles from "./Project.module.scss";

export interface ProjectProps {
  children: React.ReactNode;
  projectTitle?: string;
  pulseColor?: string;
}

export default function Project(props: ProjectProps) {
  const style = { "--pulse-color": props.pulseColor } as React.CSSProperties;
  return (
    <div className={styles.Project} style={style}>
      <div className={styles.projectHeader}>
        {props.projectTitle && (
          <div className={styles.projectTitle}>{props.projectTitle}</div>
        )}
      </div>
      <div className={styles.projectContent}>{props.children}</div>
    </div>
  );
}