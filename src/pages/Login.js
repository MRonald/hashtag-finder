import React, { useState } from 'react'
import styles from "../styles/pages/Login.module.css"
import Header from "../components/Header"
import axios from 'axios'
import { Redirect } from 'react-router';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState(false);

    function getURL(email, pass) {
        return `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?api_key=key2CwkHb0CKumjuM&filterByFormula=(AND({Email}="${email}",{Senha}="${pass}",{Squad}="2"))`;
    }

    function handleEmail(event) {
        setEmail(event.target.value)
        clearErros()
    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }

    function validateEmail() {
        if (email === "") {
            document.getElementById('error').innerHTML = `Email incorreto`
            return false
        } else {
            return true
        }
    }

    function validatePassword() {
        if (password === "") {
            return false
        } else {
            return true
        }
    }

    function handleSubmit(event) {
        event.preventDefault(event)
        const emailValid = validateEmail()
        const passValid = validatePassword()
        if (emailValid === true && passValid === true) {
            axios.get(getURL(email, password)).then(
                response => {
                    if (response.data.records.length > 0) {
                        sessionStorage.setItem('login', 'true');
                        setLogged(true);
                    } else {
                        sessionStorage.setItem('login', 'false');
                        setLogged(false);
                    }
                }
            );
        }

    }

    function clearErros() {
        document.getElementById('error').innerHTML = ''
    }

    return (
        <div className={styles.containerLogin}>
            <Header template="login" />
            <div className={styles.bgLogin}>
                <form className={styles.login} onSubmit={handleSubmit}>
                    <div className={styles.titleLogin}>Login</div>
                    <input className={styles.inputLogin} type="text" placeholder="Usuário" id="inpEmail" onChange={handleEmail} autoComplete='off' />
                    <i id="error"></i>
                    <input className={styles.inputLogin} type="password" placeholder="Senha" onChange={handlePassword} />
                    <input className={styles.buttonLogin} type="submit" value="ACESSAR" />
                    {logged && <Redirect to="/historic" />}
                </form>
            </div>
        </div>
    );
}
export default Login
