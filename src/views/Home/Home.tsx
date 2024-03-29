import React from 'react';
import {Outlet} from 'react-router-dom';
import styles from './Home.module.scss';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import {ThemeComponent} from '../../components/ThemeComponent/ThemeComponent';

function Home() {
    return (
        <div className={styles.Home}>
            <ThemeComponent>
                <Header/>
                <div className={styles.contentContainer}>
                    <Outlet/>
                </div>
                <Navigation/>
            </ThemeComponent>
        </div>
    );
}

export default Home;
