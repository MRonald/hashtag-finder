<<<<<<< HEAD
import React from 'react';
import Header from "../components/Header";

import styles from '../styles/pages/Home.module.css';

// Images
import iconSearch from '../assets/img/icon-search.svg';
import Footer from '../components/Footer';

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
            <Footer />
        </div>
    );
}
=======
import React from 'react';
import Header from "../components/Header";

import styles from '../styles/pages/Home.module.css';

// Images
import iconSearch from '../assets/img/icon-search.svg';

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
                        <label htmlFor="inputMain">
                            <img src={iconSearch} alt="" />
                        </label>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className={styles.inputMain}
                            id="inputMain"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
>>>>>>> cesar
