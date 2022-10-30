import React, { useState } from "react";
import styles from "./FoldableSection.module.scss";

export interface FoldableSectionProps {
  children: React.ReactNode;
  sectionTitle?: string;
  pulseColor?: string;
}

export default function FoldableSection(
  this: any,
  props: FoldableSectionProps
) {
  const [hidden, setHidden] = useState(false);
  function handleClick() {
    setHidden(!hidden);
  }

  const foldableSectionPulseColorStyle = {
    "--pulse-color": props.pulseColor,
  } as React.CSSProperties;

  return (
    <div
      className={styles.FoldableSection}
      style={foldableSectionPulseColorStyle}
    >
      <div className={styles.sectionHeader} onClick={handleClick}>
        {props.sectionTitle && (
          <div className={styles.sectionTitle}>{props.sectionTitle}</div>
        )}
      </div>
      <div
        className={`${styles.sectionContent} ${hidden && styles.hidden}  ${
          !hidden && styles.visible
        } `}
      >
        {props.children}
      </div>
    </div>
  );
}
