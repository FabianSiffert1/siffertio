import React, { ReactNode } from 'react';
import styles from './Tooltip.module.scss';

export interface TooltipProps {
  text: [string, string?];
  toggle?: boolean;
  children: ReactNode;
}

export default function Tooltip(props: TooltipProps) {
  return (
    <div className={styles.Tooltip}>
      <div className={styles.tooltipContainer}>
        {props.toggle === undefined || props.toggle
          ? props.text[0]
          : props.text[1]}
      </div>
      <div className={styles.childrenContainer}>{props.children}</div>
    </div>
  );
}
