"use client";
import Link from 'next/link'
import styles from './page.module.css'
import { useEffect } from 'react';
import bkgrndImg from '../assets/shopImg3.jpeg';

export default function Home() {
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("your-choice-owner"));
    if (data && data.login === true) {
      window.location.href = '/main';
    }
  }, []);
  return (
    <main className={styles.main} style={{ backgroundImage: `url(${bkgrndImg.src})` }} >
      <div className={styles.layout}>
        <header className={styles.contentDiv}>
          <h1>Welcome to Your <span style={{color: "red"}}>Choice</span> Shop</h1>
          <h2>Your Your-Choice Shop for Fashion and Style!</h2>
        </header>
        <div className={styles.buttonsDiv}>
          <Link href="/main" >
            <button className={styles.button}>
              VISITOR
            </button>
          </Link>
          <Link href="/signin" >
            <button className={styles.button} style={{ backgroundColor: "white", color: "black" }}>
              SIGN IN
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
