import React from 'react';
import styles from './LoadingAnimation.module.scss';

export default function LoadingAnimation() {
  return (
    <div className={styles.LoadingAnimation}>
      <div className={styles.dotContainer}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}
