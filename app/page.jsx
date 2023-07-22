"use client";
import Link from 'next/link'
import styles from './page.module.css'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("your-choice-owner"));
    if (data && data.login === true) {
      window.location.href = '/main';
    }
  }, []);
  return (
    <main className={styles.main}>
      <h1>welcome to our website!</h1>
      <Link href="/main" >
        <button className={styles.button}>
            visitor
        </button>
      </Link>
      <Link href="/signin" >
        <button className={styles.button}>
          sign in
        </button>
      </Link>
    </main>
  )
}
