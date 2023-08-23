"use client";
import React, { useEffect, useState } from 'react';
import styles from './page.module.css'
import Link from "next/link";
import logo from '../../public/your-choice-logo.png';

function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [boolean, setBoolean] = useState(false)
  const [error, setError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username === process.env.NEXT_PUBLIC_USERNAME && password === process.env.NEXT_PUBLIC_PASSWORD) {
      localStorage.setItem("your-choice-owner", JSON.stringify({username, password, login: true}))
      setError('')
      window.location.reload()
    } else {
      setError("Your username or password is incorrect!")
    }
  };

useEffect(() => {
  let data = JSON.parse(localStorage.getItem("your-choice-owner"))
  if (data && data.login === true ){
    setBoolean(true)
  }
}, [])

  return (
    <>
      <img className={styles.img} src={logo.src} alt="" />
      <div className={styles.container}>
        <h1>Sign In Here</h1>
        {boolean?
        <div className={styles.loggedIn}>
            <h2>Succesfully LoggedIn!</h2>
            <Link href="/" className={styles.form} style={{ textDecoration: "none" }}>
              <button>Go to Home</button>
            </Link>
        </div>
        :
        <>
          <h2>Note: only owner can sign in</h2>
          <form onSubmit={handleFormSubmit} className={styles.form}>
            <p style={{color: "red"}} >{error}</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
          </form>
            <Link href="/main" className={styles.form} style={{textDecoration: "none"}}>
              <button style={{ backgroundColor: "black", color: "white" }}>Back</button>
            </Link>
        </>
        }
      </div>
    </>
  )
}

export default Page
