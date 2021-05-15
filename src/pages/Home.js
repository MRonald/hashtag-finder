import React from 'react';
import Header from "../components/Header";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
    return (
        <div>
            <div className={styles.hero}>
                <Header/>
                <div className={styles.heroContent}>
                    <div>
                        <h1>Encontre hashtags de maneira fácil.</h1>
                        <h2>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</h2>
                    </div>
                    <form>
                        <input type="text" placeholder="Buscar..."/>
                    </form>
                </div>
            </div>
        </div>
    );
}
