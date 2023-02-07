import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Home.module.scss';

import NavigationBar from '../NavigationBar/NavigationBar';
import Header from '../Header/Header';
import { ThemeComponent } from '../../components/ThemeComponent/ThemeComponent';
import { RootState } from '../../utils/reduxStore/reduxStore';

const Home = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  return (
    <div className={styles.Home}>
      <ThemeComponent>
        <Header />
        <div className={styles.contentContainer}>
          <Outlet />
        </div>
        <NavigationBar
          currentTheme={currentTheme}
          routerPosition={'/biography'}
        />
      </ThemeComponent>
    </div>
  );
};

export default Home;
