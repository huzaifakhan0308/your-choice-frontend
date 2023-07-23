"use client";
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import logo from '../../public/your-choice-logo.png'
import menuIcon from '../../public/menuIcon.png'

const Navbar = () => {
    const [boolean, setBoolean] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("your-choice-owner"));
        if (data && data.username === process.env.NEXT_PUBLIC_USERNAME) {
            setBoolean(true)
        }
    }, []);

    const handleLinkClick = () => {
        setShowMenu(false);
    };
    return (
        <>
            <header className={styles.headerMob}>
                <nav className={styles.Mobnavbar} style={{ display: showMenu ? "none" : "flex" }}>
                    <img src={logo.src} alt="logo" className={styles.logo} />
                    <img
                        src={menuIcon.src}
                        alt="menu icon"
                        onClick={() => { setShowMenu(true) }}
                        className={styles.mobileMenu}
                    />
                </nav>
                <ul className={styles.mobileUl} style={{ display: showMenu ? "flex" : "none" }}>
                    <Link href="/main" >
                        <li onClick={handleLinkClick}>
                            Home
                        </li>
                    </Link>
                    {boolean ?
                        <>
                            <Link href="/orders" >
                                <li onClick={handleLinkClick}>
                                    Orders
                                </li>
                            </Link>
                            <Link href="/products" >
                                <li onClick={handleLinkClick}>
                                    My products
                                </li>
                            </Link>
                        </>
                        :
                        <Link href="/contact" >
                            <li onClick={handleLinkClick}>
                                Contact us
                            </li>
                        </Link>}
                </ul>
            </header>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <img src={logo.src} alt="logo" className={styles.logo} />
                    <ul className={styles.ul} >
                        <Link href="/main" >
                            <li>
                                Home
                            </li>
                        </Link>
                        {boolean?
                        <>
                        <Link href="/orders" >
                            <li>
                                Orders
                            </li>
                        </Link>
                        <Link href="/products" >
                            <li>
                                My products
                            </li>
                        </Link>
                        </>
                        : 
                        <Link href="/contact" >
                            <li>
                                Contact us
                            </li>
                        </Link>}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
