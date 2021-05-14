import styles from '../styles/components/Header.module.css';

// Images
import logo from '../assets/img/logo.svg';


export default function Header() {
    return (
        <div className={styles.headerWrapper}>
            <img src={logo} alt="logo"/>
            <div className={styles.links}>
                <a href="i">Sobre</a>
                <a href="i">Login</a>
            </div>
        </div>
    );
}
