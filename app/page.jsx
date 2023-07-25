"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import backgroundImage from '../assets/shopImg3.jpeg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); 
    const timeout = setTimeout(() => {
      setIsVisible(false);
      window.location.href = "/main";
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main
      className={`${styles.main} ${isVisible ? styles.visible : styles.hidden}`}
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className={styles.layout}>
        <h1>Welcome to Your <span style={{ color: "red" }}>Choice</span> Shop</h1>
        <h2>Your Your-Choice Shop for Fashion and Style!</h2>
      </div>
    </main>
  );
}
