import React from 'react';

import styles from '../styles/components/ImageResult.module.css';

export default function ImageResult({ result }) {
    return (
        <div
            className={styles.imageResultWrapper}
            style={{ backgroundImage: `url(${result.image_url})` }}
        >
            <div className={styles.infoPost}>
                <span>Postado por:</span>
                <span>@{result.author.username}</span>
            </div>
        </div>
    );
}
