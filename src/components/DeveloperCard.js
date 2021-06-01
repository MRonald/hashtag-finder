import React from 'react';

import styles from '../styles/components/DeveloperCard.module.css';

// Images
import github from './../assets/img/icon-github.svg';
import email from './../assets/img/icon-envelope.svg';
import linkedin from './../assets/img/icon-awesome-linkedin.svg';

export default function DeveloperCard({ dev }) {
    return (
        <div className={styles.container}>
            <img src={dev.fields['Imagem de perfil'][0].url} alt="profile" className={styles.profileimg} />

            <h1 className={styles.name}>{dev.fields.Nome}</h1>
            <p className={styles.description}>{dev.fields.Descrição}</p>
            <div className={styles.social}>
                <a href={dev.fields.Github} target='_blank' rel="noopener noreferrer">
                    <img className={styles.github} src={github} alt="" />
                </a>
                <a href={"mailto:" + dev.fields.Email} target='_blank' rel="noopener noreferrer">
                    <img className={styles.email} src={email} alt="" />
                </a>
                <a href={dev.fields.LinkedIn} target='_blank' rel="noopener noreferrer">
                    <img className={styles.linkedin} src={linkedin} alt="" />
                </a>
            </div>
        </div>
    );
}
