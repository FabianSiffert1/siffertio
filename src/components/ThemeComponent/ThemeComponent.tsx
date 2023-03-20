import React from 'react';
import {useSelector} from 'react-redux';
import styles from './ThemeComponent.module.scss';
import {RootState} from '../../utils/reduxStore/reduxStore';
import {Themes} from "../ThemeMenu/ThemeMenu";

export interface ThemeComponentProps {
  children: React.ReactNode;
  contentThemeEnabled?: boolean;
}

function getTheme(currentTheme: string, contentTheme?: boolean) {
  let stylesString = '';
  if (currentTheme === Themes.DARK) {
    stylesString = styles.darkTheme;
    if (contentTheme) {
      stylesString = styles.darkThemeContent;
    }
  } else if (currentTheme === Themes.LIGHT) {
    stylesString = styles.lightTheme;
    if (contentTheme) {
      stylesString = styles.lightThemeContent;
    }
  } else if (currentTheme === Themes.COLORFUL) {
    stylesString = styles.colorfulTheme;
    if (contentTheme) {
      stylesString = styles.colorfulThemeContent;
    }
  }
  return stylesString;
}

export function ThemeComponent(props: ThemeComponentProps) {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  return (
    <div className={getTheme(currentTheme, props.contentThemeEnabled)}>
      {props.children}
    </div>
  );
}
