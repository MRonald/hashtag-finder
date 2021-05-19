import React, { useState } from 'react';

import styles from '../styles/pages/Home.module.css';

import Header from "../components/Header";
import Footer from '../components/Footer';
import ImageResult from '../components/ImageResult';
import TextResult from '../components/TextResult';

// Images
import iconSearch from '../assets/img/icon-search.svg';

export default function Home() {
    const [buttonActive, setButtonActive] = useState("images");

    return (
        <div>
            <div className={styles.hero}>
                <Header fixed="true" template="home" />
                <div className={styles.heroContent}>
                    <div className={styles.titles}>
                        <h1>Encontre hashtags de maneira fácil.</h1>
                        <h2>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</h2>
                    </div>
                    <form>
                        <button>
                            <img src={iconSearch} alt="" />
                        </button>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className={styles.inputMain}
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
                            borderBottom: `${buttonActive === 'tweets' ? '3px solid #72EFDB' : '2px solid #41558E'}`
                        }}
                    >
                        Tweets
                    </span>
                    <span
                        onClick={() => setButtonActive('images')}
                        style={{
                            color: `${buttonActive === 'images' ? '#72EFDB' : 'white'}`,
                            borderBottom: `${buttonActive === 'images' ? '3px solid #72EFDB' : '2px solid #41558E'}`
                        }}
                    >
                        Imagens
                    </span>
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
                        <ImageResult userName="@twitterusername" />
                    </div>
                    <div className={styles.textsResults}>
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
