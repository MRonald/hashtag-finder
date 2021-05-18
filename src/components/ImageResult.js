import React from 'react';

import styles from '../styles/components/ImageResult.module.css';

import image from '../assets/img/model.png';

export default function ImageResult({ userName }) {
    return (
        <div
            className={styles.imageResultWrapper}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className={styles.infoPost}>
                <span>Postado por:</span>
                <span>{userName}</span>
            </div>
        </div>
    );
}
