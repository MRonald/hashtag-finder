import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/pages/About.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

//import das imagens//
import ilustração from './../assets/img/about-ilustration.svg';
import github from './../assets/img/icon-github.svg';
import email from './../assets/img/icon-envelope.svg';
import linkedin from './../assets/img/icon-awesome-linkedin.svg';


export default function About() {
    const [description, setDescription] = useState('');
    const [seniors, setSeniors] = useState([]);

    useEffect(() => {
        //chamada dados sobre
        axios.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?view=Grid%20view&filterByFormula=({Squad}="2")&api_key=key2CwkHb0CKumjuM')
            .then(function (response) {
                setDescription(response.data.records[0].fields.Sobre)
            })
            .catch(function (error) {
                console.log(error);
            });

        //chamada da equipe
        axios.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?filterByFormula=({Squad}="2")&sort[0][field]=Nome&api_key=key2CwkHb0CKumjuM')
            .then(function (response) {
                setSeniors(response.data.records)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className={styles.bgabout}>
            <Header template="home" />
            <div className={styles.firstContent}>
                <div className={styles.divsobreprojeto} >
                    <h1 className={styles.titulosobreprojeto} > Sobre o Projeto </h1>
                    {/*paragrafo da descrição do projeto*/}
                    <p className={styles.paragrafosobreprojeto} >
                        {description}
                    </p>

                </div>
                <div className={styles.divilustration} >
                    <img src={ilustração}
                        alt="Ilustração" />
                </div>
            </div>

            <h1 className={styles.who}>Quem somos</h1>
            <div className={styles.wrapperflex}>
                {/* Devs do projeto */}
                {seniors.map(
                    SR => (

                        <div className={styles.container}>

                            <img src={SR.fields['Imagem de perfil'][0].url} alt='profile' className={styles.profileimg} />

                            <h1 className={styles.name}>{SR.fields.Nome}</h1>
                            <p className={styles.description}>{SR.fields.Descrição}</p>
                            <div className={styles.social}>
                                <a href={SR.fields.Github} target='_blank' rel="noopener noreferrer">
                                    <img className={styles.github} src={github} alt="" />
                                </a>
                                <a href={"mailto:" + SR.fields.Email} target='_blank' rel="noopener noreferrer">
                                    <img className={styles.email} src={email} alt="" />
                                </a>
                                <a href={SR.fields.LinkedIn} target='_blank' rel="noopener noreferrer">
                                    <img className={styles.linkedin} src={linkedin} alt="" />
                                </a>
                            </div>
                        </div>

                    )
                )}
            </div>

            <Footer />
        </div>
    );
}
