import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './DropUpSection.module.scss';

import language from '../../assets/language/language';
import { RootState } from '../../utils/reduxStore/reduxStore';

export interface DropUpSectionProps {
  children?: React.ReactNode;
  sectionTitle?: string;
  isOpenable?: boolean;
}

export function DropUpSection(props: DropUpSectionProps) {
  const [visible, setVisible] = useState(true);
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  function handleClick() {
    setVisible(!visible);
  }
  return (
    <div className={styles.DropUpSection}>
      <div
        className={
          currentTheme === language.THEME_DARK_VAR
            ? styles.darkTheme
            : currentTheme === language.THEME_LIGHT_VAR
            ? styles.lightTheme
            : styles.colorfulTheme
        }
      >
        <div onClick={handleClick} className={styles.dropUpColoredBar}>
          <div className={styles.dropUpTitle}>
            {props.sectionTitle && props.sectionTitle}
          </div>
        </div>
        {visible && (
          <div className={styles.dropUpContent}>
            {props.children && props.children}
          </div>
        )}
        {!visible && (
          <div onClick={handleClick} className={styles.dropUpIndicator}>
            ^
          </div>
        )}
      </div>
    </div>
  );
}
