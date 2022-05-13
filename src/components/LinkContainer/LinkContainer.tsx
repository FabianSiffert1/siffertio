import React from 'react';
import language from '../../resources/language/language';
import styles from './LinkContainer.module.scss';


function LinkContainer(props: any) {
    return (
        <div className={styles.LinkContainer}>

            <a
                className={styles.link}
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
            <header className={styles.headerLight}>
                <img src={props.imageSource} className={styles.logo} alt={language.LOGO} />
            </header>
            </a>
        </div>
    );
}
export default LinkContainer;
