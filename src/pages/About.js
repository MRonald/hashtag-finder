import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DeveloperCard from '../components/DeveloperCard';

import styles from '../styles/pages/About.module.css';

//import das imagens//
import ilustração from './../assets/img/about-ilustration.svg';


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
                <ul>
                    {
                        /* Devs do projeto */
                        seniors.map(
                            (SR, index) => (
                                <li key={index}>
                                    <DeveloperCard dev={SR} />
                                </li>
                            )
                        )
                    }
                </ul>
            </div>

            <Footer />
        </div>
    );
}
