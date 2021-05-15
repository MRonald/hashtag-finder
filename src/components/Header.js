import React from 'react';
import styles from '../styles/components/Header.module.css';

// Images
import logo from '../assets/img/logo.svg';
import infoCircle from '../assets/img/icon-info-circle.svg';
import userLogin from '../assets/img/icon-user-alt.svg';


export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <a href="/">
                <img src={logo} alt="logo"/>
            </a>
            <div className={styles.linksWrapper}>
                <a href="about" className={styles.about}>
                    <img src={infoCircle} alt=""/>
                    Sobre
                </a>
                <a href="login" className={styles.login}>
                    <img src={userLogin} alt=""/>
                    Login
                </a>
            </div>
        </div>
    );
}
