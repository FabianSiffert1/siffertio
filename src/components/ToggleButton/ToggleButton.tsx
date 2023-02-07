import React from 'react';
import styles from './ToggleButton.module.scss';
import { ThemeComponent } from '../ThemeComponent/ThemeComponent';

export interface ToggleButtonProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  name?: string;
  children?: React.ReactNode;
}

export default function ToggleButton(props: ToggleButtonProps) {
  return (
    <div className={styles.ToggleButton}>
      <ThemeComponent contentTheme={true}>
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
          className={styles.checkbox}
        />
        <label htmlFor={props.id} className={styles.toggleStateIndicator}>
          {props.children}
        </label>
      </ThemeComponent>
    </div>
  );
}
