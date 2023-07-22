"use client";
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import logo from '../../public/your-choice-logo.png'

const Navbar = () => {
    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("your-choice-owner"));
        if (data && data.username === process.env.NEXT_PUBLIC_USERNAME) {
            setBoolean(true)
        }
    }, []);
    return (
        <header>
            <nav className={styles.navbar}>
                <img src={logo.src} alt="logo" className={styles.logo} />
                <ul>
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
    );
};

export default Navbar;
