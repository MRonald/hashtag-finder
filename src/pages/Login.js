import React, { useState } from 'react'
import styles from "../styles/pages/Login.module.css"
import Header from "../components/Header"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleEmail(e) {

        setEmail(e.target.value)
        console.log('target email:' + e.target.value)
        clearErros()
    }
    function handlePassword(e) {
        setPassword(e.target.value)
        console.log('target senha:' + e.target.value)
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

    function handleSubmit(evt) {
        evt.preventDefault(evt)
        const emailValid = validateEmail()
        const passValid = validatePassword()
        if (emailValid === false && passValid === false) {
            console.log('campos ivalidos')
        } else {
            fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?api_key=key2CwkHb0CKumjuM&filterByFormula=(AND({Email}="{{contato@newtab.academy}}",{Senha}="123456"))')
                .then((response) => response.json()).then((data) => console.log(data))

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
                </form>
            </div>
        </div>
    );
}
export default Login
