import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchItem from '../components/SearchItem';
import styles from "../styles/pages/Historic.module.css"

export default function Historic() {
    const [searchItems, setSearchItems] = useState([]);
    const [logged, setLogged] = useState(false);

    function getURL() {
        return `https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula=({Squad}='2')&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=desc&sort%5B1%5D%5Bfield%5D=Hora&sort%5B1%5D%5Bdirection%5D=desc`;
    }

    useEffect(() => {
        axios.get(getURL(), {
            headers: {
                "Authorization": "Bearer key2CwkHb0CKumjuM"
            }
        }).then(
            response => {
                const results = response.data.records.map(
                    record => {
                        return {
                            "hashtag": record.fields.Hashtag,
                            "data": record.fields.Data,
                            "hora": record.fields.Hora
                        }
                    }
                )
                setSearchItems(results);
            }
        );
        if (sessionStorage.getItem('login') === 'true') {
            setLogged(true);
        }
    }, []);

    return (
        <div className={styles.body}>
            <Header template="tableSearch" />
            <div className={styles.container}>
                <h2>Buscas realizadas</h2>
                <div className={styles.list}>
                    {logged ? (
                        <>
                            <div className={styles.listTop}>
                                <div className={styles.listHeader}>
                                    <div className={styles.hashtag}>Hashtag</div>
                                    <div className={styles.date}>Data</div>
                                    <div className={styles.time}>Hora</div>
                                </div>
                            </div>
                            <ul>
                                {
                                    /* Dados das buscas realizadas */
                                    searchItems.map((item, index) => (
                                        <li key={index}>
                                            <SearchItem item={item} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                    ) : (
                        <p className={styles.accessDenied}>Você não tem permissão para acessar essa página</p>
                    )}
                </div>
            </div>
        </div>
    );
}
