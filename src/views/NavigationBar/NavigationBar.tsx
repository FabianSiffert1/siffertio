import React from 'react';
import { useSelector } from 'react-redux';
import styles from './NavigationBar.module.scss';
import language from '../../assets/language/language';

import AnimatedTextRouter from '../../components/AnimatedTextRouter/AnimatedTextRouter';
import { RootState } from '../../utils/reduxStore/reduxStore';

export interface NavigationBarProps {
  routerPosition?: string;
  currentTheme?: string;
}

const routesInNavigationBar: { route: string; routeKey: string }[] = [
  { route: '/', routeKey: language.ROUTE_ABOUT },
  { route: '/projects', routeKey: language.ROUTE_PROJECTS },
];

function NavigationBar(props: NavigationBarProps) {
  const currentTheme = useSelector((state: RootState) => state.theme.value);

  return (
    <div
      className={
        currentTheme === language.THEME_DARK_VAR
          ? styles.darkTheme
          : currentTheme === language.THEME_LIGHT_VAR
          ? styles.lightTheme
          : styles.colorfulTheme
      }
    >
      <div className={styles.NavigationBar}>
        <AnimatedTextRouter
          currentTheme={props.currentTheme}
          routesArray={routesInNavigationBar}
        />
      </div>
    </div>
  );
}

export default NavigationBar;
