import React from 'react';
import Header from "../components/Header";

import styles from '../styles/pages/Home.module.css';

// Images
import iconSearch from '../assets/img/icon-search.svg';
import Footer from '../components/Footer';
import ImageResult from '../components/ImageResult';
import TextResult from '../components/TextResult';

export default function Home() {
    return (
        <div>
            <div className={styles.hero}>
                <Header />
                <div className={styles.heroContent}>
                    <div>
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
                            id="inputMain"
                        />
                    </form>
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
                        <TextResult name="UserName" userName="@twitterusername" />
                        <TextResult name="UserName" userName="@twitterusername" />
                        <TextResult name="UserName" userName="@twitterusername" />
                        <TextResult name="UserName" userName="@twitterusername" />
                        <TextResult name="UserName" userName="@twitterusername" />
                        <TextResult name="UserName" userName="@twitterusername" />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
