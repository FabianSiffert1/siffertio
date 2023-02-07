import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './AnimatedTextRouter.module.scss';

import language from '../../assets/language/language';
import { RootState } from '../../utils/reduxStore/reduxStore';

export interface AnimatedTextRouterProps {
  routesArray: { route: string; routeKey: string }[];
  style?: string;
  currentTheme?: string;
}

function AnimatedTextRouter(props: AnimatedTextRouterProps) {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  const currentLocation = useLocation().pathname;
  return (
    <>
      {props.routesArray.map((element) => (
        <div className={styles.AnimatedTextRouter} key={element.routeKey}>
          <NavLink to={element.route} key={element.routeKey}>
            <div
              className={
                currentLocation === element.route
                  ? currentTheme === language.THEME_DARK_VAR
                    ? styles.activeLinkDarkTheme
                    : currentTheme === language.THEME_LIGHT_VAR
                    ? styles.activeLinkLightTheme
                    : styles.activeLinkColorfulTheme
                  : currentTheme === language.THEME_DARK_VAR
                  ? styles.inactiveLinkDarkTheme
                  : currentTheme === language.THEME_LIGHT_VAR
                  ? styles.inactiveLinkLightTheme
                  : styles.inactiveLinkColorfulTheme
              }
            >
              {element.routeKey}
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
}

export default AnimatedTextRouter;
