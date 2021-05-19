import React from 'react';
import styles from "../styles/pages/About.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ilustração from './../assets/img/about-ilustration.svg';
import github from './../assets/img/icon-github.svg';
import email from './../assets/img/icon-envelope.svg';
import linkedin from './../assets/img/icon-awesome-linkedin.svg';

function About() {
    return <div className={styles.bgabout} >
        <Header template="home" />
        <div className={styles.firstContent} > { /*primeiro conteudo */}
            <div className={styles.divsobreprojeto} >
                <h1 className={styles.titulosobreprojeto} > Sobre o Projeto </h1>
                <p className={styles.paragrafosobreprojeto} >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore 
                    et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea 
                    rebum.Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    At vero eos et accusam et justo duo dolores et ea 
                    rebum.Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className={styles.divilustration} >
                <img src={ilustração}
                    alt="Ilustração" />
            </div>
        </div>
        
        <h1 className={styles.who}>Quem somos</h1>
        <div class={styles.wrapperflex}>
        {/* USUARIOS */}
            <div class={styles.container}>
                <div class={styles.bannerimg}></div>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99b20742-4dba-46de-864c-4e2fe5fb3f4f/d4hhdbc-10e39559-98ac-42c4-a4b2-7f08c1b799f7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5YjIwNzQyLTRkYmEtNDZkZS04NjRjLTRlMmZlNWZiM2Y0ZlwvZDRoaGRiYy0xMGUzOTU1OS05OGFjLTQyYzQtYTRiMi03ZjA4YzFiNzk5ZjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X_VZom3qdcKcETuLbIevHqF2wEpo21tYmHgfA57Xtdk' alt='profile image' class={styles.profileimg}/>
                <h1 class={styles.name}>Nome Sobrenome</h1>
                <p class={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
                <img className={styles.github} src={github}/>
                <img className={styles.email} src={email}/>
                <img className={styles.linkedin} src={linkedin}/>
            </div>
            <div class={styles.container}>
                <div class={styles.bannerimg}></div>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99b20742-4dba-46de-864c-4e2fe5fb3f4f/d4hhdbc-10e39559-98ac-42c4-a4b2-7f08c1b799f7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5YjIwNzQyLTRkYmEtNDZkZS04NjRjLTRlMmZlNWZiM2Y0ZlwvZDRoaGRiYy0xMGUzOTU1OS05OGFjLTQyYzQtYTRiMi03ZjA4YzFiNzk5ZjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X_VZom3qdcKcETuLbIevHqF2wEpo21tYmHgfA57Xtdk' alt='profile image' class={styles.profileimg}/>
                <h1 class={styles.name}>Nome Sobrenome</h1>
                <p class={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
                <img className={styles.github} src={github}/>
                <img className={styles.email} src={email}/>
                <img className={styles.linkedin} src={linkedin}/>
            </div>
            <div class={styles.container}>
                <div class={styles.bannerimg}></div>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99b20742-4dba-46de-864c-4e2fe5fb3f4f/d4hhdbc-10e39559-98ac-42c4-a4b2-7f08c1b799f7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5YjIwNzQyLTRkYmEtNDZkZS04NjRjLTRlMmZlNWZiM2Y0ZlwvZDRoaGRiYy0xMGUzOTU1OS05OGFjLTQyYzQtYTRiMi03ZjA4YzFiNzk5ZjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X_VZom3qdcKcETuLbIevHqF2wEpo21tYmHgfA57Xtdk' alt='profile image' class={styles.profileimg}/>
                <h1 class={styles.name}>Nome Sobrenome</h1>
                <p class={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
                <img className={styles.github} src={github}/>
                <img className={styles.email} src={email}/>
                <img className={styles.linkedin} src={linkedin}/>
            </div>
            <div class={styles.container}>
                <div class={styles.bannerimg}></div>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99b20742-4dba-46de-864c-4e2fe5fb3f4f/d4hhdbc-10e39559-98ac-42c4-a4b2-7f08c1b799f7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5YjIwNzQyLTRkYmEtNDZkZS04NjRjLTRlMmZlNWZiM2Y0ZlwvZDRoaGRiYy0xMGUzOTU1OS05OGFjLTQyYzQtYTRiMi03ZjA4YzFiNzk5ZjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X_VZom3qdcKcETuLbIevHqF2wEpo21tYmHgfA57Xtdk' alt='profile image' class={styles.profileimg}/>
                <h1 class={styles.name}>Nome Sobrenome</h1>
                <p class={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
                <img className={styles.github} src={github}/>
                <img className={styles.email} src={email}/>
                <img className={styles.linkedin} src={linkedin}/>
            </div>
        </div>
     
      
        <Footer />
        </div>
        
}

export default About
