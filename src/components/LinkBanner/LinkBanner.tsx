import React from 'react';
import {useSelector} from 'react-redux';
import styles from './LinkBanner.module.scss';
import {RootState} from '../../utils/reduxStore/reduxStore';
import {Themes} from "../ThemeMenu/ThemeMenu";

export interface LinkBannerProps {
  text?: string;
  image: string;
  imageAltText?: string;
  url: string;
}

export default function LinkBanner(props: LinkBannerProps) {
  const currentTheme = useSelector((state: RootState) => state.theme.value);

  return (
    <div className={styles.LinkBanner}>
      <div
        className={
          currentTheme === Themes.DARK
            ? styles.darkTheme
            : currentTheme === Themes.LIGHT
            ? styles.lightTheme
            : styles.colorfulTheme
        }
      >
        <a href={props.url} target="_blank" rel="noreferrer">
          <img
            className={styles.imageContainer}
            src={props.image}
            alt={props.imageAltText ? props.imageAltText : 'Logo.png'}
          />
          <div className={styles.textContainer}>{props.text}</div>
        </a>
      </div>
    </div>
  );
}
