import React from 'react';
import styles from "../styles/pages/Login.module.css"
import Header from "../components/Header"

function Login() {
    return <div className={styles.containerLogin}>
        <Header />
        <div className={styles.bgLogin}>
            <div className={styles.login}>
                <div className={styles.titleLogin}>Login</div>
                <input className={styles.inputLogin} type="text" placeholder="Usuário" />
                <input className={styles.inputLogin} type="password" placeholder="Senha" />
                <input className={styles.buttonLogin} type="button" value="ACESSAR" />
            </div>
        </div>
    </div>
}

export default Login
