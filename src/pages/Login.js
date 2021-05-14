import React from 'react';
import styles from "../styles/pages/Login.module.css"
import Header from "../components/Header";

function Login () {
    return <>
    <Header />
    <div className={styles.bg}>
        <div className={styles.login}>
            <h1 className={styles.titleLogin}>Login</h1>
            <input type="text" placeholder="Usuário"/>
            <input type="password" placeholder="Senha"/>
            <input className={styles.buttonLogin} type="button" value="ACESSAR"/>
        </div>
    </div>
    </>
}

export default Login