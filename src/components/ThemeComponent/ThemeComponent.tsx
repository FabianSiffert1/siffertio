import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ThemeComponent.module.scss';
import language from '../../assets/language/language';
import { RootState } from '../../utils/reduxStore/reduxStore';

export interface ThemeComponentProps {
  children: React.ReactNode;
  contentTheme?: boolean;
}

function getTheme(currentTheme: string, contentTheme?: boolean) {
  let stylesString = '';
  if (currentTheme === language.THEME_DARK_VAR) {
    stylesString = styles.darkTheme;
    if (contentTheme) {
      stylesString = styles.darkThemeContent;
    }
  } else if (currentTheme === language.THEME_LIGHT_VAR) {
    stylesString = styles.lightTheme;
    if (contentTheme) {
      stylesString = styles.lightThemeContent;
    }
  } else if (currentTheme === language.THEME_COLORFUL_VAR) {
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
    <div className={getTheme(currentTheme, props.contentTheme)}>
      {props.children}
    </div>
  );
}
