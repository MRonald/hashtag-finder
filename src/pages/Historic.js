import React from 'react';
import Header from '../components/Header';
import styles from "../styles/pages/Historic.module.css"


export default function Historic() {
    return (
       
          <div className = {styles.body}>

            <Header template = "tableSearch" />  
  
            <div className ={styles.container}>
              <h2>Buscas realizadas</h2>
              <div className ={styles.list}>

                <div className = {styles.listTop}>
                  <div className = {styles.listHeader}>
                    <div className = {styles.hashtag}>Hashtag</div>
                    <div className = {styles.date}>Data</div>
                    <div className = {styles.time}>Hora</div>
                  </div>  
                </div>
                <div className = {styles.listItems}>
                  <div className = {styles.hashtag}>#hashtagname</div>
                  <div className = {styles.date}>13/05</div>
                  <div className = {styles.time}>22:30</div>
                </div>
                <div className = {styles.listItems}>
                  <div className = {styles.hashtag}>#hashtagname</div>
                  <div className = {styles.date}>13/05</div>
                  <div className = {styles.time}>22:30</div>
                </div>
                <div className = {styles.listItems}>
                  <div className = {styles.hashtag}>#hashtagname</div>
                  <div className = {styles.date}>13/05</div>
                  <div className = {styles.time}>22:30</div>
                </div>
                <div className = {styles.listItems}>
                  <div className = {styles.hashtag}>#hashtagname</div>
                  <div className = {styles.date}>13/05</div>
                  <div className = {styles.time}>22:30</div>
                </div>
              </div>

            </div>
  
          </div>
  
  
       
    );
  }