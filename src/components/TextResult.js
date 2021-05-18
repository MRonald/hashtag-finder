import React from 'react';

import styles from '../styles/components/TextResult.module.css';

import genericImage from '../assets/img/model.png';

export default function TextResult({ name, userName }) {
    return (
        <div className={styles.textResultWrapper}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <img src={genericImage} alt="" />
                </div>
                <div className={styles.textWrapper}>
                    <h1>{name} <span className={styles.userName}>{userName}</span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                </div>
            </div>
            <div className={styles.linkWrapper}>
                <a href="twitter">Ver mais no Twitter</a>
            </div>
        </div>
    );
}
