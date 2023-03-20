import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import ColoredBarsAndFadeInText from '../../components/ColoredBarsAndFadeInText/ColoredBarsAndFadeInText';
import language from '../../assets/language/language';
import {ThemeMenu, Themes} from '../../components/ThemeMenu/ThemeMenu';

const settingsMenuItems: { elementName: string; elementFunction: Themes }[] = [
  {
    elementName: language.THEME_DARK,
    elementFunction: Themes.DARK,
  },
  {
    elementName: language.THEME_LIGHT,
    elementFunction: Themes.LIGHT,
  },
  // {'elementName': language.THEME_COLORFUL, 'elementFunction': Themes.Colorful},
];

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.headerElements}>
        <NavLink to={'/'}>
          <ColoredBarsAndFadeInText
            textToDisplay={language.HEADER_TITLE}
            mainFontSize={'7vh'}
          />
          <ColoredBarsAndFadeInText
            textToDisplay={language.HEADER_SUBTITLE}
            mainFontSize={'2vh'}
            leftToRightAnimation={false}
          />
        </NavLink>
        <div className={styles.buttonContainer}>
          <ThemeMenu
            menuTitle={language.THEME_BUTTON}
            menuElements={settingsMenuItems}
          />
        </div>
      </div>
    </div>
  );
}
