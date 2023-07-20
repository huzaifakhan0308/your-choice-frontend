import React from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import logo from '../../public/your-choice-logo.png'

const Navbar = () => {
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
                    <Link href="/contact" >
                        <li>
                            Contact us
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
