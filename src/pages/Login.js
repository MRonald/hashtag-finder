import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { Redirect } from 'react-router';

import styles from '../styles/pages/Login.module.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState(false);
    const [invalid, setInvalid] = useState(false);

    function getURL(email, pass) {
        return `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?api_key=key2CwkHb0CKumjuM&filterByFormula=(AND({Email}="${email}",{Senha}="${pass}",{Squad}="2"))`;
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function validateEmail() {
        if (email === '') {
            return false;
        } else {
            return true;
        }
    }

    function validatePassword() {
        if (password === '') {
            return false;
        } else {
            return true;
        }
    }

    function handleSubmit(event) {
        event.preventDefault(event);
        setInvalid(false);
        const emailValid = validateEmail();
        const passValid = validatePassword();
        if (emailValid === true && passValid === true) {
            axios.get(getURL(email, password)).then(
                response => {
                    if (response.data.records.length > 0) {
                        sessionStorage.setItem('login', 'true');
                        setInvalid(false);
                        setLogged(true);
                    } else {
                        sessionStorage.setItem('login', 'false');
                        setInvalid(true);
                        setLogged(false);
                    }
                }
            );
        }

    }

    return (
        <div className={styles.containerLogin}>
            <Header template="login" />
            <div className={styles.bgLogin}>
                <form className={styles.login} onSubmit={handleSubmit}>
                    <div className={styles.titleLogin}>Login</div>
                    <input
                        className={styles.inputLogin}
                        type="email"
                        placeholder="Usu??rio"
                        id="inpEmail"
                        autoComplete="off"
                        onChange={handleEmail}
                        required
                    />
                    <input
                        className={styles.inputLogin}
                        type="password"
                        placeholder="Senha"
                        onChange={handlePassword}
                        required
                    />
                    <input
                        className={styles.buttonLogin}
                        type="submit"
                        value="ACESSAR"
                    />
                    {logged && <Redirect to="/historic" />}
                    {invalid && (
                        <span className={styles.accessDenied}>
                            Usu??rio e/ou senha inv??lidos
                        </span>
                    )}
                </form>
            </div>
        </div>
    );
}
export default Login
