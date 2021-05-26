import React, { useState } from 'react';
import axios from 'axios';

import styles from '../styles/pages/Home.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageResult from '../components/ImageResult';
import TextResult from '../components/TextResult';
import { BASE_URL_SEARCH } from '../config';

// Images
import iconSearch from '../assets/img/icon-search.svg';

export default function Home() {
    const [buttonActive, setButtonActive] = useState("images");
    const [textSearch, setTextSearch] = useState("");

    function getCurrentDate() {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function getCurrentHour() {
        const date = new Date();
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');
        return `${hour}:${minute}`;
    }

    function handleTextChange(event) {
        setTextSearch(event.target.value);
    }

    function validateForm() {
        if (textSearch.length < 1) {
            return false;
        }
        return true;
    }

    function submitForm(event) {
        event.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            alert('preencha o campo')
        } else {
            registerSearch();
        }
        setTextSearch("");
    }

    function registerSearch() {
        axios.post(BASE_URL_SEARCH, {
            "records": [
                {
                    "fields": {
                        "Squad": "2",
                        "Hashtag": textSearch,
                        "Data": getCurrentDate(),
                        "Hora": getCurrentHour()
                    }
                }
            ]
        }, {
            headers: {
                "Authorization": "Bearer key2CwkHb0CKumjuM",
                "Content-Type": "application/json"
            }
        }).catch(e => console.log('erro\n' + e));
    }

    return (
        <div>
            <div className={styles.hero}>
                <Header fixed="true" template="home" />
                <div className={styles.heroContent}>
                    <div className={styles.titles}>
                        <h1>Encontre hashtags de maneira fácil.</h1>
                        <h2>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</h2>
                    </div>
                    <form onSubmit={submitForm}>
                        <button>
                            <img src={iconSearch} alt="" />
                        </button>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className={styles.inputMain}
                            value={textSearch}
                            onChange={handleTextChange}
                        />
                    </form>
                </div>
            </div>
            <div className={styles.transition}>
                <div className={styles.switchResults}>
                    <span
                        onClick={() => setButtonActive('tweets')}
                        style={{
                            color: `${buttonActive === 'tweets' ? '#72EFDB' : 'white'}`,
                        }}
                    >
                        Tweets
                    </span>
                    <span
                        onClick={() => setButtonActive('images')}
                        style={{
                            color: `${buttonActive === 'images' ? '#72EFDB' : 'white'}`,
                        }}
                    >
                        Imagens
                    </span>
                </div>
                <div className={styles.baseButtons}>
                    <div
                        style={{
                            transform: `${buttonActive === 'images' ? 'translateX(100%)' : 'translateX(0%)'}`
                        }}
                    >
                    </div>
                </div>
            </div>
            <div className={styles.mainContentWrapper}>
                <h2>Exibindo os 10 resultados mais recentes para #natureza</h2>
                <main className={styles.mainContent}>
                    <div className={styles.imagesResults}>
                        <ImageResult userName="@twitterusername" />
                        <ImageResult userName="@twitterusername" />
                        <ImageResult userName="@twitterusername" />
                        <ImageResult userName="@twitterusername" />
                        <ImageResult userName="@twitterusername" />
                        <ImageResult userName="@twitterusername" />
                        <ImageResult userName="@twitterusername" />
                        <ImageResult userName="@twitterusername" />
                    </div>
                    <div className={styles.textsResults}>
                        <TextResult name="UserName" userName="@twitterusername" />
                        <TextResult name="UserName" userName="@twitterusername" />
                        <TextResult name="UserName" userName="@twitterusername" />
                        <TextResult name="UserName" userName="@twitterusername" />
                        <TextResult name="UserName" userName="@twitterusername" />
                    </div>
                </main>
                <main className={styles.mainContentResponsive}>
                    {buttonActive === 'images' ? (
                        <div className={styles.imagesResults}>
                            <ImageResult userName="@twitterusername" />
                            <ImageResult userName="@twitterusername" />
                            <ImageResult userName="@twitterusername" />
                            <ImageResult userName="@twitterusername" />
                            <ImageResult userName="@twitterusername" />
                            <ImageResult userName="@twitterusername" />
                            <ImageResult userName="@twitterusername" />
                            <ImageResult userName="@twitterusername" />
                            <ImageResult userName="@twitterusername" />
                        </div>
                    ) : (
                        <div className={styles.textsResults}>
                            <TextResult name="UserName" userName="@twitterusername" />
                            <TextResult name="UserName" userName="@twitterusername" />
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
}
