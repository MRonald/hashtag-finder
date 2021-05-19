import React from 'react';
import styles from '../styles/components/Header.module.css';

// Images
import logo from '../assets/img/logo.svg';
import infoCircle from '../assets/img/icon-info-circle.svg';
import userLogin from '../assets/img/icon-user-alt.svg';
import homeIcon from '../assets/img/icon-home.svg';
import logoutIcon from '../assets/img/icon-power-off.svg';
import { Link } from 'react-router-dom';


export default function Header({ fixed, template }) {
    return (
        <div
            className={styles.headerWrapper}
            style={{position: `${fixed === 'true' ? 'fixed' : 'initial'}`}}
        >
            <Link to="/" className={styles.linkImageHome}>
                <img src={logo} alt="logo"/>
            </Link>
            {/*
                Existem 3 templates para os botões:
                    - Template "home"
                    - Template "login"
                    - Template "tableSearch"
            */}
            {template === 'home' && (
                <div className={styles.linksWrapper}>
                    <a href="about" className={styles.firstButton}>
                        <img src={infoCircle} alt=""/>
                        Sobre
                    </a>
                    <a href="login" className={styles.secondButton}>
                        <img src={userLogin} alt=""/>
                        Login
                    </a>
                </div>
            )}
            {template === 'login' && (
                <div className={styles.linkWrapper}>
                    <a href="/" className={styles.firstButton}>
                        <img src={homeIcon} alt=""/>
                        Home
                    </a>
                </div>
            )}
            {template === 'tableSearch' && (
                <div className={styles.linksWrapper}>
                    <a href="about" className={styles.firstButton}>
                        <img src={homeIcon} alt=""/>
                        Home
                    </a>
                    <a href="login" className={styles.secondButton}>
                        <img src={logoutIcon} alt=""/>
                        Sair
                    </a>
                </div>
            )}
        </div>
    );
}
